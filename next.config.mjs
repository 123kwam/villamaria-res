/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 80, 85, 88, 90, 95],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
};

export default nextConfig;
