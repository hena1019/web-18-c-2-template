// On clicking remove button the item should be removed from DOM as well as localstorage.

var bag=JSON.parse(localStorage.getItem("orders")) || []
console.log(bag)
// console.log(bag.length)


if(bag==[]){
    var h1=document.createElement("h2");
    h1.innerText="no items added "
    document.querySelector("#cont").append(h1)
}
else{
 var tp=0
for(var i=0;i<bag.length;i++){
    var tp=tp+Number(bag[i].price);
}
    append(bag)
function append(item){
    item.map(function(data){
          var boxes=document.createElement("div")
          boxes.setAttribute("class","boxes")
          var pics=document.createElement("img")
          pics.src=data.img
          console.log(data.img)
          var name=document.createElement("h4")
          name.innerText=data.name;
          var price=document.createElement("p")
          price.innerText=data.price;
          var but=document.createElement("button")
          but.innerText="remove"
          but.addEventListener("click",function(){
              remove(data,index)
          })
        
          boxes.append(pics,name,price,but)
          document.querySelector("#cont").append(boxes)
    })
}
  document.querySelector("#price").append(tp)
}

function remove(elem,index){
bag.splice(index,1)
localStorage.setItem("orders")
}


