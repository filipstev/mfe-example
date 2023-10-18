/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "footer",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./Footer": "./components/Footer.tsx",
        },
        shared: {},
        extraOptions: {
          exposePages: false,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
