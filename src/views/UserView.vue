<script>
import VUserSearchForm from '@/components/VUserSearchForm';
import VUserProfile from '@/components/VUserProfile';
import { mapState } from 'vuex';
import CardToggle from '@/components/CardToggle';
export default {
    name: "UserView",
    components: {
      VUserSearchForm,
      VUserProfile,
      CardToggle,
    },
    data(){
      return {
        searched: []
      }
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
  <div class="">
      <VUserSearchForm 
        @submitted="searchUser" 
      />
      <!-- <VUserProfile :user="user"/> -->
      <CardToggle :user="item" v-for="item in user" :key="item"/>
  </div>
</template>

<style>

</style>