<template>
    <div v-if=!state>
        <div v-if="masterAlbum.images">
            <img class="object-cover h-48 w-48" :src="require('@/../../../image/masters/'+masterAlbum.images)"/>
        </div>
        <h1 v-else>no Image</h1>
        <h1>
            {{masterAlbum.title}}
        </h1>
        <h2>
            {{masterAlbum.description}}
        </h2>

        <div class="bg-blue-600 bg-opacity-50">
            <h1 class="text-black">Song list</h1>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">duration</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in masterAlbum.musics" v-bind:key="item.id" >
                    <th scope="row">{{item.id}}</th>
                    <td>{{item.name}}</td>
                    <td>{{item.duration}}</td>
                </tr>
            </tbody>
        </table>
        </div>


        <div class="bg-red-600 bg-opacity-50">
            <h1 class="text-black">Released Album List!!</h1>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title(Format)</th>
                <th scope="col">Label</th>
                <th scope="col">Cat#</th>
                <th scope="col">Country</th>
                <th scope="col">Year</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in releaseAlbums" v-bind:key="item.id" >
                    <th scope="row">{{item.id}}</th>
                    <td>
                        <a :href="'/releases/' + masterAlbum.id">{{masterAlbum.title}}</a>
                        ({{item.format}})
                    </td>
                    <td>
                        <a :href="'/labels/' + item.label.id">
                            {{item.label.name}}
                        </a>
                    </td>
                    <td>{{item.catalogue}}</td>
                    <td>{{item.country}}</td>
                    <td>{{item.released}}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    <h1 v-else>Oh no 😢</h1>


</template>
<script>
export default {
    data(){
        return{
            masterAlbum: [],
            releaseAlbums: [],
            state: false
        }
    },
    async beforeCreate(){
        var vm = this;
        // console.log(vm.$route.params)
        // vm.album = vm.$route.params.id
        const albumDetail = await this.$axios.get('http://localhost:8080/masters/'+vm.$route.params.id);
        const released = await this.$axios.get('http://localhost:8080/releases/findByMAlbumId/'+vm.$route.params.id);
        vm.masterAlbum = albumDetail.data.data;
        vm.releaseAlbums = released.data.data;
        vm.state = ( vm.masterAlbum===[0] )
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
