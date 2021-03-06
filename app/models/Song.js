export default class Song {
    constructor(song) {
        this.title = song.trackName || song.title
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60 || song.albumArt.replace(/60x60/g, "250x250")
        this.artist = song.artistName || song.artist
        this.collection = song.collectionName || song.collection
        this.price = song.collectionPrice || song.price
        this.preview = song.previewUrl || song.preview
        this.kind = song.kind
    }
    getTemplate() {
        return `<div class="col-12 col-md-3">
                    <div class="card my-3">
                        <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
                            <div class="card-body text-center">
                                <h5 class="card-title">${this.artist}</h5>
                            </div>
                            <ul class="list-group list-group-flush text-center">
                                <li class="list-group-item"><a href="#"  onclick="(app.controllers.itunesCtrl.getSong('${this.preview}'))">${this.title}</a></li>
                                <li class="list-group-item">${this.collection}</li>
                                <li class="list-group-item">${this.price}</li>
                            </ul>
                        </div>
            </div>`
    }

    getSong() {
        return `${this.preview}`
    }
}