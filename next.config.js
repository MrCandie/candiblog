/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "candie",
        mongodb_password: "AVjEmCJzf2419i5T",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "candie",
      mongodb_password: "AVjEmCJzf2419i5T",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog",
    },
  };
};

module.exports = nextConfig;
