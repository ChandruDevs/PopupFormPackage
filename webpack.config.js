const path = require('path');
module.exports = {
    mode:"production",
    entry:"./src/index.js",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react'],
              },
            },
          },
        ],
      },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"index.js",
        libraryTarget:"umd",
        library:"@chandru/popup-form-component"
    },
    externals:{
        react:"react"
    },
    resolve:{
        extensions:[".js",".jsx"]
    }
}