<template>
  <div>
    <AppNavbar />
    <div class="container mt-4">
      <h2 class="text-center title">Criar Novo Aparelho</h2>
      <AppMessage :messageType="messageType" :messageText="messageText" @clear-message="clearMessage" />
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card bg-dark text-white mb-3">
            <div class="card-body">
              <form @submit.prevent="createAppliance" class="custom-form">
                <div class="form-group text-left mb-3">
                  <label for="name" class="label">Nome:</label>
                  <input type="text" id="name" v-model="applianceData.name" required class="form-control form-control-lg custom-input">
                </div>
                <div class="form-group text-left mb-3">
                  <label for="description" class="label">Descrição:</label>
                  <textarea id="description" v-model="applianceData.description" class="form-control form-control-lg custom-input" rows="4"></textarea>
                </div>
                <div class="form-group text-left mb-3">
                  <label for="voltage" class="label">Voltagem:</label>
                  <input type="text" id="voltage" v-model="applianceData.voltage" required class="form-control form-control-lg custom-input">
                </div>
                <div class="form-group text-left mb-3">
                  <label for="brand" class="label">Marca:</label>
                  <input type="text" id="brand" v-model="applianceData.brand" required class="form-control form-control-lg custom-input">
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-success btn-lg mt-3 btn-custom">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import AppNavbar from './AppNavbar.vue';
import  AppMessage  from './AppMessage.vue';

export default {
  components: {
    AppNavbar,
    AppMessage
  },
  data() {
    return {
      applianceData: {
        name: '',
        description: '',
        voltage: '',
        brand: '',
      },
      messageType: '',
      messageText: '',
    };
  },
  
  methods: {
      createAppliance() {
      axios
      .post('http://localhost:8000/api/appliances', this.applianceData)
      .then(() => {
        // Limpar os campos do formulário
        this.applianceData.name = '';
        this.applianceData.description = '';
        this.applianceData.voltage = '';
        this.applianceData.brand = '';

        // Definir a mensagem de sucesso
        this.messageType = 'success';
        this.messageText = 'Aparelho criado com sucesso';

        setTimeout(() => {
          window.location.href = 'http://localhost:8081/create';
        }, 1000);
      })
      
      .catch(error => {
        console.error('Erro ao criar o aparelho:', error);

        // Definir a mensagem de erro
        this.messageType = 'error';
        this.messageText = 'Erro ao criar o aparelho. Por favor, tente novamente.';
      });
    },
    clearMessage() {
    this.messageType = '';
    this.messageText = '';
  },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@400;700&family=Roboto&display=swap');

.text-center {
  display: flex;
  justify-content: center;
}

.text-left {
  text-align: left;
}

.title {
  font-family: 'Yanone Kaffeesatz', Arial, sans-serif;
  font-size: 55px;
}

.custom-input {
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: bold;
}

.label {
  font-family: 'Yanone Kaffeesatz', Arial, sans-serif;
  font-size: 25px;
}

.custom-form .btn-custom {
  background-color: #b3a111;
  border-color: #b3a111;
  font-family: 'Yanone Kaffeesatz', Arial, sans-serif;
  font-weight: bold;
  border-radius: 25px;
  font-size: 30px;
  padding: 10px 20px;
}

.card {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
