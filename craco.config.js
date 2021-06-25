const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {
    plugins: [
      // 配置 babel-plugin-import
      ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }, 'antd'],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                "@hd": "2px",
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
        require('postcss-pxtorem')({
          rootValue: 75,
          unitPrecision: 5,
          propList: ["*"],
          selectorBlackList: [],
        }),
      ]
    },
  },
};


