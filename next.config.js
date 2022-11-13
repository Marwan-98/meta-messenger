/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["static.wikia.nocookie.net", "scontent.fcai20-1.fna.fbcdn.net"],
  },
  experimental: {
    appDir: true,
  },
};
