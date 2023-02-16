
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'i.imgur.com', 'raw.githubusercontent.com', 'cdn.shopify.com'],
   },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);
