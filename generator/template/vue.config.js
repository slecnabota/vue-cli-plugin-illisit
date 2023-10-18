module.exports = {
    publicPath: '/',
    outputDir: 'public',
    assetsDir: 'assets',
    lintOnSave: false,
    configureWebpack: {
      devtool: 'source-map',
    },
    transpileDependencies: [
    ],
    
    chainWebpack: (config) => {
      config.entry('app')
        .clear()
      config.entry('app')
        .add('./app/main.js')
      config.resolve
        .modules.add('app')
    },
  }