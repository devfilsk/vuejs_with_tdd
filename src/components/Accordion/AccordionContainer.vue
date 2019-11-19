<template>
  <div class="container-card">
        <div class="accordion" id="accordionExample">
            <acordion-card :data="data" v-for="data in this.user" :key="data.name"/>
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AccordionCard from './AccordionCard';

export default {
    name: 'AccordionContainer',
    components: {
        'acordion-card': AccordionCard
    },
    computed: {
        ...mapState({
            user: 'user',
        }),
    }
}
</script>

<style>
.container-card{
    width: 500px;
    margin: 20px;
}   
</style>