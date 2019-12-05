module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      //mock接口编写的地方 每次更改配置都需要重启项目才会生效
      before(app) {
        //注册接口 
        let userpoor = [
          {
            username: 'max1',
            password: '123456'
          },
          {
            username: 'max2',
            password: '123456'
          }
        ]
        app.get('/api/register',(req,res)=> {
          const {username,password} = req.query
          const userlength = userpoor.filter(v=>v.username==username).length
          if(userlength>0) {
            res.json({
              success: false,
              message: '用户名已经存在'
            })
          }else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
