<script>
export default {
  name: 'UserSearchForm',
  data() {
    return {
      username: ''
    }
  }
}
</script>

<template>
  <form @submit.prevent="$emit('submitted', username)">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Username do GitHub" v-model="username">
      <div class="input-group-append">
        <button type="submit" class="btn btn-info"><span class="fa fa-plus"></span></button>
      </div>                  
    </div>
  </form>
</template>