(function(){
  var app = angular.module('blogApp',[]);

  app.controller('BlogController', ['$http', function($http){

    var blog = this;
    blog.title = "CMAD BLOGS";

    blog.posts = {};
    $http.get('http://localhost:9999/cmadblog/blogsite/blogs').success(function(data){
      blog.posts = data;
    });

    blog.tab = 'blog';

    blog.selectTab = function(setTab){
      blog.tab = setTab;
      console.log(blog.tab)
    };

    blog.isSelected = function(checkTab){
      return blog.tab === checkTab;
    };

    blog.post = {};
    blog.addPost = function(){
      blog.posts.unshift(this.post);
      var config = {headers:  {
        'Content-Type': 'application/json'
      }
    };
    
    var data = {
      title : blog.post.title,
      blogMessage:blog.post.blogMessage.join()
    }    
      $http.post('http://localhost:9999/cmadblog/blogsite/blogs', JSON.stringify(data),config) .then(function (response) {
        if (response.data)
        console.error("Post Data Submitted Successfully!" +response.data );
        blogPath = response.headers('Location');
        console.log('Location recieved '+blogPath);
        /*
        $http.put(blogPath , JSON.stringify(blog.post),config).then(function (response) {
          if (response.data)
          console.log("Put Data Submitted Successfully!");
          console.log('Response Status  recieved '+response.status);
        }, function (response) {
          console.log("Put Data Failed "+response.status);
          console.log("Put Data Failed "+response.statusText);
        });
        */
      }, function (response) {
        console.log("Post Data Failed");
        console.log("Put Data Failed "+response.status);
        console.log("Put Data Failed "+response.statusText);
      });
      blog.tab = 0;
      blog.post ={};
    };

  }]);

  app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
      this.comment.createDate= Date.now();
      post.comments.push(this.comment);
      this.comment ={};
    };
  });

})();
