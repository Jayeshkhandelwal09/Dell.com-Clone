let signinBtn=document.getElementById("signin")
let userData=JSON.parse(localStorage.getItem("userData")) || []




let NameArr = [];

signinBtn.addEventListener("click",()=>{

    
    let logEmail=document.getElementById("email").value
    let logPass=document.getElementById("pass").value
    

    let isVaild=false
    let alName=""
    for(let i=0;i<userData.length;i++){
        alName =userData[i].firstName
        if(userData[i].email==logEmail){
            if(userData[i].password==logPass){
                isVaild=true
            }
        }
    }

    if(isVaild){
        alert(`${alName} You Are Logged In Now`)
        NameArr.push(alName)
        localStorage.setItem("Name" , JSON.stringify(NameArr))
        window.location.href = "./index.html"
    }else{
        alert(`Sorry Check Your Details Again`)
    }

})