var express = require('express');
var router = express.Router();

const postModel =  require("../model/post");


//  생성, 저장하기
router.post('/',async (req, res)=>{
  const {title , content} =  req.body;
  const post = new postModel({
    title : title,
    content : content,
  });
  try{
  const result = await post.save();
  res.status(200).json({
    message :  "upload success",
    data : result,
  })
  }catch(error){
    res.status(500).json({
      message : error,
    })
  }
})

// 가져오기
router.get('/', async (req, res)=>{
  try {              
    const result = await postModel.find({}); // 전체 게시물 가져오기
    res.status(200).json({
      message : 'read success',
      data : result,
    });
  } catch(error){
    res.status(500).json({
      message: error,
    });
  }
});

//  해당 id를 통해서 조회
router.get('/:id' , async (req, res)=>{
  const {id } = req.params;
  try{
    const result = await postModel.findById(id);
    res.status(200).json({
      message: 'detail success!!',
      data : result,
    });
  } catch (error){
    res.status(500).json({
      message: error,
    })
  }
})



//  해당 id를 찾아서 업데이트하기

router.put("/:id", async (req , res)=>{
  const  { id } = req.params;
  const {title , content} = req.body;
  try {
    const result =  await postModel.findByIdAndUpdate(id , {
      title :  title,
      content : content,
    },{
      new : true
    });
    res.status(200).json({
      message : 'update success',
      data : result,
    });
  } catch (error){
    res.status(500).json({
      message : error,
    });
  }
});

// 삭제하기

router.delete("/:id", async (req , res)=>{
  const { id } =  req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message : 'delate success!!',
    });
  } catch (error){
    res.status(500).json({
      message : error,
    });
  }
});
module.exports = router;

// // 외부 미들웨어 생성
// const loginCheck = require('../module/loginCheck');
// const upload = require('../module/imageUpload'); 

// router.get("/", loginCheck, (req, res)=>{
//   res.status(200).json({
//         message : 'login sucess',
    
//     });
// })

// router.post("/upload", upload.single('image'), (req, res)=>{
//   const file = req.file;
//   console.log(file);
//   res.status(200).json({
//     message : 'upload success',
//   });
// }
// )




// /* GET home page. */
// router.post('/main', ((req, res) => {
//   console.log(req.body); // 서버측에서 받아옴
//   const data = req.body.data;
//   res.send('문자열이 응답됩니다!!'); // 문자열 응답
//   res.json({ // json 갹체 응답
//     message :  'json 응답'
//   })
//   res.render('index'); // html코드를 브라우저에 보여주는 방식
//   // res.json({
//   //   message : ' post 성공!'
//   // })
// }))


// let arr = [];

// // req : 요청받은 데이터
// // res : 요청받았을 때 응답하는 데이터
// // GET method
// router.get('/read', (req, res) => {
//   // 정상적으로 응답
//   res.status(200).json({
//     message :  'read sucess',
//   });
// });


// // POST method : 데이터베이스에 데이터를 넣을 때 많이 사용

// router.post('/create', (req, res) => {
// //  const data =  req.body.data;
//  const {data} =  req.body;
//  arr.push(data);
//  res.status(200).json({
//   message : 'create sucess',
//   result : arr,
//  });
// })



// //PUT   update를 하려면 몇 번째에 있는지 알아야함 

// // update/0 0번째인 데이터를 확인
// // update/2 2번째인 데이터를 확인
// router.put('/update/:id', (req, res) => {
//   const { id } =  req.params;
//   console.log(id);
//   const { data } = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message : 'create sucess',
//     result : arr,
//    });
// })
// //get('/') 사용자의 요청을 처리할 수 있디.


// // DELETE 삭제

// router.delete('/delete/:id', (req , res)=>{
//   const {id} = req.params;
//   arr.splice(id, 1); // 해당 id만 삭제
//   res.status(200).json({
//     message : 'delete sucess',
//     result : arr,
//    });
// })
