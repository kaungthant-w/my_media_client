import axios from 'axios'
    export default {
        name:"HomePage",      
        data() {
            return {
                postLists : {},
                categoryLists: {},
                searchKey:"",
            };
        },
        methods: {
            getAllPost() {
                    axios.get('http://127.0.0.1:8000/api/allPost').then(response => {
                    for(let i = 0; i < response.data.post.length; i++) {
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
                    this.categoryLists = response.data.category;
                }).catch(error => {
                    console.log(error);
                })
            },
            search() {
                let search = {
                    key : this.searchKey,
                };

                axios.post("http://127.0.0.1:8000/api/post/search", search)
                .then(response => {
                    for(let i = 0; i < response.data.searchData.length; i++) {
                        if(response.data.searchData[i].image != null) {
                         response.data.searchData[i].image = "http://127.0.0.1:8000/postImage/"+response.data.searchData[i].image;
                        } else {
                         response.data.searchData[i].image = "http://127.0.0.1:8000/default/default.png";
                        }
                     }
                     this.postLists = response.data.searchData;
                })
            } ,

            newsDetails(id){
                // console.log(id);
                this.$router.push({
                    name: "newsDetails",
                    query: {
                        newsId : id,
                    }
                });
            },

            home() {
                this.$router.push({
                    name : 'home'
                })
            },

            loginPage() {
                this.$router.push({
                    name:'login'
                })
            },

            categorySearch(searchKey) {
                let search = {
                    key: searchKey,
                };

                axios.post('http://127.0.0.1:8000/api/category/search', search)
                .then(response => {
                    console.log(response.data);
                    // console.log(response.data.result);
                    for(let i = 0; i < response.data.categorySearch.length; i++) {
                        if(response.data.categorySearch[i].image != null) {
                         response.data.categorySearch[i].image = "http://127.0.0.1:8000/postImage/"+response.data.categorySearch[i].image;
                        } else {
                         response.data.categorySearch[i].image = "http://127.0.0.1:8000/default/default.png";
                        }
                     }

                     this.postLists = response.data.categorySearch;
                })
                .catch(error => console.log(error));
            },
        },  

    mounted() {
        this.getAllPost();
        this.loadCategory();
    },

    }

