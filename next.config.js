/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
  
};

module.exports = nextConfig;
