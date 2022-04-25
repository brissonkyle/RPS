<template>
    <div>
        <h1>Welcome to the Login Page</h1>
        <h3>Email</h3>
        <input type="text">
        <h3>Password</h3>
        <input type="text">
        <div>
            <button @click="loginApi">Login</button>
        </div>
    </div>
</template>

<script>
import {UseLoginStore} from '@/stores/loginstore'
import { mapState } from 'pinia'
    export default {
        name : 'LoginPage',
        computed : {

            ...mapState(UseLoginStore , ['loginApi'])
        }
    }
</script>

<style lang="scss" scoped>

</style>