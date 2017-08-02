<template>
  <div id="app">
    <div class="row">
      <form  class="col s6 push-s3" v-on:submit.prevent="salvar" >
        <div class="row">
            <div class="input-field col s12 ">
                <input v-model="newArray.email" id="email" type="email" class="validate" required>
                <label class="active" for="email" >Endereço de Email</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 ">
                <input v-model="newArray.nome" id="nome" type="text" class="validate" required>
                <label Class="active" for="nome">Nome</label>
            </div>
        </div>
        <div class="row">
            <div class="col s4 ">
                <div class="section">    
                <label>Sexo</label>
                    <select class="browser-default"v-model="newArray.sexo">
                        <option value="" selected></option>   
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s6 ">
            <label>Curso</label>
                <select class="browser-default" id="curso" v-model="newArray.curso">
                    <option value="" disabled selected></option>
                    <option value="Curso Técnico em Informática">Curso Técnico em Informática</option>
                    <option value="Curso Técnico em Alimentos">Curso Técnico em Alimentos</option>
                    <option value="Curso Técnico em Agropecuária">Curso Técnico em Agropecuária</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12 ">
                <input id="endereco" type="text" class="validate" v-model="newArray.endereco">
                <label Class="active" for="Endereco" >Endereço para correspondência</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input id="complemento" type="text" class="validate" v-model="newArray.complemento">
                <label Class="active" for="Complemento">Complemento do endereço</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s5">
                <input id="CEP" type="text" class="validate" required v-model="newArray.cep">
                <label Class="active" for="CEP">CEP</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <input id="municipio" type="text" class="validate" required v-model="newArray.municipio">
                <label Class="active" for="municipio">Município</label>
            </div>
            <div class="col s2 ">
                    <select class="browser-default" id="UF" v-model="newArray.uf">
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AM">AM</option>
                            <option value="AP">AP</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MG">MG</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="PR">PR</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS" selected>RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SE">SE</option>
                            <option value="SP">SP</option>
                            <option value="TO">TO</option>
                    </select>
            </div>
        </div>  
        <div class="row">
          <div class="col s6">
              <div class="btn1">
                  <button class="btn waves-effect waves-light" type="submit"  >Salvar</button>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
              <div class="btn0">
                  <a class="waves-effect waves-light btn-large" ><router-link to="/cadastrados">Ver Todos</router-link></a>
              </div>
          </div>
        </div>
        <div class="row">
          <p>
              <input type="checkbox" id="checkbox" v-model="checked">
              <label for="checkbox">Gravar no Firebase</label>
              
          </p>
        </div>
        <router-view></router-view>
    
 </form>
 </div>
 </div>
</template>

<script>
import Hello from './components/Hello'

import Firebase from 'firebase'

let config={
  apiKey: "AIzaSyBRvee3AI98MkKwjdBSlqN-QZwmYqwoBr0",
  authDomain: "matrix-89d1f.firebaseapp.com",
  databaseURL: "https://matrix-89d1f.firebaseio.com",
  projectId: "matrix-89d1f",
  storageBucket: "matrix-89d1f.appspot.com",
  messagingSenderId: "1061879607128"  
}

let app = Firebase.initializeApp(config);

let db = app.database();

let arrayRef = db.ref("matrix-89d1f");




export default {
  name: 'app',
 
  firebase: {
    array: arrayRef
  },
  data(){
    return{
      obj:[],
      checked: false,
      newArray: {
        email:'',
        nome:'',
        sexo:'',
        curso:'',
        endereco:'',
        complemento:'',
        cep:'',
        municipio:'',
        uf:''
      }
    }
  },
  methods: {
    salvar:function(){
      if(this.checked){
      arrayRef.push(this.newArray);
    }else{
        this.obj.push(JSON.stringify(this.newArray));
        localStorage.setItem("inscritos",this.obj);
      }
      this.newArray.email='',
      this.newArray.nome='',
      this.newArray.sexo='',
      this.newArray.curso='',
      this.newArray.endereco='',
      this.newArray.complemento='',
      this.newArray.cep='',
      this.newArray.municipio='',
      this.newArray.uf=''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
