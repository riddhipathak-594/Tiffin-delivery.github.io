<template>
    <img class="logo" src="../assets/resto-logo.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter name"/>
        <input type="text" v-model="email" placeholder="Enter email"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
        <button v-on:click="signUp">Sign Up</button>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'SignUp',
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp()
        {
            // console.warn("signUp",this.name,this.email,this.password)
            let result=await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password
            });
            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'homePage'})
            }
            
        }
    },
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'homePage'})
        }
    }
}
</script>
<style>
.logo{
    margin-top: -50px;
    height: 200px;
    width: 250px;
    margin-bottom: -20px;
}
.register input{
    height: 40px;
    width: 300px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid orange;
}
.register button{
    width: 320px;
    height:40px;
    border: 2px solid orangered;
    background-color: orangered;
    cursor: pointer;
}
</style>