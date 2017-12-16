var posts = require("../routes/posts.js");
module.exports = {
    store:{"posts":[]},
    arr:[],
    comments:[],
    commentsChanged:boolean=false,
    setComments: function(myComments) {
        this.comments = myComments;
      },
      setStore: function(myStore) {
        this.store = myStore;
      },
      getStore: function(){
           return this.store;
      },
   
      UpdateStoreJSON:function(arrIn, postidIn){
 
        var result = [];
        var posts=[];
          
        for (i=0;  i < this.store.posts.length; i++) 
        {
             arr=JSON.parse(JSON.stringify(this.store.posts[i]))
          
            if (i==postidIn){
                    result.push({name: arr.name, url: arr.url, text:arr.text , comments: arrIn.comments});
                   
            }else{
                result.push({name: arr.name, url: arr.url, text:arr.text , comments: arr.comments});
            }
     }
     this.store={"posts":result}

     return this.store
   
  },
  UpdateStorePostsJSON:function(newPost, postidIn){
    
           var result = [];
        
           for (i=0;  i < this.store.posts.length; i++) 
           {
               if (i==postidIn){
                result.push(newPost);
               }else{
                result.push(this.store.posts[i]);
               }
        }
       this.store={"posts":result}
       return this.store

     },
     DeleteStorePostsJSON:function( postidIn){
        
               var result = [];
            
               for (i=0;  i < this.store.posts.length; i++) 
               {
                   if (i==postidIn){
                   }else{
                    result.push(this.store.posts[i]);
                   }
            }
           this.store={"posts":result}
           return this.store
         },
     AddStorePostsJSON:function(newPost){
            var posts = this.store
            posts.posts.push(newPost);

            this.store=posts
           return this.store
          
         },
  getPosts(req, res) {
    res.status(200).send(this.store)
},
addPost(req, res) {
    let newPost = req.body
    let id = this.store.length
    res.status(201).send(this.AddStorePostsJSON(newPost))
},
updatePost(req, res) {
    res.status(200).send(this.UpdateStorePostsJSON(req.body, req.params.id))
  
},
removePost(req, res) {
    res.status(204).send(this.DeleteStorePostsJSON(req.params.id))
}, 
    getComments(req, res) {
        res.status(200).send(this.store)
    }, 
    addComment(req, res) {
        let newComment = req.body
        var arr = JSON.parse(JSON.stringify(this.store.posts[req.params.postid]));
        arr.comments.push(newComment)
        res.status(201).send(this.UpdateStoreJSON(arr, req.params.postid))
    },
    updateComment(req, res) {
        var arr = JSON.parse(JSON.stringify(this.store.posts[req.params.postid]));
        arr.comments[req.params.commentid]=req.body
        res.status(200).send(this.UpdateStoreJSON(arr, req.params.postid))
    },
    removeComment(req, res) {
       
        var arr = JSON.parse(JSON.stringify(this.store.posts[req.params.postid]));
        arr.comments.splice(req.params.commentid, 1)
        res.status(204).send(this.UpdateStoreJSON(arr, req.params.postid))
    }  
  }