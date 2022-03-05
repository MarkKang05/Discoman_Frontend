import axios from "axios";


function sendReleaseAlbum(albumData){
    console.log(albumData);
    axios.post('http://localhost:8080/releases', {
        masterAlbum: albumData.masterAlbum,
        label: albumData.label,
        format: albumData.format,
        catalogue: albumData.catalogue,
        country: albumData.country,
        released: albumData.released
    })
}

export {
    sendReleaseAlbum,
}