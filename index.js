// ----------------------------showuserdetails function -------------------------------------------------------

function saveuserdetails(event){
  event.preventDefault();
  console.log("vaibhav");
const name=event.target.name.value;
const phone=event.target.phone.value;
const email=event.target.email.value;
const date=event.target.date.value;
const time=event.target.time.value;
const userobj={
  name,
  phone,
  email,
  date,
  time,
}
localStorage.setItem(userobj.name,JSON.stringify(userobj));
showuserdetails(userobj);

// ------------------------- free input text data remove
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("phone").value="";
document.getElementById("date").value="";
document.getElementById("time").value="";

}

// ------------------------showuserdetails on Screen---------------------------------------------------------------

function showuserdetails(userobj){
  const parent=document.getElementById("userdata")
  const child=document.createElement("li");
  const p=document.createElement("p");
  parent.appendChild(child);
  

  child.textContent = userobj.name+"__"+userobj.email+"__"+userobj.phone+"__"+userobj.date+"__"+userobj.time+"__";

  // --------------------create delete button
 const deletebtn=document.createElement("input");
 deletebtn.type="button";
 deletebtn.id="btn";
 deletebtn.value="Delete";
 child.appendChild(deletebtn);
 deletebtn.onclick=()=>{
  parent.removeChild(child);
  localStorage.removeItem(userobj.name);
 }

//  ----------------------------create Edit Button------------------------------------------------
const editbtn=document.createElement("input");
editbtn.type="button";
editbtn.value="Edit";
editbtn.id="btn";
child.appendChild(editbtn);
editbtn.onclick=()=>{
  // console.log(document.getElementById("name"));
  document.getElementById("name").value=userobj.name;
  document.getElementById("phone").value=userobj.phone;
  document.getElementById("email").value=userobj.email;
  document.getElementById("date").value=userobj.date;
  document.getElementById("time").value=userobj.time;
  parent.removeChild(child);
}



}

window.addEventListener("DOMContentLoaded",()=>{
  const localStorageobj=localStorage;
  const localStoragekeys=Object.keys(localStorageobj);

  for(var i=0;i<localStoragekeys.length;i++)
  {
    const keys=localStoragekeys[i];
    const userdetails=localStorageobj[keys];
    const userdetailsobj=JSON.parse(userdetails);
    showuserdetails(userdetailsobj);
  }
})


