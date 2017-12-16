var comments = require("../routes/comments.js");
module.exports = {

    store:[],
    
      setStore: function(myStore) {
        this.store = myStore;
      },
      getStore: function(){
           return this.store;
      },
    getPosts(req, res) {
        res.status(200).send(this.store)
    },
    addPost(req, res) {
        let newPost = req.body
        let id = this.store.length
        this.store.push(newPost)
        comments.setStore(this.store)
        res.status(201).send({id: id})
    },
    updatePost(req, res) {
        this.store[req.params.id] = req.body
        comments.setStore(this.store)
        res.status(200).send(this.store[req.params.id])
    },
    removePost(req, res) {
        this.store.splice(req.params.id, 1)
        comments.setStore(this.store)
        res.status(204).send()
    }
    
  }