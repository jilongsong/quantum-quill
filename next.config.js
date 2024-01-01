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
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://124.222.192.103:3000/:path*', // 替换为你的后端服务器地址
          },
        ];
      },
}

module.exports = nextConfig
