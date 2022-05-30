var baggy=JSON.parse( localStorage.getItem("orders") ) || []
var bag=baggy.length || 0
var count=document.querySelector("#count");

var url="https://masai-mock-api.herokuapp.com/coffee/menu";

async function getdata(){
   
    try{
        var res=await fetch(url);
        var item1=await res.json();
        append(item1.menu.data)
        console.log(item1.menu.data)

    }catch(err){
        console.log(err)
    }
}
getdata()

function append(item){
    item.forEach(function(data){
          var box=document.createElement("div")
          box.setAttribute("class","box")
          var pics=document.createElement("img")
          pics.src=data.image
          var name=document.createElement("h4")
          name.innerText=data.title;
          var price=document.createElement("p")
          price.innerText=data.price;
          var but=document.createElement("button")
          but.innerText="Add to Bucket"
          but.addEventListener("click",function(){
              func(data)
          })
          box.append(pics,name,price,but)
          document.querySelector("#container").append(box)
    })
}

function func(order){
    bag++
    var arr=JSON.parse( localStorage.getItem("orders") ) || []
    arr.push(
        {
            name:order.title,
            img:order.image,
            price:order.price
        }
    )
    localStorage.setItem("orders",JSON.stringify(arr))
    ans()
}

function ans(){
    count.innerText=`[ ${bag} ]`
}
ans()


