import axios from 'axios';
import {mapGetters} from 'vuex';
export default {
    name :"LoginPage",
    data() {
        return {
            userData: {
                email:"",
                password:"",
            },
            tokenStatus: false,
            userStatus: false,
        }
    },
    computed : {
        ...mapGetters(["storageToken", 'storageUserData']),
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
                // console.log(response.data.token);
                if(response.data.token == null) {
                    // console.log("There is no user");
                    this.userStatus = true;
                } else {
                    this.userStatus = false;
                    this.storeUserInfo(response);
                    this.home();
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        storeUserInfo(response) {
            this.$store.dispatch('setToken', response.data.token);
            this.$store.dispatch('setUserData', response.data.user);
        },

        mounted() {
            this.userData = {}
        },
        // check() {
        //     console.log(this.storageToken);
        //     console.log(this.storageUserData);
        // }

    }
 }  