const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name :{
    type:String,
    required: [true,"No name"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String

});
const personSchema = new mongoose.Schema({
  name : String,
  age:Number,
  favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit",fruitSchema);
const Person = mongoose.model("Person",personSchema);

// const fruit = new Fruit({
//   name :"Apple",
//   review:"Pretty solid as a fruit.",
//   rating:4,
//
// });
const apple = new Fruit({
  name :"Apple",
  rating:4,
 review:"Pretty solid as a fruit."

});

const amy  = new Person({
  name :"Amy",
  age:24,
  favouriteFruit : apple

});


const kiwi = new Fruit({
  name:"kiwi",
  score:10,
  review:"The best fruit!"

});

const orange = new Fruit({
  name:"Orange",
  score:4,
  review:"Too sour for me"

});

const banana = new Fruit({
  name:"Banana",
  score:4,
  review:"Weird texture."

});

Fruit.find(function(err,fruits){
    if(err)
    {
      console.log(err);
    }
    else
    {
      fruits.forEach(function(fruit){
        console.log(fruit.name);
      });
    }

});

// Fruit.insertMany([apple,kiwi,orange,banana],function(err)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("Successfully saved all the fruits");
//   }
// }
// );

// Fruit.updateOne({_id:"62ac9231ed5d34de27647a2e"},{name:"Lemon"},function(err)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("The record was updated successfully");
//   }
// });

const person = new Person({
  name :"John",
  age:20,
});

// Fruit.deleteOne({name:"Apple"},function(err)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("Successfully deleted the record");
//   }
// });

// fruit.save();
// person.save();
amy.save();
