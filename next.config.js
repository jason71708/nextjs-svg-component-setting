/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack( config ) {
    config.module.rules.push( {
      test: /\.svg$/,
      issuer: /\.(ts|tsx|js|jsx)$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            ref: true,
          },
        },
        {
          loader: 'next-image-loader',
          options: {
            isServer: config.name === 'edge-server' || config.name === 'server',
            isDev: config.mode === 'development',
            basePath: "",
            assetPrefix: "",
          },
        },
      ],
    });

    return config;
  }
}

module.exports = nextConfig
