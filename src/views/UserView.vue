<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import VUserSearchForm from '@/components/VUserSearchForm';
import VUserProfile from '@/components/VUserProfile';
import { mapState } from 'vuex';
import CardToggle from '@/components/CardToggle';
import AccordionContainer from '@/components/Accordion/AccordionContainer';
export default {
    name: "UserView",
    components: {
      VUserSearchForm,
      VUserProfile,
      CardToggle,
      AccordionContainer,
    },
    methods: {
      searchUser(username) {
        this.$store.dispatch('SEARCH_USER', { username })
      },
      show(){
        console.log(user)
      }
    },
    computed: {
      ...mapState({
        user: 'user',
      }),
    }
}
</script>

<template>
  <div class="container">
      <VUserSearchForm 
        @submitted="searchUser" 
      />
      <!-- <VUserProfile :user="user"/> -->
      <!-- <CardToggle :user="item" v-for="item in user" :key="item.name"/> -->
      <AccordionContainer />
  </div>
</template>

<style>
  .container {
    padding:20px; 
    width: 80%;
    margin-top: 20px ;
  }
</style>