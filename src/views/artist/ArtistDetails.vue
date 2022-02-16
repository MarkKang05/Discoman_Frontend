<template>
    <div>
        <h1>{{artist.name}}</h1>
        <h2>{{artist.description}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return {
            artist: null,

        }
    },
    async created(){
        var vm = this;
        const response = await this.$axios.get('http://localhost:8080/artists/'+vm.$route.params.id);
        vm.artist = response.data.data;
        // console.log(vm.albums.id);
        // vm.albums.id
    },
    
}
</script>