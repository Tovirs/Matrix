 new Vue({
el: "#app",
data: {
rows:[],
},
mounted: function(){
    this.method1();
},
methods: {
method1: function(){
    dadosString = localStorage.getItem("inscritos");	
    var array = JSON.parse("[" + dadosString + "]");
        for(var key in array){
        this.rows.push({Email: array[key].Email, Nome: array[key].Nome, Sexo: array[key].Sexo, Curso: array[key].Curso, Endereco: array[key].Endereco, Complemento: array[key].Complemento, CEP: array[key].Cep, Municipio: array[key].Municipio, UF: array[key].UF});
        }
    }
},
});
