/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
    images: {
        domains: ['songjilong-1312734502.cos.ap-shanghai.myqcloud.com'],
      },
}

module.exports = nextConfig
