const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
//const routes =require('routes')
var routes = require("./routes")

let storeInit = {
  "posts": [
   {"name": "'Top 10 ES6 Features every Web Developer must know",
    "url": "https://webapplog.com/es6",
    "text": "This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.",
    "comments": [
        {"text": "Cruel…..var { house, mouse} = No type optimization at all"},
      {"text": "I think you’re undervaluing the benefit of ‘let’ and ‘const’."},
      {"text": "(p1,p2)=>{ … } ,i understand this ,thank you !"}      
    ]
    }
  ]
} 
  //let posts=res.json(store.posts);
  var store = [];
  //var comments=[];
  store.push(storeInit)
  let app = express()
  app.use(bodyParser.json())
  app.use(logger('dev'))
  app.use(errorhandler())
  //
  //posts
  //
  app.get('/posts', (req, res) => {
    //routes.routes.setStore(store)
    routes.routes.getPosts(req,res)    
  })
  app.post('/posts', (req, res) => {
    //routes.routes.setStore(store)
    routes.routes.addPost(req,res) 
  })
  app.put('/posts/:id', (req, res) => {
    //routes.routes.setStore(store)
    routes.routes.updatePost(req,res)
  })
  app.delete('/posts/:id', (req, res) => {
    //routes.routes.setStore(store)
    routes.routes.removePost(req,res)
  })
  //
  //comments
  //
  app.get('/posts/:postid/comments', (req, res) => {
    //routes.routes.setStore(store)
    routes.routes.getComments(req,res)    
  })
  app.post('/posts/:postid/comments', (req, res) => {
    //routes.routes.setStore(store)
    routes.routes.addComment(req,res) 
  })
  app.put('/posts/:postid/comments/:commentid', (req, res) => {
    //routes.routes.setStore(store)
    routes.routes.updateComment(req,res)
  })
  app.delete('/posts/:postid/comments/:commentid', (req, res) => {
    //routes.routes.setStore(store)
    routes.routes.removeComment(req,res)
  })
  


app.listen(3000) 








