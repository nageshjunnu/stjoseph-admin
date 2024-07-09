/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['kyroes.in'],
  },
  webpack: (config, { isServer }) => {
    // Modify webpack config here
    return config;
  },

};

export default nextConfig;
