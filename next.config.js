/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['songjilong-1312734502.cos.ap-shanghai.myqcloud.com'],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: true, // 设为 true 表示永久重定向，设为 false 表示临时重定向
        },
      ];
    },
}

module.exports = nextConfig
