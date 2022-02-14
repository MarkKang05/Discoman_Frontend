<template>
    <div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Genre</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in albums" v-bind:key="item.id" >
                <th scope="row">{{item.id}}</th>
                <td>
                    <a :href="'/masters/' + item.id">
                        {{item.title}}
                    </a>
                </td>
                <td>{{item.artist}}</td>
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
        const response = await this.$axios.get('http://localhost:8080/masters');
        vm.albums = response.data.data;
        // console.log(vm.albums.id);
        // vm.albums.id
    },

    // methods : {
    //     save : function() {
    //         this.$axios.get('http://localhost:8080/masters', this.contents)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(function(error) {
    //             console.log("error"+error)
    //         })
    //     }
    // }    

    // fetchData(){
    //         this.$axios.get('')
    //         .then(res => {
    //             console.log(res.data);
    //             this.contents = res.data.data;
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         });
    //     } 
}
</script>