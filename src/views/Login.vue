<template>
    <div>
        <div m-100>
            <div class="loginTem">
                        <form>
                            <h3>Sign In</h3>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" v-model="email" class="form-control form-control-lg" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" v-model="password" class="form-control form-control-lg" />
                            </div>
                            <p class="forgot-password text-right mt-2 mb-4">
                                <router-link to="/forgot-password">Forgot password ?</router-link>
                            </p>
                            <div class="social-icons">
                                <ul>
                                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </form>

                        <button type="" v-on:click="loginPost()" class="btn btn-dark btn-lg btn-block">Sign In</button>
                    </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            rotate: true,
            email: "",
            password: ""

        }
    },

    methods: {
        loginPost: function(){
            var vm = this;
            vm.$axios.post('http://localhost:8080/auth/login', {
                email: vm.email,
                password: vm.password
            },
                {withCredentials: true}
            ).then(response => {
                var username = response.data.data.username;
                var email = response.data.data.email;
                email
                localStorage.setItem("username", username);
                // this.$router.push({ path: '/masters' })
                this.$router.go(-1)
            }).catch(error => {
                error
                console.log("error");
            })
        },

    },
    
};

</script>
