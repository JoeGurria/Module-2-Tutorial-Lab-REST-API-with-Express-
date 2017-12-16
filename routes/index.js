var posts = require("../routes/posts.js");
var comments = require("../routes/comments.js");


exports.routes = {

    store:[],
    arr:[],
    //comments:[],
    setComments: function(myComments) {
        this.arr = myComments;
      },
    setStore: function(myStore) {
      this.store = myStore;
    },
    getStore:function(){

return this.store;
    },
    getPosts(req, res) {
      //posts.setStore(this.store)
      comments.getPosts(req, res)
    }, 
    addPost(req, res) {
     // posts.setStore(this.store)
     comments.addPost(req, res)
    },
    updatePost(req, res) {
      //posts.setStore(this.store)
      comments.updatePost(req, res)
    },
    removePost(req, res) {
      //posts.setStore(this.store)
      comments.removePost(req, res)
    },

    getComments(req, res) {
      //comments.setStore(this.store)
      //comments.setComments(this.arr)
        comments.getComments(req,res)
      }, 
      addComment(req, res) {
        //comments.setStore(this.store)
       // comments.setComments(this.arr)
        comments.addComment(req, res)
      },
      updateComment(req, res) {
        //comments.setStore(this.store)
        comments.updateComment(req, res)
      },
      removeComment(req, res) {
        //comments.setStore(this.store)
        comments.removeComment(req, res)
      }  
  }
