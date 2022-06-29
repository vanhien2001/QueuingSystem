/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#FF9138',
                            "@typography-title-font-weight": 700,
                            //btn
                            "@btn-border-radius-base": "8px",
                            "@btn-font-weight": 700,
                            //form
                            "@form-item-label-font-size": "18px",
                            //menu
                            "@menu-item-color": "#7E7D88",
                            "@menu-item-active-bg": "#FF7506",
                            "@menu-item-font-size": "16px",
                            "@menu-item-height": "48px",
                            "@menu-item-boundary-margin": 0,
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};