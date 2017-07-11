 var obj;
                    new Vue({
                        el: "#vueJS",
                        data: function(){
                                        return obj={email:"",
                                                    nome: "",
                                                    sexo:"",
                                                    curso:"",
                                                    endereco:"",
                                                    complemento:"",
                                                    cep:"",
                                                    municipio:"",
                                                    uf:"",
                                    };
                        },
                        methods: {
                        salvar: function(){
                            stringForm = JSON.stringify(obj);
                            localStorage.setItem("cadastro",stringForm);
                        }
                        },
                        created: function() {				
				            var valorResultado = localStorage.getItem("cadastro");
					        if(valorResultado){
                            var dados = JSON.parse(valorResultado);
						    this.nome = dados.nome;
                            this.email = dados.email;
                            this.sexo = dados.sexo;
                            this.curso = dados.curso;
                            this.endereco = dados.endereco;
                            this.complemento = dados.complemento;
                            this.cep=dados.cep;
                            this.municipio = dados.municipio;
                            this.uf = dados.uf;
					        }
			            }
                        });