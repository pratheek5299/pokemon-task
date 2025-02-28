/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
    unoptimized: true, // Required for `next export`
  },
  output: "export", // Enables static site export
};

export default nextConfig;
