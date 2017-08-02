
new Vue({
el: "#vueJS",
data(){
        return {
        obj:[],
        newArray:{
                email:"",
                nome: "",
                sexo: '',
                        options: [
                        { text: '', value: '' },
                        { text: 'Masculino', value: 'Masculino' },
                        { text: 'Feminino', value: 'Feminino' }
                ],
                curso:"",
                        options2:[
                                {text: '', value:''},
                                {text: 'Curso Técnico em Informática', value:'Curso Técnico em Informática'},
                                {text: 'Curso Técnico em Alimentos', value:'Curso Técnico em Alimentos'},
                                {text: 'Curso Técnico em Agropecuária', value:'Curso Técnico em Agropecuária'},
                                
                        ],
                endereco:"",
                complemento:"",
                cep:"",
                municipio:"",
                uf:"RS",
                        options3:[
                                {text:'AC', value: 'AC'},
                                {text:'AL', value: 'AL'},
                                {text:'AM', value: 'AM'},
                                {text:'AP', value: 'AP'},
                                {text:'BA', value: 'BA'},
                                {text:'CE', value: 'CE'},
                                {text:'DF', value: 'DF'},
                                {text:'ES', value: 'ES'},
                                {text:'GO', value: 'GO'},
                                {text:'MA', value: 'MA'},
                                {text:'MG', value: 'MG'},
                                {text:'MS', value: 'MS'},
                                {text:'MT', value: 'MT'},
                                {text:'PA', value: 'PA'},
                                {text:'PB', value: 'PB'},
                                {text:'PE', value: 'PE'},
                                {text:'PI', value: 'PI'},
                                {text:'PR', value: 'PR'},
                                {text:'RJ', value: 'RJ'},
                                {text:'RN', value: 'RN'},
                                {text:'RS', value: 'RS'},
                                {text:'RO', value: 'RO'},
                                {text:'RR', value: 'RR'},
                                {text:'SC', value: 'SC'},
                                {text:'SE', value: 'SE'},
                                {text:'SP', value: 'SP'},
                                {text:'TO', value: 'TO'}
                ]
        }        
        }
},
methods: {
salvar: function(){
this.obj.push(JSON.stringify({Email: this.newArray.email, Nome: this.newArray.nome, Sexo: this.newArray.sexo, Curso: this.newArray.curso, Endereco: this.newArray.endereco, Complemento: this.newArray.complemento, Cep: this.newArray.cep, Municipio: this.newArray.municipio, UF: this.newArray.uf
}));
localStorage.setItem("inscritos",this.obj);

},
}});