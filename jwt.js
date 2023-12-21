// to decode jwt
const jwt = require("jsonwebtoken")
function decodeJwt(token){
  const decoded = jwt.decode(token);
  if(decoded){
    return true
  }
  else{
    return false
  }
}
console.log(decodedJwt("Anything here"))
