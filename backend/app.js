const dbcon= require('./connect')

const insertData= async()=>{
     let data=   await dbcon()
    let result =   data.deleteOne({name:"sss"})
    if(result.acknowledged){
        console.log("data save")
    }
}
insertData();