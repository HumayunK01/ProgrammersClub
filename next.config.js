/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // Add this if your site is not hosted at the root
  assetPrefix: '', // Add this if your assets are in a different location
}

module.exports = nextConfig 