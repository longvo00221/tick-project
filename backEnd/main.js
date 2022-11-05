const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = 3005


server.use(middlewares)
server.get('/echo',(req,res)=> {
    res.jsonp(req.query)
})


server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
      req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
  })


server.use(router)
server.listen(port, () => {
    console.log('JSOS server is running');
})