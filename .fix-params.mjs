import fs from 'fs';
import path from 'path';

const root = path.resolve('src/app');

function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.tsx')) process(p);
  }
}

function process(file) {
  let s = fs.readFileSync(file, 'utf8');

  // Skip files with no params to migrate.
  if (!s.includes('params') || (!s.includes('params: { locale') && !s.includes('Promise<{ locale: string }>'))) return;

  // Strip any previously injected line (idempotent re-run safe).
  s = s.replace(/\s*const \{ locale \} = await params;\r?\n/g, '');

  // Step 1: type annotation -> Promise (idempotent)
  s = s.split('params: { locale: string }').join('params: Promise<{ locale: string }>');
  // Step 2: destructuring `params: { locale }` -> `params` (idempotent)
  s = s.split('params: { locale }').join('params');

  // Step 3: insert awaited params as the first statement, right after the
  // function body's opening brace. `[^{]*` stops at the first `{` (the body),
  // which is deterministic regardless of object literals in the body.
  const EOL = s.includes('\r\n') ? '\r\n' : '\n';
  const re = /(export\s+(?:(?:default\s+)?async\s+)?function\s+\w+\([^)]*\bparams\b[^)]*\)[^{]*\{)(\r?\n)/g;
  s = s.replace(re, `$1$2  const { locale } = await params;${EOL}`);

  fs.writeFileSync(file, s);
  console.log('transformed', file);
}

walk(root);
console.log('done');
