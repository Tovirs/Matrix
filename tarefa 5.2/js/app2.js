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
    dadosString = localStorage.getItem('cadastro');	
    var array = JSON.parse("[" + dadosString + "]");
        for(var key in array){
        this.rows.push({Email: array[key].email, Nome: array[key].nome, Sexo: array[key].sexo, Curso: array[key].curso, Endereco: array[key].endereco, Complemento: array[key].cep, Municipio: array[key].municipio, UF: array[key].uf});
        }
    }
},
});
