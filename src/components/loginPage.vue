<template>
    <img class="logo" src="../assets/resto-logo.png">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter email"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="sign-up">Sign Up</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    name:"loginPage",
    data()
    {
        return {
            email:'',
            password:''
        };
    },
    methods:{
        async login()
        {
            let result=await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );
            if(result.status==200 && result.data.length>0)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name:"homePage"});
            }
        },
    },
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'homePage'})
        }
    }
};
</script>
<style>
.logo{
    height: 200px;
    width: 250px;
}
.login input{
    height: 40px;
    width: 300px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid green;
}
.login button{
    width: 320px;
    height:40px;
    border: 2px solid green;
    background-color: green;
    cursor: pointer;
}
</style>