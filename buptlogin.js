var http=require('http');
var qs=require('querystring');
 
var post_data={
	'DDDDD':'',//学号
	'upass':'',//网关密码
  'AMKKey':"",
};//需要提交的数据
var content=qs.stringify(post_data);
 
var options = {
  host: '10.3.8.211',
  port: 80,
  method: 'POST',
  headers:{
  'Content-Type':'application/x-www-form-urlencoded',
  'Content-Length':content.length
  }
};
console.log("post options:\n",options);
console.log("content:",content);
console.log("\n");
var req = http.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
  var _data='';
  res.on('data', function(chunk){
     _data += chunk;
  });
  res.on('end', function(){
     console.log("\n--->>\nresult:",_data)
   });
});
 
req.write(content);
req.end();