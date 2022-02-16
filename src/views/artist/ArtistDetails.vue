<template>
    <div>
        <div v-if="artist.image">
            <img class="object-cover h-48 w-48" :src="require('@/../../../image/artists/'+artist.image)"/>
        </div>
        <h1 v-else>no Image</h1>

        <h1>{{artist.id}}::  {{artist.name}}</h1>
        <h2>{{artist.image}}</h2>
        <h2>{{artist.description}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return {
            artist: [],

        }
    },
    async beforeCreate(){
        var vm = this;
        const response = await this.$axios.get('http://localhost:8080/artists/'+vm.$route.params.id);
        vm.artist = response.data.data;
        // console.log(vm.albums.id);
        // vm.albums.id
    },
    
}
</script>