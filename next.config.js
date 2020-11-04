// next.config.js
const withImages = require('next-images')

module.exports = {
  withImages,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["imgur.com"],
  },
}

