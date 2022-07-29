/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.acme.com', 'www.oetker.pl', 'localhost'],
  },
}

module.exports = nextConfig
