const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {unoptimized: true},
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify('cesium'),
            }),
        );
        return config;
    }

};

module.exports = nextConfig;
