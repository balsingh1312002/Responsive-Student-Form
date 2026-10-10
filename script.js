// const btn=document.querySelector("btn");
// const table=document.getElementById("table");
// btn.addEventListener("click",(event)=>{
//     event.preventDefault();
// const firstName=document.getElementById("firstname").value;
// const lastName=document.getElementById("lastname").value;
// const email=document.getElementById("email").value;
// const address=document.getElementById("address").value;
// const pincode=document.getElementById("pincode").value;
// const state=document.getElementById("state").value;
// const country=document.getElementById("country").value;
// const selectGender=document.querySelector('input[name="gender"] : checked');
// const gender=selectGender ? selectGender.value : "";

// const studentDetails=[
//     firstName,
//     lastName,
//     email,
//     address,
//     pincode,
//     gender,
//     state,
//     country
// ];
// const row=table.insertRow();
// studentDetails.forEach((details)=>{
//     const cell=row.insertCell();
//     cell.innerText=details;
// });
// form.reset();
// });

const table=document.getElementById("table");
const btn=document.getElementById("btn");
const firstName=document.getElementById("firstname");
const lastName=document.getElementById("lastname");
const email=document.getElementById("email");
const address=document.getElementById("address");
const pincode=document.getElementById("pincode");
const state=document.getElementById("state");
const country=document.getElementById("country");
btn.addEventListener("click",(event)=>{event.preventDefault();
    const gender=document.querySelector('input[name="gender"]:checked');
if(gender){
    gender.value;
}else{alert("Please select a gender");}

    const row=table.insertRow();
    const cell1=row.insertCell();
    const cell2=row.insertCell();
    const cell3=row.insertCell();
    const cell4=row.insertCell();
    const cell5=row.insertCell();
    const cell6=row.insertCell();
    const cell7=row.insertCell();
    const cell8=row.insertCell();
    cell1.innerText=firstName.value;
    cell2.innerText=lastName.value;
    cell3.innerText=email.value;
    cell4.innerText=address.value;
    cell5.innerText=pincode.value;
    cell6.innerText=gender.value;
    cell7.innerText=state.value;
    cell8.innerText=country.value;    
    
});