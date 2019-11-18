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
  <div>
      <VUserSearchForm 
        @submitted="searchUser" 
      />
      <VUserProfile :user="user"/>
      <CardToggle v-if="Object.values(user).length > 0" :user="user"/>
  </div>
</template>

<style>

</style>