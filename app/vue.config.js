export default {
  configureWebpack: {
    devServer: {
      before(app) {
        /* 模拟后台服务器 express */
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query;
          if (username === 'thong' && password === 123) {
            res.json({ code: 1, token: '123**90' })
          } else {
            res.status(401).json({ code: 0, message: '用户名或密码错误' })
          }
        })

        /* 保护接口中间件 */
        function auth(req, res, next) {
          if (req.headers.token) {
            next()
          } else {
            res.sendStatus(401)
          }
        }

        app.get('/api/login', auth, (req, res) => {
          res.json({ code: 1, data: { name: '老师' }})
        })
      }
    }
  }
}