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
        let tokenkey='maxclass'
        app.get('/api/login',(req,res)=>{
          const {username,password} = req.query
          const result = userpoor.filter(v=>{
            if(v.username==username&&v.password==password) {
              return v
            }
          })
          if(result.length>0) {
            res.json({
              code: 0,
              message: '登录成功',
              token: tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
            })
          }else {
            res.json({
              code: 1,
              message: '登录失败'
            })
          }
        })
        //banner图接口
        app.get('/api/banner',(req,res)=>{
          res.json({
            data: [
              {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/jdk8/docker_banner.png'
              },
              {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/jdk8/jdk8_banner.png'
              },
              {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png'
              }
            ]
          })
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
