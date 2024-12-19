/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'programmersclub.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['your-image-domain.com'],
  },
}

module.exports = nextConfig 