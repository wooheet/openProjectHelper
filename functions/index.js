const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//디비에 읽는거
exports.practice_write_function = functions.https.onRequest((request, response) => {
  console.log('start practice_write_function');
 const test_ref = admin.database().ref('/test');

 test_ref.child("여기에 이름을 적으세욤").set("success")

 response.send("wrtie finish")
});

//디비쓰는거
exports.practice_read_function = functions.https.onRequest((request, response) => {
console.log('start practice_read_function');
 const test_ref = admin.database().ref('/test');

 test_ref.once("value", function(data){
   response.send("내 디비안에 있는 내용들:"+JSON.stringify(data.val()))
  });
});

//페이지 이동시킬때ㅇㅇ
exports.practice_move_function = functions.https.onRequest((request, response) => {
console.log('start practice_move_function');
 const test_ref = admin.database().ref('/test');

 //이런식으로 이동ㅇㅇ
 response.redirect('https://us-central1-opensourceproject-73d9a.cloudfunctions.net/detail_page');
});
