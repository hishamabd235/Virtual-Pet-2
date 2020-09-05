//Create variables here
var dog, happyDog
var database
var foodS, foodStock
var lastFed, fedTime
var feedPet, addFood
var foodObj
function preload(){
  //load images here
  dogImg = loadImage("dogImg.png")
  happyDogImg = loadImage("dogImg1.png")
  
}

function setup() {
  createCanvas(1250, 800);
  database = firebase.database();
  dogSprite = createSprite(1000,500,100,100)
  dogSprite.addImage(dogImg)
  dogSprite.scale = 0.7;
  //foodStock = database.ref("Food");
//foodStock.on("value",readStock);
 // writeStock(20);
 foodObj = new Food();
  
  feedPet = createButton("Feed The Dog");
  feedPet.position(1000,95);
  

  addFood = createButton("Add Food")
  addFood.position(900,95)
  
  
}


function draw() {  
 background(46,139,87)
 //if(keyWentDown(UP_ARROW) && foodS>0){
 //  foodS --
 //writeStock(foodS);
 //dogSprite.addImage(happyDogImg)
 //}
 feedPet.mousePressed(()=>{
   foodObj.deductFood()
   foodObj.updateFoodStock()
   dogSprite.addImage(happyDogImg)

 })
 addFood.mousePressed(()=>{
  foodObj.foodStock++
  foodObj.updateFoodStock()
  dogSprite.addImage(dogImg)

})

  drawSprites();
  //add styles here
 fill("yellow");
 textSize(18);
 //text("Food Left Is "+foodS,50,50)
foodObj.display();
}


