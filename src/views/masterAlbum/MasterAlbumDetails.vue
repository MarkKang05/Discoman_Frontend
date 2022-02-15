<template>
    <div v-if=!state>
        <h1>
            {{album.title}}
        </h1>
        <h2>
            {{album.description}}
        </h2>
    </div>
    <h1 v-else>Oh no 😢</h1>

</template>
<script>
export default {
    data(){
        return{
            album: [],
            state: false
        }
    },
    async beforeCreate(){
        var vm = this;
        // console.log(vm.$route.params)
        // vm.album = vm.$route.params.id
        const response = await this.$axios.get('http://localhost:8080/masters/'+vm.$route.params.id);
        vm.album = response.data.data;
        vm.state = ( vm.album===[0] )
    },

    // watch : {
    //     $route () {
    //         var vm = this;
    //         console.log(vm.$route)
    //         vm.album = vm.$route
    //     }
    // }
    
}
</script>
