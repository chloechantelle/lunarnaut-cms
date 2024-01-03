module.exports = {
    pageExtensions: ['tsx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push(
            ...[
                {
                    test: /\.yml$/,
                    type: 'json',
                    use: 'yaml-loader',
                },
                {
                    test: /\.svg$/,
                    use: '@svgr/webpack',
                },
            ]
        );
        config.resolve.fallback = {
            // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped.
            ...config.resolve.fallback,

            fs: false,
        };
        return config;
    },
};
