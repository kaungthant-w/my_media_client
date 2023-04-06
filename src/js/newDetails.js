import axios from 'axios'

export default {
    name :"NewsDetails",
    data() {
        return {
            postId: 0,
            posts:{},
        };
    },

    methods: {
        loadPost(id) {
            let post = {
                postId: id,
            };
            axios
            .post('http://127.0.0.1:8000/api/post/details', post)
            .then(response => {
                    if(response.data.post.image != null) {
                     response.data.post.image = "	http://localhost:8000/postImage/"+response.data.post.image;
                    } else {
                     response.data.post.image = "http://localhost:8000/default/default.png";
                    }
                 this.posts = response.data.post;
            });
        },

        back() {
            // history.back();
            this.$router.push({
                name:"home",
            })

        },
    },

    mounted () {
        // console.log(this.$route.query.newsId);
        this.postId = this.$route.query.newsId;
        this.loadPost(this.postId)
    }
 }  