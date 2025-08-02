/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true, // Enable external directory imports (if needed)
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Define the protocol (e.g., http or https)
        hostname: 'm.media-amazon.com', // Define the allowed domain
        pathname: '/**', // Allow any pathname (optional, you can restrict paths if needed)
      },
    ],
  },
};

module.exports = nextConfig;
