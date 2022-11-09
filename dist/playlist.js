"use strict";
class Song {
    constructor(songName, singerName) {
        this._songName = songName;
        this._singerName = singerName;
    }
    get songName() {
        return this._songName;
    }
    set songName(value) {
        this._songName = value;
    }
    get singerName() {
        return this._singerName;
    }
    set singerName(value) {
        this._singerName = value;
    }
}
class Playlist {
    constructor(listOfSongs, playlistName) {
        this._Songs = [];
        this._Songs = listOfSongs;
        this._playlist = playlistName;
    }
    add(param) {
        this._Songs.push(param);
    }
    get listOfSongs() {
        return this._Songs;
    }
    set listOfSongs(value) {
        this._Songs = value;
    }
    get playlistName() {
        return this._playlist;
    }
    set playlistName(value) {
        this._playlist = value;
    }
}
//# sourceMappingURL=playlist.js.map