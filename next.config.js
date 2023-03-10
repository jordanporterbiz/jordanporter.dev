/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'blackphoenixsolutions.co.uk', 'finniestonhostel.com'],
    
  }
}

module.exports = nextConfig
