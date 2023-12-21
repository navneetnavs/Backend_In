// to verify jsonwebtoken
const jwt = require("jsonwebtoken")
function verifyjwt(token){
  let ans = true;
  try {
    jwt.verify(token,jwtpassword);
  }
  catch(e){
    ans = false;
  }
  return ans;
}
const ans = verifyjwt("Anything here")
console.log(ans);
