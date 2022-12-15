<template>
    <headerPage/>
    <h1 style="color:brown">Hello {{name}}, Welcome to Home Page</h1>
    <table border="1">
        <tr class="head">
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td><router-link :to="'/update/'+item.id">Update</router-link>
                <button v-on:click="deleteResto(item.id)">Delete</button></td>
        </tr>

    </table>
</template>
<script>
import axios from 'axios';
import headerPage from './headerPage.vue';
export default {
    name:"homePage",
    data(){
        return{
            name:'',
            restaurants:[],
        }
    },
    components:{
        headerPage
    },
    methods:{
        async deleteResto(id)
        {
            console.warn(id);
            let result=await axios.delete("http://localhost:3000/restaurant/"+id);
            if(result.status==200)
            {
                this.loadData();
            }
        },
        async loadData()
        {
            let user=localStorage.getItem('user-info');
            this.name=JSON.parse(user).name;
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
            let result=await axios.get("http://localhost:3000/restaurant");
        //  console.warn(result);
            this.restaurants=result.data
        }
    },
    mounted()
    {
        this.loadData();
    }
};
</script>
<style>
.head{
    background-color: lightcoral;
    color:black;
}
td{
    width: 160px;
    height:40px;
}
tr:hover{
    background-color: navy;
    color:white;
}
</style>