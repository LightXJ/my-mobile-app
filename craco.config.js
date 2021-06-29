const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {
    plugins: [
      // 配置 babel-plugin-import
      ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }, 'antd'],
      ['import', { libraryName: 'zarm', libraryDirectory: 'es', style: true }, 'zarm'],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                // "@hd": "2px",  // 由于设计稿为2倍稿，所以需要设置基础单位为2px
                '@primary-color': '#1DA57A' 
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcss: {
      mode: 'extends',
      plugins: [
        require('postcss-px-to-viewport')({
          viewportWidth: 750, //视口宽度（数字),对应的是我们设计稿的宽度
          viewportHeight: 1334, //视口高度（数字）
          unitPrecision: 3, //设置的保留小数位数（数字）
          viewportUnit: 'vw', //设置要转换的单位（字符串）
          selectorBlackList: ['.ignore', '.hairlines'], //不需要进行转换的类名（数组）
          minPixelValue: 1, //设置要替换的最小像素值（数字）
          mediaQuery: false, //允许在媒体查询中转换px（true/false）
          exclude: [/node_modules/]
        }),
      ]
    },
  },
};


