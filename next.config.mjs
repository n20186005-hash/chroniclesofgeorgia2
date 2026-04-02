import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/:locale(zh-cn|zh-hant|en|ru)',
        destination: '/:locale/blog',
        permanent: true,
      },
      {
        source: '/blog/:locale(zh-cn|zh-hant|en|ru)/:slug*',
        destination: '/:locale/blog/:slug*',
        permanent: true,
      }
    ];
  }
};

export default withNextIntl(nextConfig);
