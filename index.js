const path = require('path')
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

// 设置文件路径和模板引擎(ejs)
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)
