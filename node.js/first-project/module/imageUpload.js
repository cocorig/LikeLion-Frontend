const multer = require("multer");


// 이미지 저장 위치, 파일 명 
const storage =  multer.diskStorage({
  destination : (req , file ,cb )=>{
    cb(null ,  'public/images/')
  },
  filename: (req, file, cb) => {
    cb(null ,  file.originalname)
  },
});
const upload = multer({storage: storage});

module.exports =  upload;
