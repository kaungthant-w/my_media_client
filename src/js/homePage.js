import axios from 'axios'
    export default {
        name:"HomePage",      
        data() {
            return {
                message:"This is testing code lab",
            }
        },
        mounted() {
            axios.get('http://127.0.0.1:8000/api/allPost').then(response => {
                this.lists = response.data;
                this.postCount = response.data.length;
                console.log(response);
            })
        },  
    }

