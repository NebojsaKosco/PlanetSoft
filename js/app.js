const myTable=document.getElementById("table-data");
const writeTable=myTable.innerHTML;


async function writeInTable(){
    let data=await getData();
    myTable.innerHTML = writeTable;
for (let i=0; i<data.length; i++){
    myTable.innerHTML+="<tr><td>"+data[i].name +"</td>" + "<td>"+data[i].lastName + "</td>" + "<td class='numb-tel'>"+data[i].numberTel + "<button class='btn-delete' onclick='deletePeople("+ i +")'>X</button>"+"</td></tr>";
}
}
 writeInTable();
async function getData(){ 
try {
    let response=await fetch("../db.json");
    let data=await response.json();
    return data;
} catch (error) {
    console.log(error)
    
}
}
getData();
function modalsFunctions(showForm){
    let newContactForm = document.getElementsByClassName('new-contact');
    let contactsTable = document.getElementsByClassName('container-data');

    if(showForm){
        newContactForm[0].style.display = "block";
        contactsTable[0].style.display = "none";
    }
    else{
        newContactForm[0].style.display = "none";
        contactsTable[0].style.display = "block";
    }
}

async function deletePeople(index){
    let datas=await getData();
    datas.delete(index);
    writeInTable();
}

const form = document.getElementById('forms-r');
form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

async function addPeople(){
const newObject={
    name : document.getElementById("name").value,
    lastName : document.getElementById("lName").value,
    numberTel : document.getElementById("phoneNum").value,
}
const jsonString=JSON.stringify(newObject);
writeInTable();
}
