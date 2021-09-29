# gshop-client_blank

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
pages路由组件 components其他组件 router路由
//rem自动像素依赖
yarn add lib-flexible postcss-px2rem -D
配置在vue.config.js中
const px2rem = require('postcss-px2rem')
css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5   // 设计稿等分后的rem值   375/10
          })
        ]
      }
    }
  },
//下载路由‘
yarn add vue-router
### 轮播图 swiper
```
yarn add swiper
```
### vuex 
```
yarn add vuex
```
### lodash数组的转换插件
```
yarn add lodash
```
### miniui
```
yarn add mint-ui
按需引入需要下载插件包
yarn add babel-plugin-component -D
```
笔记666
