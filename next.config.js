/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pizza.obrazkontrolny.pl', 'localhost', 'media.graphcms.com'],
  },
  extends: [
    'plugin:@next/next/recommended',
  ],
}

module.exports = nextConfig
