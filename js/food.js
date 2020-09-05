class Food{
    constructor(){
    this.foodStock = 20
    this.lastFed = null
    this.foodImg = loadImage("Milk.png")

    }
getFoodStock(){
database.ref("Food").on("value",(data)=>{
    this.foodStock = data.val();
})
}
updateFoodStock(){
    database.ref("/").update({
        Food:this.foodStock
      })
}
deductFood(){
this.foodStock --
this.lastFed = new Date().getHours()+":"+new Date().getMinutes()
}

    display(){
        if(this.foodStock<1){
        text("Food is Empty",50,400)
        }
        else{
           var x = 10
        for(var i=0;i<this.foodStock;i++){
            image(this.foodImg,x,350,100,100)
            x = x+15

        }
        }
        //if(mousePressed(feedPet)){
            
       // }
    }
}
