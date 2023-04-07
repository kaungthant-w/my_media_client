import axios from 'axios';
export default {
    name :"LoginPage",
    data() {
        return {
            userData: {
                email:"",
                password:"",
            }
        }
    },
    methods: {
        loginPage() {
            this.$router.push({
                name:'login'
            })
        },
        home() {
            this.$router.push({
                name : 'home'
            });
        },

        accountLogin() {
            // console.log(this.userData.email);
            axios.post("http://127.0.0.1:8000/api/user/login ", this.userData)
            .then(response => {
                // console.log(response.data);
                // console.log(response.data.toekn);
                if(response.data.toekn == null) {
                    console.log("There is no user");
                } else {
                    console.log("login success");
                }
            })
            .catch(error => {
                console.log(error);
            })

        }

    }
 }  