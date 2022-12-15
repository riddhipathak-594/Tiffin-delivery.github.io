<template>
    <headerPage/>
    <h1>Hello User, Welcome to Add Restaurant Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter name" v-model="restaurant.name" name="name" />
        <input type="text" placeholder="Enter address" v-model="restaurant.address" name="name" />
        <input type="number" placeholder="Enter contact" v-model="restaurant.contact" name="name" />
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
</template>
<script>
import headerPage from './headerPage.vue';
import axios from "axios";
export default {
    name:"addResto",
    components:{
        headerPage
    },
    data(){
        return{
            restaurant:{
            name:'',
            address:'',
            contact:''
        }
        }  
    },
    methods:{
        async addRestaurant(){
            console.warn(this.restaurant)
            const result=await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==201)
            {
                this.$router.push({name:'homePage'});
            }
            console.warn("result",result)
        }
    },
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
};
</script>

<style>
.add{
    margin-top: 50px;
    margin-left: 500px;
    height: 200px;
    width: 250px;
    margin-bottom: -20px;
}
.add input{
    height: 40px;
    width: 300px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid orange;
}
.add button{
    width: 320px;
    height:40px;
    border: 2px solid orange;
    background-color: orange;
    cursor: pointer;
}
</style>