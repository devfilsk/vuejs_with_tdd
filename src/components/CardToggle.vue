<template>
  <div class="container">
      <div class="card-img">
            <img :src="user.avatar_url" alt="">
      </div>
      <div class="card-header">
            <p>{{this.user.name}}</p>
            <p v-on:click="open()">arrow</p>
      </div>
      <div class="card-body" v-bind:class="[isOpen ? 'active' : 'inactive']">
          <div class="card-row">
              <p>Bio:</p>
              <p>{{ user.bio }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CardToggle',
    data() {
        return {
            isOpen: false
        }
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen
            console.log("OPEN")
        }
    }
}
</script>

<style lang="scss">
.container {
    width: 350px;
    min-height: 150px;
    border-radius: 4px;
    background: #FFF;
    overflow: hidden;
    flex-direction: column;
    img {
        width: 100%;
        height: auto;
    }
}
.card-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
}
.card-header {
    color: #353535;
    font-weight: 600;
    display: flex;
    font-size: 20px;
    padding: 10px;
    justify-content: space-between;
}
.card-body {
    transition: all .3s;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
}
.card-row {
    display: flex;
    flex-direction: row;
    padding: 10px;  
    position: absolute;
    top: 0;
    right: 0;
}
.active {
    min-height: 100px;
}
.inactive {
    min-height: 0;
}
</style>