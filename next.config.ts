/** @type {import('next').NextConfig} */

const nextConfig: import('next').NextConfig = {
  basePath: '/perfil',
  assetPrefix: '/perfil/',
  output: 'export',
  images: {
    domains: ["tyn1t.github.io"],
    unoptimized: true,
  },
};


export default nextConfig;
