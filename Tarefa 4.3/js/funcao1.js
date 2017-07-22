

function pegarDados(){

fEmail= document.getElementById("email").value;  /*Pegando os valor de um elemento pelo ID que é o da input*/
var fNome= document.getElementById("nome").value;
var  i= document.getElementById("sexo").selectedIndex;/*Setando o índice do select*/
var fSexo= document.getElementById("sexo").options[i].text; /*Pegando o valor passando o índice armazenado*/
var j= document.getElementById("curso").selectedIndex;
var fCurso= document.getElementById("curso").options[j].text; 
var fEndereco= document.getElementById("endereco").value;
var fComplemento= document.getElementById("complemento").value;
var fCEP= document.getElementById("CEP").value;
var fMunicipio=document.getElementById("municipio").value;
var k=document.getElementById("UF").selectedIndex;
var fUF=document.getElementById("UF").options[k].value;

    objetoForm = {
    fEmail,
    fNome,
    fSexo,
    fCurso,
    fEndereco,
    fComplemento,
    fCEP,
    fMunicipio,
    fUF,
    /*Objeto criado para armazenar o conteúdo e para facilitar a manipulação.*/
};


var stringForm = JSON.stringify(objetoForm);/*Convertendo todo o objeto em String*/
x=localStorage.length+1;
localStorage.setItem(x, stringForm);/*Guardando os valores em String do objeto anterior em LocalStorage passando a Chave 'x'*/

}

function dataAutoSave(){//Essa função tem o objetivo de recuperar os dados de LocalStorage e Inserir todos os dados de volta ao Formulario

if (localStorage.x){
setTimeout(function() {
dados = JSON.parse(localStorage.getItem(x));//Necessário fazer a converção dos dados para o tipo Objeto

document.getElementById('email').value=dados.fEmail;
document.getElementById("nome").value=dados.fNome;
document.getElementById('sexo').options[document.getElementById('sexo').selectedIndex].text= dados.fSexo;
document.getElementById('curso').options[document.getElementById('curso').selectedIndex].text= dados.fCurso;
document.getElementById('endereco').value=dados.fEndereco;
document.getElementById('complemento').value=dados.fComplemento;
document.getElementById('CEP').value=dados.fCEP;
document.getElementById('municipio').value=dados.fMunicipio;
document.getElementById('UF').options[document.getElementById('UF').selectedIndex].text=dados.fUF;
 Materialize.updateTextFields();   //Essa função vai reinicializar todos os rótulos pra que não fique sobreposto com os valores
}, 2000);
}
}
function dataTable(){//Essa função tem o objetivo de recuperar os dados de LocalStorage e Inserir todos os dados de volta ao Formulario

if (localStorage.x){

dados = JSON.parse(localStorage.getItem(x));//Necessário fazer a converção dos dados para o tipo Objeto

document.getElementById('email').value=dados.fEmail;
document.getElementById("nome").value=dados.fNome;

}
}

function myFunction() {
    //ViDEO DOM HTML #3
    
    dados = JSON.parse(localStorage.getItem(1))
   var tb = document.getElementsByTagName("table").item(0);
   var row = tb.insertRow(-1);
   var cel0 = row.insertCell(0);
   var cel1 = row.insertCell(1);
   var cel2 = row.insertCell(2);
   var cel3 = row.insertCell(3);
   var cel4 = row.insertCell(4);
   var cel5 = row.insertCell(5);
   var cel6 = row.insertCell(6);
   var cel7 = row.insertCell(7);
   var cel8 = row.insertCell(8);
  
   cel0.appendChild(document.createTextNode(dados.fEmail));
   cel1.appendChild(document.createTextNode(dados.fNome));
   cel2.appendChild(document.createTextNode(dados.fSexo));
   cel3.appendChild(document.createTextNode(dados.fCurso));
   cel4.appendChild(document.createTextNode(dados.fEndereco));
   cel5.appendChild(document.createTextNode(dados.fComplemento));
   cel6.appendChild(document.createTextNode(dados.fCEP));
   cel7.appendChild(document.createTextNode(dados.fMunicipio));
   cel8.appendChild(document.createTextNode(dados.fUF));
   
}


