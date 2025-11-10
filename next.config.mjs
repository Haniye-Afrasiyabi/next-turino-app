/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // domains: ["localhost"], //قبل از deploy
    // domains: ["travel-agency-api-fq5j.onrender.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "6500", // پورت سرور لوکال بک‌اند
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "travel-agency-api-fq5j.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
