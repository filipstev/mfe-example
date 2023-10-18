/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "header",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./Header": "./components/Header.tsx",
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
