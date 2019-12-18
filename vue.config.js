module.exports = {
  configureWebpack: {
    devServer: {
      //open: true,
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
        //导航分类列表
        app.get('/api/slideLists',(req,res)=> {
          res.json({
            data: [
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                }
              ],
              [
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                },
                {
                  url: 'https://m.xdclass.net',
                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/python/WechatIMG14578.png',
                  label: '分类一'
                }
              ],
            ]
          })
        })
        //获取分类页的分类接口
        app.get('/api/classify',(req,res)=>{
          switch(req.query.type) {
            case '0':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                    label: '手机'
                  },{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                    label: '耳机'
                  },{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                    label: '华为'
                  },{
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                    label: '电饭煲'
                  },{
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                    label: '手机'
                  },{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                    label: '耳机'
                  },{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                    label: '华为'
                  },{
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                    label: '电饭煲'
                  },{
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                    label: '手机'
                  },{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                    label: '耳机'
                  },{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                    label: '华为'
                  },{
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                    label: '电饭煲'
                  },{
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                    label: '手机'
                  },{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                    label: '耳机'
                  },{
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                    label: '华为'
                  },{
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                    label: '电饭煲'
                  },
                ]
              })
              break;
            case '1':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },{
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },{
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },{
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: 'iphone'
                  },
                ]
              })
              break;
            default: 
              res.json({
                data: []
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
