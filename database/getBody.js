
const getBody = (req) => {
    return new Promise ((resolve,reject) => {
      const data = [];
      let contentType = "";
      req.on("data", (chunk) => {
        data.push(chunk);
      });

      req.on('end', () => {
         const body = Buffer.concat(data).toString();

       if (req.headers["content-type"]){
        contentType = req.headers["content-type"].toLowerCase()
       }

         if (contentType.includes("application/json")){
          try {
            resolve(JSON.parse(body));
          } catch (error) {
            reject(error);
            return;
          }
         }  
         
         else {
          resolve({});
         }

      })

      req.on('error', (err) => {
        reject(err)
      })
    })
}

module.exports = getBody;