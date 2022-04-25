import axios from "axios";
import { defineStore } from "pinia";

export const UseLoginStore = defineStore('loginStore',{
    state: () => {
        return {
            completedLogin : '',
            loginFailed : 'You failed to login',
        }
    },
    actions : {
        loginApi(){
            axios.request( { 
                url: 'https://reqres.in/api/login',
                method: 'POST',
                data : {
                    email : 'eve.holt@reqres.in',
                    password : 'cityslicka'
                },
            }).then((response) => {
                this.completedLogin = response;
                console.log(response.data);
            }).catch((error) => {
                this.loginFailed = error;
                console.log(this.loginFailed);
            });
        }
    },
    getters: {
        
    }
})