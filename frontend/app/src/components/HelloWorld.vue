<script setup>
import {onMounted, ref} from "vue";

  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })

  const users = ref([]);

  onMounted(async () => {
    try {
      const myHeaders = new Headers();
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      fetch("http://localhost:8000/api/users", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log("result", result);
            users.value = result;
          })
          .catch((error) => console.error(error));
      // const response = await axios.get('http://localhost:8000/api/users')
      // users.value = response.data
    } catch (error) {
      console.error('Ошибка при получении пользователей:', error)
    }
  })
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <div class="users">
    <h2 class="text-xl font-bold mb-2">Список пользователей:</h2>
    <ul>
      <li v-for="user in users" :key="user.id" class="mb-1">
        <p>name: {{ user.name }}</p>
        <p>age: {{ user.age }}</p>
        <p>mail: {{ user.mail }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
