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

function ispis(){
    myTable.innerHTML = writeTable;


for (var i=0; i<tableInput.length; i++){
    myTable.innerHTML+="<tr><td>"+tableInput[i].ime +"</td>" + "<td>"+tableInput[i].prezime + "</td>" + "<td>"+tableInput[i].brojTelefona + "</td>"

}
}
ispis();
function toggleDivs(showForm){
    var newContactForm = document.getElementsByClassName('new-contact-container');
    var contactsTable = document.getElementsByClassName('container-data');

    if(showForm){
        newContactForm[0].style.display = "block";
        contactsTable[0].style.display = "none";
    }
    else{
        newContactForm[0].style.display = "none";
        contactsTable[0].style.display = "block";
    }
}