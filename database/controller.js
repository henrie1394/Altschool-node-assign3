const {
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
} = require("./functions");
const authenticate = require("./authenticate");

const handleBooks = (req,res) => {
  if (req.url === "/books") {
    switch (req.method) {
      case "GET":
        authenticate(req, res, getBooks);
        break;

      case "PUT":
        authenticate(req, res, putBooks);
        break;

      case "POST":
        authenticate(req, res, postBooks);
        break;
      case "PATCH":
        authenticate(req, res, patchBooks);
        break;
      case "DELETE":
        authenticate(req, res, deleteBooks);
        break;

      default:
        break;
    }
  }
};


const handleAuthors = (req,res) => {
  if(req.url=== "/authors"){
    switch (req.method) {
      case ("GET"):
          authenticate(req,res,getAuthors);
          break;
      case ("PUT"):
          authenticate(req,res,putAuthors);
          break;
      case ("POST"):
          authenticate(req,res,postAuthors);
          break;
      case ("PATCH"):
          authenticate(req,res,patchAuthors);
          break;
      case ("DELETE"):
          authenticate(req,res,deleteAuthors);
          break;
    
      default:
          break;
    }
  }
}


module.exports = {handleBooks, handleAuthors}