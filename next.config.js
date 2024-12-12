/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Add any other image domains you're using
    unoptimized: false, // Set to false for Vercel deployment
  },
}

module.exports = nextConfig 