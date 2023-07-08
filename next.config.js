const isProd = process.env.MODE === "production";
const withPWA = require("@imbios/next-pwa")({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // next.js config
});
