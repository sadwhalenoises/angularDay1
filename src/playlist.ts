class Song{
    private _songName: string;
    private _singerName: string;

    constructor(songName : string, singerName : string){
        this._songName = songName;
        this._singerName = singerName;
    }


    get songName(): string {
        return this._songName;
    }

    set songName(value: string) {
        this._songName = value;
    }

    get singerName(): string {
        return this._singerName;
    }

    set singerName(value: string) {
        this._singerName = value;
    }
}


class Playlist{
    private _Songs : Array<Song> = [];
    private _playlist : string;


    constructor(listOfSongs: Array<Song>, playlistName: string) {
        this._Songs = listOfSongs;
        this._playlist = playlistName;
    }

    public add(param : Song): void {
        this._Songs.push(param);
    }


    get listOfSongs(): Array<Song> {
        return this._Songs;
    }

    set listOfSongs(value: Array<Song>) {
        this._Songs = value;
    }

    get playlistName(): string {
        return this._playlist;
    }

    set playlistName(value: string) {
        this._playlist = value;
    }


}
