const findUser = require('./db.filteruser');

const authenticate = (req,res,next) => {
  
    const {username, password} = req.headers;
    const user = findUser(username);

      if (!user){
        res.statusCode = 401;
        res.end("Enter username and password");
        return;
      } 
      else if(user.username !== username || user.password !== password){
        res.statusCode = 401;
        res.end("Wrong username or password");
        return;
      }
       else
      next(req,res);
}


module.exports = authenticate;