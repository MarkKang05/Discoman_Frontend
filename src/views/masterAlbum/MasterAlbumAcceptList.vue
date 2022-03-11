<template>
    <div class="album">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Cover</th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Genre</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in albums" v-bind:key="item.id" >
                <th scope="row">{{item.id}}</th>
                <td>
                    <div v-if="!item.images">
                        <a>no Image</a>
                    </div>
                    <img v-else class="h-15" :src='`https://discoman-bucket.s3.ap-northeast-2.amazonaws.com/${item.images}`' />
                </td>
                <td>
                    <a :href="'/masters/' + item.id">
                        {{item.title}}, {{item.acc}}
                    </a>
                </td>
                <td>
                    <a :href="'/artists/' + item.artist.id">
                        {{item.artist.name}}
                    </a>
                </td>
                <td>{{item.genre}}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            albums: []
        }
    },
    async created(){
        var vm = this;
        const response = await this.$axios.get('http://localhost:8080/masters', );
        vm.albums = response.data.data;
        console.log(vm.albums);
        // vm.albums.id
    },

}
</script>


<style scoped>


    .album {
        background-color: #e0e0e0e0;
        margin-left: 10px;
        margin-right: 10px;
    }

</style>