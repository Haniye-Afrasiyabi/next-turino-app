/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // domains: ["localhost"],
    // domains: ["travel-agency-api-fq5j.onrender.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "travel-agency-api-fq5j.onrender.com",
        port: "",
        pathname: "/**", // اجازه می‌ده همه مسیرهای این دامنه بارگذاری بشن
      },
    ],
  },
};

export default nextConfig;
