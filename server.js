var express=require('express');
var app=express();
app.get('/',(req,res)=>
{
    res.sendFile("public/index.html",{root:__dirname});
    //res.send("hello");
}
);
app.listen(8000,function()
{
    console.log('server is runninig on 8000 port');
});