/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 requerido para Cloudflare Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
