const mongoose = require('mongoose')

const Post = require("./models/post")

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})



//CREATE
// Post.create({
//     title:"Benim İlk Post Başlığım",
//     content: "Post içeriği , lorem ipsum text"
// },(error,post)=>{
//     console.log(error,post)
// })




//READ işlemleri
//db deki tüm verileri getirir 
// Post.find({},(error,post)=>{
//     console.log(error,post)
// })

//READ
//title ile db den başlığa göre dökümanı getirdi 
// Post.find({
//     title:"Benim İlk Post Başlığım"
// },(error,post)=>{
//     console.log(error,post)
// })



// Post.findById("607ddda741ed7e1260292558",(error,post)=>{
//     console.log(error,post)
// }
// )


// Post.findByIdAndUpdate("607ddda741ed7e1260292558",{
//     title:"Benim 12. post başlığım"
// },(error,post)=>{
//     console.log(error,post)
// })


// Post.findByIdAndUpdate("607deb23ed18ba1ba42464ef",{
//     title:"Burcu",
//     content:"Değiştirilen içerik byid.update ile"
// },(error,post)=>{
//     console.log(error,post)
// })

Post.findByIdAndDelete("607deb23ed18ba1ba42464ef",(error,post)=>{
    console.log(error,post)
})