import axios from 'axios'
    export default {
        name:"HomePage",      
        data() {
            return {
                // message:"This is testing code lab",
                postLists : [],
                categoryLists: []
            };
        },
        methods: {
            getAllPost() {
                let post = axios.get('http://127.0.0.1:8000/api/allPost').then(response => {
                    // console.log(response.data.post.length);
                    for(let i = 0; i < response.data.post.length; i++) {
                    // console.log(response.data.post[i].image);
                   if(response.data.post[i].image != null) {
                    response.data.post[i].image = "	http://localhost:8000/postImage/"+response.data.post[i].image;
                   } else {
                    response.data.post[i].image = "http://localhost:8000/default/default.png";
                   }
                }
                this.postLists = response.data.post;
            });
            },

            loadCategory() {
                axios.get('http://127.0.0.1:8000/api/allCategory').then(response => {
                    // console.log(response.data);
                    this.categoryLists = response.data.category;
                }).catch(error => {
                    console.log(error);
                })
            }
        },  

    mounted() {
        this.getAllPost();
        this.loadCategory();
    },

    }

