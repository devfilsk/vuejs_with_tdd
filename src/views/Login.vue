<script>
export default {
    name: 'Login', 
    data() {
        return {
            email: 'admin@goscore.com.br',
            password: '6f2a3s2t',
        }
    },
    methods: {
        submitted() {
            
        }
    }
}
</script>

<template>
    <div class="content">
        <!-- <form @submit.prevent="$emit('submitted', { email, password })" class="login-content"> -->
        <form @submit.prevent="submitted()" class="login-content">
            <h1>Login</h1>
            <input type="text" class="email" v-model="email">
            <input type="text" class="password" v-model="password">
            <button type="submit" class="btn-login">Entrar</button>
        </form>
    </div>
</template>

<style lang="scss">
    .content{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    .login-content{
        width: 350px;
        height: 250px;
        display: flex;
        color: #FFF;
        flex-direction: column;
        padding: 20px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, .1);
        input {
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            margin-bottom: 15px;
        }
        button {
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
        }
    }

</style>