// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                ie: '6',
            },
            useBuiltIns: 'entry',
            corejs: 3,
        }]
    ],
};
