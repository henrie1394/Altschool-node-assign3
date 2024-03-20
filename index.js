const http = require('http');
const getBody = require("./database/getBody");
const {handleBooks, handleAuthors} = require("./database/controller");
const port = 3000;


const server = http.createServer(async (req,res)=> {
    try {
        // for now getBody function does nothing since we get our username & password from the header
        const body = await getBody(req);
        req.body = body;
        
        // handle books endpoint
        handleBooks(req,res);
     
      //  handle authors endpoint
        handleAuthors(req,res); 
        
    } catch (error) {
        res.statusCode = 500;
        res.end(error.message)
    }
})

server.listen(port, ()=>{
    console.log('server is active at http://localhost:' + port)
    
})