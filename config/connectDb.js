const mongoose=require('mongoose');
module.exports=connectDb=async()=>{
    try {
        await mongoose.connect(process.env.db)
        console.log(`data base is connected`)
    } catch (error) {
        alert(`dataBase can not be connected error=${error.message}`)
    }
}