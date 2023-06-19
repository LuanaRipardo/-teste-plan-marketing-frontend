<template>
  <div v-if="show" :class="['message', messageType]">
    {{ messageText }}
  </div>
</template>

<script>
export default {
  props: {
    messageType: {
      type: String,
      required: true,
    },
    messageText: {
      type: String,
      required: true,
    },
  },
  computed: {
    show() {
      return this.messageText !== '';
    },
  },
  mounted() {
    setTimeout(() => {
      this.clearMessage();
    }, 3000);
  },
  methods: {
    clearMessage() {
      this.$emit('clear-message');
    },
  },
};
</script>

<style>
.message {
  padding: 10px 20px;
  margin-bottom: 10px;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  transition: opacity 0.5s ease-out;
}

.success {
  background-color: #1bb01b;
}

.error {
  background-color: #ff0000;
}
</style>
