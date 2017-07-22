 var obj;
 var inscrito;
 var i = localStorage.length;
 var ayo = [];
new Vue({
el: "#vueJS",
data: function(){
        return obj = {                    
                    email:"",
                    nome: "",
                    sexo:"",
                    curso:"",
                    endereco:"",
                    complemento:"",
                    cep:"",
                    municipio:"",
                    uf:""
        }
},
methods: {
salvar: function(){
ayo.push(JSON.stringify(obj))
localStorage.setItem("cadastro",ayo);

},
}});