function auth(req, res, next){
  if(req.isAuthenticated()){
    next();
  }else{
    res.redirect("/auth");
  }
}

function isLogedIn(req, res, next){
  if(req.isAuthenticated()){
    req.isLogedIn = true;
  }else{
    req.isLogedIn = false;
  }
  next();
}


module.exports = {auth, isLogedIn};
