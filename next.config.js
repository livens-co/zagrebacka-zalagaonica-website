/** @type {import('next').NextConfig} */
const nextConfig = {


  images: {
    domains: [
      'tailwindui.com',
      'res.cloudinary.com',
      'img.freepik.com',
      'www.notebookcheck.biz',
      'lidermedia.hr',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/29qcn3pa/**",
      },
    ],
  },
};

module.exports = nextConfig;
