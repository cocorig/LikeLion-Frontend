var express = require('express');
var router = express.Router();

const userInfo = {
  lee : {
    password : '123123'
  },
  kim : {
    password : '456456'
  },
}


// 메인 페이지로 돌아가는 라우터
router.get('/',(req, res) => {
  const session = req.session;
  res.render("index", {
    username : session.username,
  })
})

// 로그인 코드 작성
router.get('/login/:username/:password', (req, res) =>{
  const session = req.session;
  const {username , password} =  req.params;
  if(!userInfo[username]){
    res.status(400).json({
      message :  'user not found'
    });
    
  }

  if(userInfo[username]["password"] === password){
    session.username =  username;
    res.status(200).json({
      message : "user login successful"
    });
  }else{
    res.status(400).json({
      message : "user pw incorrect"
    });
  }
});
router.get('/logout', (req, res) =>{
  const session =  req.session;
  if(session.username){
    //  sesstion삭제
    req.session.destroy((err)=>{
      if(err){
        console.log(err);
      }else{
        // redirect는 해당 라우터로 이동시킴
        res.redirect('/users')
      }
    })
  }else{
    req.redirect('/users');
  }
})
module.exports = router;
