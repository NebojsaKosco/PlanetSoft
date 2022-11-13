class Osoba{
    constructor(ime,prezime,brojTelefona){
        this.ime=ime;
        this.prezime=prezime;
        this.brojTelefona=brojTelefona;
    }
}

const personOne=new Osoba("Nebojsa","Kosco","065731095");
const personTwo=new Osoba("Nebojsa","Kosco","065731095");
const personThree=new Osoba("Nebojsa","Kosco","065731095");

const tableInput=[personOne,personTwo,personThree];

const myTable=document.getElementById("table-data");
const writeTable=myTable.innerHTML;

function writeInTable(){
    myTable.innerHTML = writeTable;


for (var i=0; i<tableInput.length; i++){
    myTable.innerHTML+="<tr><td>"+tableInput[i].ime +"</td>" + "<td>"+tableInput[i].prezime + "</td>" + "<td class='numb-tel'>"+tableInput[i].brojTelefona + "<button class='btn-delete' onclick='deletePeople("+ i +")'>X</button>"+"</td></tr>";
}
}
writeInTable();
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
function deletePeople(index){
    tableInput.splice(index, 1);
    writeInTable();
}
function addPeople(){
    let newName = document.getElementById("name").value;
    let newLName = document.getElementById("lName").value;
    let newNumber = document.getElementById("phoneNum").value;
    

    tableInput.push(new Osoba(newName, newLName, newNumber));

    
    writeInTable();
}