/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: `static/chunks/remoteEntry.js`,
        remotes: {
          home: `home@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          header: `header@http://localhost:3002/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          footer: `footer@http://localhost:3003/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
