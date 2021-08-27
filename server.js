//Import the mongoose module
const mongoose = require("mongoose");

require("dotenv").config();

// Database connection :Connect to MongoDB
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Database connection error");
    } else {
      console.log("Database connection successful");
    }
  }
);

//   Create person schema model
let personModel = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});
const personne=mongoose.model('personne',personModel)
//Create and Save a Record of a Model:
// let person = new personne({
//     name: 'Mira',
//     age: 18,
//     favoriteFoods: ["Pizza","Hamburger","cheesecake"]
// })

// person.save()
//     .then(doc => {
//         console.log(` save ${doc}`)
//     })
//     .catch(err => {
//         console.error(err)
//     })

//Create Many Records with model.create()

// personne.create([
//     { name: "ELine", age: 25, favoriteFoods: ["daurade", "hamburger", "frittes"] },
//     { name: "Sabine", age: 30, favoriteFoods: ["pizza"] },
//     { name: "Meachel", age: 50, favoriteFoods: ["Kouskous"] },
//     { name: "André", age: 10, favoriteFoods: ["cheesecake"] },
//     { name: "Sara", age: 20, favoriteFoods: ["frittes","daurade"] },
//     { name: "Tom", age: 33, favoriteFoods: ["daurade","pizza"] },
//   ]); 

//   // Use model.find() to Search Your Database

// personne.find({ name:'Tom'})
// .then(doc=>{
//     console.log(doc)
// }).catch((err)=>{
//     console.log(err)
// })

//   //Use model.findOne()

// personne.findOne({ favoriteFoods: "daurade" })
// .then(doc=>{
//       console.log(doc)
//   }).catch((err)=>{
//       console.log(err)
//   });
  
//   // Use model.findById(()
  // personne.findById("61265711dc626256c649e21e", function (err, data) {
  //   if (err) {
  //     return console.log(err);
  //   } else {
  //     console.log(`person found by Id is ${data}`);
  //   }
  // });
// //Update by Running Find, Edit, then Save
 personne.findById('61265711dc626256c649e21f')
// .then(doc=>{
//   doc.favoriteFoods.push("fruits")
//   doc.save()
//   console.log(doc)
// }).catch((err)=>{
//   console.log(err)
// })
// //Update Using model.findOneAndUpdate()
personne.findOneAndUpdate({name:"ELine"},{age: 20},{new:true})
// .then(doc => {
//    console.log(doc)})
//    .catch(err => {
//       console.log(err)
//     })

//Delete One Document Using model.findByIdAndRemove
personne.findByIdAndRemove({_id:'61265711dc626256c649e21d'})
// .then((doc)=>{
//   console.log(doc)
// })


// // Delete Many Documents with model.remove()
personne.remove
//  ( { name: "ELine" },
//   (done = (err, data) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       console.log(data);
//       console.log(data.deletedCount);
//     }
//   })
// );
// // Chain Search Query Helpers to Narrow Search Results
personne.find({favoriteFoods:"pizza"})
  // .then((doc) => {
  //     console.log(doc) })
   
  //   .catch(err => {
  //     console.error(err)})
 
  


