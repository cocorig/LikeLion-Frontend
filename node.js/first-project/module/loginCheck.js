const loginCheck = (req, res, next) =>{
  const userLogin =  false;
  if(userLogin){
    next(); // 다음 라우터르 연결
  }else{
    res.status(400).json({
      message : 'login fail!!'
    });
  }
};

module.exports =  loginCheck;
