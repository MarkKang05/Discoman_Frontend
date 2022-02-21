<template>
    <div>
        <h3>파일 업로드 결과: { { this.response === '' ? 'waiting' : this.response } }</h3>
        <div>
            <input type="file" ref="uploadImage" @change="onImageUpload()" required >
        </div>

        <div>
            <h5>Title</h5>
            <input v-model="title" placeholder="type title">
        </div>
        <div>
            <h5>Description</h5>
            <input v-model="description" placeholder="type title">
        </div>
        <div>
            <h5>Genre</h5>
            <input v-model="genre" placeholder="type title">
        </div>
        <div>
            <h5>Style</h5>
            <input v-model="style" placeholder="type title">
        </div>

        <select class="form-control" v-model="artist" @change="logging()">
            <option :key="i" :value="d.id" v-for="(d, i) in artists.data.data">{{d.name}}</option>
        </select>

        <div>
            <h5>set Music</h5>
            <input v-model="searchMusic" placeholder="search music">
            <select v-model="selectedMusic" @change="addMusic(selectedMusic)">
                <option disabled value="">Please select one</option>
                <option :key="i" :value="d.id" v-for="(d, i) in searchMusicList">{{d.name}}</option> -->
            </select>
        </div>

        <div class="bg-blue-600 bg-opacity-50">
            <span class="text-black">Song list</span>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">duration</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in selectedMusicList" v-bind:key="item.id" >
                    <th scope="row">{{item.id}}</th>
                    <th scope="row">{{item.name}}</th>
                    <th scope="row">{{item.duration}}</th>
                </tr>
            </tbody>
        </table>

        </div>

        <button v-on:click="postForm()">Submit</button>

        <br>

    </div>


</template>
<script>
export default {
    data() {
        return {
            artists: [],
            title: '',
            description: '',
            genre: '',
            style: '',
            artist: 0,
            musics: [],

            searchMusic: '',
            searchMusicList: [],
            selectedMusic: 0,
            selectedMusicList: [],

            response: '',
            formData: null
        }
    },

    watch: {
        searchMusic(){
            this.searchMusicList = [];
            this.getMusicByName(this.searchMusic);
        }
    },

    created(){
        this.getArtists()
    },

    methods: {
        logging(){
            console.log(this.artist)
        },
        getArtists: async function(){
            var vm = this;
            vm.artists = await vm.$axios.get('http://localhost:8080/artists');
        },
        // async getMusics(){
        //     var vm = this;
        //     vm.musics = await vm.$axios.get('http://localhost:8080/musics');
        // },
        // TODO - select music, artist
        postForm(){
            var vm = this;
            var res_id = null;
            vm.$axios.post('http://localhost:8080/masters', {
                title: vm.title,
                description: vm.description,
                genre: vm.genre,
                style: vm.style,
                artist: vm.artist,
                musics: vm.musics
            })
            .then(response => {
                res_id = JSON.stringify(response.data.data.id)
                console.log(res_id);
                this.formData.append("id", res_id)
                this.startUpload()
                this.$router.push({ path: '/masters' })
            })

        },
        onImageUpload(){
            let file = this.$refs.uploadImage.files[0];
            this.formData = new FormData();
            this.formData.append("file", file)
            alert("onImageUpload")
        },
        startUpload(){
            var vm = this;
            vm.$axios({
                url: 'http://localhost:8080/masters/image',
                method: 'POST',
                data: this.formData,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
            }).then(response => {
                console.log(JSON.stringify(response.data));
            })
        },

        getMusicByName: async function(){
            var vm = this;
            var result = await vm.$axios.get('http://localhost:8080/musics/searchByName?name='+this.searchMusic);
            // console.log(result);
            vm.searchMusicList = result.data.data;
        },
        
        addMusic: function (id) {
            var ddd = this.searchMusicList.filter(function(e){
                return e.id===id;
            })

            this.musics.push(id) ;
            this.selectedMusicList.push(ddd[0])
        }

    }

    
}
</script>