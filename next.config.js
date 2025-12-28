/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
      allowedOrigins: [
        "jubilant-system-9g6xqjj9p492jr9-3000.app.github.dev",

        "*.app.github.dev",

        "localhost:3000",
      ],
    },
  },
};

module.exports = nextConfig;
