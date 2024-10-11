const express= require('express')
require('./db/config')
const userdata= require('./db/userScheme')
const restabdata= require('./db/tabSchema')

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())




// app.get("/list", async (req, resp) => {
//     let data = await userdata.find();
//     resp.send(data);
//     console.log(data)
//     resp.end()
// })

app.get("/userlist",  async (req, resp)=>{
   let userdata1= await userdata.find();
   if(userdata1.length > 0){
    resp.send(userdata1)
   }   else{
    resp.send("sorry here1")
   }  
})

app.get('/tablist', async (req, resp)=>{
    let itemdata = await restabdata.find();
      if(itemdata.length>0){
        resp.send(itemdata)
      }
      else{
        resp.send("sorry")
      }
})

app.post('/reguser',async (req,resp)=>{
    let data = new userdata(req.body);
    let result= await data.save();
    resp.send(result);
    // console.log(result)
    if (data) {
        console.log("one record save")
    }
    else {
        console.log("sorry")
    }
})

app.post('/addtabdata', async (req, resp) =>{
    let tab= new restabdata(req.body)
    const resulttab= await tab.save()
    resp.send(resulttab);
    console.log(resulttab)
    
})  




app.listen(4400)