/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'css-tricks.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mytemplatesshop.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'www.thestreet.com',
        port: '',
        pathname: '/.image/**',
      },
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
      {
        protocol: 'https',
        hostname: 'presstelegram.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'bostonherald.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'img.haarets.co.il',
        port: '',
        pathname: '/bs/**',
      },
      

    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
