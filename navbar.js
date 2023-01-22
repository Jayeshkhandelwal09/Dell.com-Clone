let Name_Data = JSON.parse(localStorage.getItem("Name"))||[]
    
let khatarnak = document.getElementById("khatarnak")

if(Name_Data[0]){
    khatarnak.innerText = "👋" +"Hi" + " " + Name_Data[0]
}else{
    khatarnak.innerText = "🤵"+" "+" Sign In"
}




let count =  document.getElementById("no-items")

let cart_data=JSON.parse(localStorage.getItem("cart"))||[]

count.innerText = "No. of Items :"+ cart_data.length