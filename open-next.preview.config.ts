import {defineCloudflareConfig} from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

// Explicitly selected for Worker Previews; production keeps its existing setup.
// Serve the finite prerendered catalogue from read-only ASSETS, without data services.
// Populate these local build assets before preview upload; no ISR/revalidation is used.
export default defineCloudflareConfig({incrementalCache: staticAssetsIncrementalCache});
