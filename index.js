var fs = require('fs');
// to get current time and date
 const date=new Date();
 // to get year,date,... separetely
 const y=date.getFullYear();
 const m = date.getMonth()+1 ;
 const d = date.getDate();
 const h = date.getHours();
 const mi = date.getMinutes();
 const s = date.getSeconds();
 // to convert date,time...  into string
 const year=y.toString()
 const month=m.toString()
 const dated=d.toString()
 const hour=h.toString()
 const minute=mi.toString()
 const second=s.toString()
const filename=year+"-"+month+"-"+dated+"-"+hour+"hrs"+minute+"mins"+second+"secs";
//console.log(filename);
//
const express=require("express")
const app=express()
const port=3005
let directory_name = __dirname
//api to create file 
app.get("/",(req,res)=>
{
    // fs.writefile will create file with currenttime and date
    fs.writeFile(filename, filename, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
        
        });
    res.send(filename) //response msg
})
// api to get files in the folder
app.get("/getfiles",(req,res)=>
{
    // to get all the files in the directory
    let filenames = fs.readdirSync(directory_name);
    filenames.forEach((file) => {
        console.log("File:", file);
    });
    res.send("files displayed successfully");
      
})
app.listen(port,()=>{
    console.log("sever started")
})