import ItunesService from "./itunes-service.js";
//Private
const _is = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  let template = '';
  let songs = _is.Songs;
  songs.forEach(song => template += song.getTemplate())
  document.querySelector('#songs').innerHTML = template;
}




//PUBLIC
export default class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    _is.addSubscriber('songs', drawSongs)
    drawSongs()
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    _is.getMusicByArtist(artist);
    e.target.reset();
  }
  getSong(url) {
    document.querySelector('#player').innerHTML = `
    <audio controls autoplay id="play-song">
                <source src="${url}" type="audio/mpeg" class="card-link">
            </audio>`
  }
}