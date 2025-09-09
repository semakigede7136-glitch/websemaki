/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["docs.google.com", "drive.google.com"],
  },
};

module.exports = nextConfig;

