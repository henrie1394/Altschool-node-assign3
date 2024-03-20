
//  Book functions
function getBooks(req,res){
    res.setHeader("Content-Type","application/json");
    const books = [ {name : "Unlock It"}, { name:"Peter Pan"}, { name: "Oliver Twist"}, {name: "Safe Haven"}
                  ];
    res.end(JSON.stringify(books));
  }
  
  function putBooks(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Books `)
  }
  
  function patchBooks(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Books `)
  }
  
  function postBooks(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Books `)
  }
  
  function deleteBooks(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Books `)
  }
  
  
  
  // Author functions
  function getAuthors (req,res){
      res.setHeader("Content-Type","application/json");
      const authors= [ {name : "Dan Lock"}, { name:"Slivia Keneth"}, { name: "Henry Etuk"}, {name: "Francine Rivers"}];
      res.end(JSON.stringify(authors));
  }
  
  function putAuthors(req,res){
     res.setHeader("Content-Type","text/plain");
     res.end(`hello from ${req.method} Authors `)
  }
  
  function patchAuthors(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Authors `)
  }
  
  function postAuthors(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Authors `)
  }
  
  function deleteAuthors(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Authors `)
  }
  
  
  
  module.exports = {
      getBooks, 
      putBooks,
      patchBooks,
      postBooks,
      deleteBooks,
      
      getAuthors,
      putAuthors,
      postAuthors,
      patchAuthors,
      deleteAuthors
  }