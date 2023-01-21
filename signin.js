let signinBtn=document.getElementById("signin")


// khat.innerText="alok"
let loginArr=[]

signinBtn.addEventListener("click",()=>{

    let userData=JSON.parse(localStorage.getItem("userData")) || []
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
        loginArr.push(alName)
      
       
        

    }else{
        alert(`Sorry Check Your Details Again`)
    }

    // for(let i=0;i<loginArr.length;i++){
    //     khat.innerText=loginArr[i]
    // }
})