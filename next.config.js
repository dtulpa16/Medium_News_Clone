/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
        pathname: '/proxy/**',
      },
      {
        protocol: 'https',
        hostname: 'tvnewsroom.org',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
