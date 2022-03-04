<template>
    <div>
        <div class="loginSection">
            <img class="rotate-enter-active" src="@/assets/Vinyl.png" />
        </div>
        <div m-100>
            <div class="loginTem">
                        <form>
                            <h3>Sign In</h3>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control form-control-lg" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control form-control-lg" />
                            </div>
                            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
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
                    </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            rotate: true
        }
    }
};
</script>

<style scoped>
.loginSection {
    height: 10px;
    width: 400px;
}
.rotate-enter-active {
    /* animation: rotate-in 1s; */
    /* animation: rotate-in 1s linear infinite; */
    top: 30px;
    height: 100%;
    position: fixed;
    left: -200%;
    animation: rotating 2s ;
    animation-fill-mode: forwards;
    /* -webkit-transition: -webkit-transform 1s; */
}
/* .rotate-enter-active:hover { */
    /* -webkit-transform: rotate(360deg) translateZ(0); */
/* } */

.loginTem{
    width: 200px;
    height: 300px;
}

@keyframes motion{
    0% {
    left: 50%;
    top: 50%;
    margin-left: -15vw;
    margin-top: -15vh;
    height: 30vh;
    width: 30vw;
  }
  25% {
    left: 50%;
    top: 50%;
    height: 120vh;
    width: 120vw;    
    margin-left: -60vw;
    margin-top: -60vh;    
  }
  100% {
    left: 0%;
    top:  50%;
    height: 120vh;
    width: 120vw;
    margin-left: -60vw;
    margin-top: -60vh;
  }
}

@keyframes rotating{
    from{
        opacity: 0;
        /* transform: rotate(0); */
        left: 130%;
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to{
        left:-200px;
        opacity: 1;
        /* transform: rotate(360); */
        -webkit-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
</style>