<template>
  <div>
    <nav class="navbar custom-navbar">
      <div class="container-fluid">
        <div class="input-group">
          <input
            type="text"
            class="form-control rounded custom-input"
            v-model="filter.name"
            placeholder="Filtrar por nome"
          />
          <input
            type="text"
            class="form-control rounded custom-input"
            v-model="filter.brand"
            placeholder="Filtrar por marca"
          />
        </div>
      </div>
    </nav>
    <AppMessage :messageType="messageType" :messageText="messageText" @clear-message="clearMessage" />

    <div class="d-flex justify-content-end mt-4">
      <router-link to="/create" class="btn btn-dark btn-add">
        Adicionar
      </router-link>
    </div>
    <h2 class="custom-title mt-4">
      Lista de Aparelhos
    </h2>
  
    <!-- Tabela de aparelhos -->
    <table class="table table-striped table-hover mt-2">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Descrição</th>
          <th scope="col">Voltagem</th>
          <th scope="col">Marca</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="appliance in filteredAppliances" :key="appliance.id">
          <td>{{ appliance.name }}</td>
          <td>{{ appliance.description }}</td>
          <td>{{ appliance.voltage }}</td>
          <td>{{ appliance.brand }}</td>
          <td>
            <div class=" align-items-center">
              <router-link
                :to="{ name: 'ApplianceEdit', params: { id: appliance.id } }"
                class="btn btn-warning mr-2 btn-yellow"
              >
                Editar
              </router-link>
              <button class="btn btn-dark" @click="deleteAppliance(appliance.id)">
                Excluir
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import  AppMessage  from './AppMessage.vue';


export default {

  components: {
    AppMessage
  },
  data() {
    return {
      appliances: [],
      filter: {
        name: '',
        brand: '',
      },
    };
  },
  created() {
    this.fetchAppliances();
  },
  methods: {
    fetchAppliances() {
      axios
        .get('http://localhost:8000/api/appliances')
        .then(response => {
          this.appliances = response.data;
        })
        .catch(error => {
          console.error('Erro ao obter os aparelhos:', error);
        });
    },
    deleteAppliance(id) {
    axios
      .delete(`http://localhost:8000/api/appliances/${id}`)
      .then(() => {
        this.appliances = this.appliances.filter(
          appliance => appliance.id !== id
        );

        this.messageType = 'success';
        this.messageText = 'Aparelho excluído com sucesso';

        setTimeout(() => {
          window.location.href = 'http://localhost:8081/';
        }, 1000);
      })
      .catch(error => {
        console.error('Erro ao excluir o aparelho:', error);

        this.messageType = 'error';
        this.messageText = 'Erro ao excluir o aparelho. Por favor, tente novamente.';

        setTimeout(() => {
          this.messageType = '';
          this.messageText = '';
        }, 3000);
      });
    },
    editAppliance(id) {
      this.$router.push({ name: 'ApplianceEdit', params: { id } });
    },
  },
  computed: {
    filteredAppliances() {
      const { name, brand } = this.filter;
      let filtered = this.appliances;
      if (name) {
        filtered = filtered.filter(appliance =>
          appliance.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      if (brand) {
        filtered = filtered.filter(appliance =>
          appliance.brand.toLowerCase().includes(brand.toLowerCase())
        );
      }
      return filtered;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@400;700&family=Roboto&display=swap');

.custom-input {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.input-group .custom-input::placeholder {
  color: #fdf4f4;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.input-bg {
  background-color: rgb(70, 68, 68);
  border: none;
}

.custom-input {
  border-radius: 25px;
  border: none !important;
  padding: 8px;
  margin-right: 8px;
  background-color: rgb(70, 68, 68) !important;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  color: #fff;
}

.input-group > .form-control {
  border-radius: 20px !important;
}

.input-group {
  width: 32% !important;
}

.input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}


.custom-navbar {
  margin-bottom: 0;
  background-color: rgb(2, 2, 2);
}

.custom-title {
  margin-top: 2rem;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 4rem;
}

.table {
  margin-top: 1rem;
}

.btn {
  border-radius: 25px !important;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-weight: bold;
}

.btn-primary {
  border-radius: 25px !important;
  background-color: #b3a111 !important;
}

.btn-danger {
  border-radius: 25px !important;
  background-color: black !important;
}

.btn-dark {
  border-radius: 25px !important;
  background-color: #333 !important;
  color: #fff !important;
  margin-bottom: 10px;
}

.btn-add{
  margin-right: 80px;
}

.btn-dark.align-bottom {
  margin-bottom: 0;
}

.btn-yellow {
  margin-top: -11px;
  margin-right: 8px;
}

.ml-auto {
  margin-left: auto !important;
}
</style>
