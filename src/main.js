if (!localStorage.getItem('isLogged')) {
    window.location.href = '../pages/login.html';
}

class Song {
    constructor({ id, name, artist, duration, album, genre, year, cover, urlSong, isFavorite = false, inPlaylist = false }) {
        this.id = id;
        this.name = name; 
        this.artist = artist; 
        this.duration = duration;
        this.album = album; 
        this.genre = genre; 
        this.year = year;
        this.cover = cover; 
        this.urlSong = urlSong;
        this.isFavorite = isFavorite;
        this.inPlaylist = inPlaylist;
    }
}

const allSongs = [ 
    new Song({
        name: "Si Te Lastimé",
        artist: "Seven Kayne",
        duration: "02:15",
        album: "Red Bull Music Sessions",
        genre: "Urbano latino",
        year: "2018",
        cover: "../assets/images/img1.jpeg",
        urlSong: "../assets/audio/song1.mp3"
    }),

    new Song({
        name: "Daylight",
        artist: "Taylor Swift",
        duration: "04:54",
        album: "Lover",
        genre: "Pop",
        year: "2019",
        cover: "../assets/images/img2.jpeg",
        urlSong: "../assets/audio/song2.mp3"
    }),

    new Song({
        name: "Is There Someone Else?",
        artist: "The Weeknd",
        duration: "03:19",
        album: "Dawn FM",
        genre: "R&B/Soul",
        year: "2022",
        cover: "../assets/images/img3.jpeg",
        urlSong: "../assets/audio/song3.mp3"
    }),

    new Song({
        name: "My Blood",
        artist: "Twenty One Pilots",
        duration: "03:57",
        album: "Trench",
        genre: "Pop",
        year: "2018",
        cover: "../assets/images/img4.jpeg",
        urlSong: "../assets/audio/song4.mp3"
    }),

    new Song({
        name: "Sé Que No",
        artist: "Seven Kayne",
        duration: "02:30",
        album: "7 Secretos",
        genre: "Urbano latino",
        year: "2021",
        cover: "../assets/images/img5.jpeg",
        urlSong: "../assets/audio/song5.mp3"
    }),

    new Song({
        name: "Fallen Star",
        artist: "The Neighbourhood",
        duration: "03:45",
        album: "Fallen Star",
        genre: "Alternativa",
        year: "2021",
        cover: "../assets/images/img6.jpeg",
        urlSong: "../assets/audio/song6.mp3"
    }),

    new Song({
        name: "The Archer",
        artist: "Taylor Swift",
        duration: "03:39",
        album: "Lover",
        genre: "Pop",
        year: "2019",
        cover: "../assets/images/img2.jpeg",
        urlSong: "../assets/audio/song7.mp3"
    }),

    new Song({
        name: "Goteo",
        artist: "Duki",
        duration: "02:41",
        album: "Súper sangre joven",
        genre: "Urbano latino",
        year: "2019",
        cover: "../assets/images/img8.jpeg",
        urlSong: "../assets/audio/song8.mp3"
    }),

    new Song({
        name: "Cómo Le Digo",
        artist: "Khea",
        duration: "03:36",
        album: "Cómo Le Digo",
        genre: "Urbano Latino",
        year: "2018",
        cover: "../assets/images/img9.jpeg",
        urlSong: "../assets/audio/song9.mp3"
    }),

    new Song({
        name: "No Eres Tú Soy Yo",
        artist: "María Becerra, Danny Ocean",
        duration: "02:15",
        album: "Animal",
        genre: "Reggaeton",
        year: "2021",
        cover: "../assets/images/img10.jpeg",
        urlSong: "../assets/audio/song10.mp3"
    }),

    new Song({
        name: "Tres Rosas",
        artist: "Seven Kayne",
        duration: "02:43",
        album: "Tres Rosas",
        genre: "Urbano latino",
        year: "2018",
        cover: "../assets/images/img11.jpeg",
        urlSong: "../assets/audio/song11.mp3"
    }),

    new Song({
        name: "Vete",
        artist: "Khea",
        duration: "03:29",
        album: "Ave Maria",
        genre: "Reggaeton",
        year: "2018",
        cover: "../assets/images/img12.jpeg",
        urlSong: "../assets/audio/song12.mp3"
    }),

    new Song({
        name: "Perdidamente",
        artist: "María Becerra",
        duration: "02:33",
        album: "Perdidamente",
        genre: "Urbano Latino",
        year: "2020",
        cover: "../assets/images/img13.jpeg",
        urlSong: "../assets/audio/song13.mp3"
    }),

    new Song({
        name: "Bandito",
        artist: "Twenty One Pilots",
        duration: "05:31",
        album: "Trench",
        genre: "Indie rock",
        year: "2018",
        cover: "../assets/images/img4.jpeg",
        urlSong: "../assets/audio/song14.mp3"
    }),

    new Song({
        name: "Si Supieras",
        artist: "Seven Kayne",
        duration: "02:30",
        album: "7 Secretos",
        genre: "Urbano latino",
        year: "2021",
        cover: "../assets/images/img5.jpeg",
        urlSong: "../assets/audio/song15.mp3"
    }),

    new Song({
        name: "Antes de perderte",
        artist: "Duki",
        duration: "02:54",
        album: "Temporada de reggaetón 2",
        genre: "Urbano latino",
        year: "2022",
        cover: "../assets/images/img16.jpeg",
        urlSong: "../assets/audio/song16.mp3"
    }),

    new Song({
        name: "Aunque Ya No Estés Aquí",
        artist: "FMK",
        duration: "03:24",
        album: "Aunque Ya No Estés Aquí",
        genre: "Urbano latino",
        year: "2019",
        cover: "../assets/images/img17.jpeg",
        urlSong: "../assets/audio/song17.mp3"
    }),

    new Song({
        name: "Atrapado",
        artist: "Seven Kayne",
        duration: "03:35",
        album: "Atrapado",
        genre: "Urbano latino",
        year: "2018",
        cover: "../assets/images/img18.jpeg",
        urlSong: "../assets/audio/song18.mp3"
    }),

    new Song({
        name: "Pa' Olvidarte",
        artist: "Rusherking, FMK",
        duration: "03:26",
        album: "Pa' Olvidarte",
        genre: "Urbano latino",
        year: "2020",
        cover: "../assets/images/img19.jpeg",
        urlSong: "../assets/audio/song19.mp3"
    }),

    new Song({
        name: "Foto",
        artist: "Oscu, Luck Ra",
        duration: "02:34",
        album: "Ahora",
        genre: "Urbano latino",
        year: "2020",
        cover: "../assets/images/img20.jpeg",
        urlSong: "../assets/audio/song20.mp3"
    }),

    new Song({
        name: "Ibuprofeno",
        artist: "Lasso",
        duration: "03:33",
        album: "Cuatro Estaciones",
        genre: "Pop",
        year: "2021",
        cover: "../assets/images/img21.jpeg",
        urlSong: "../assets/audio/song21.mp3"
    }),

    new Song({
        name: "Hasta los dientes",
        artist: "Camila Cabello, María Becerra",
        duration: "03:08",
        album: "Familia",
        genre: "Pop",
        year: "2022",
        cover: "../assets/images/img22.jpeg",
        urlSong: "../assets/audio/song22.mp3"
    }),

    new Song({
        name: "Subtítulos",
        artist: "Lasso, Dana Paola",
        duration: "03:14",
        album: "Cuatro estaciones",
        genre: "Pop",
        year: "2021",
        cover: "../assets/images/img23.jpeg",
        urlSong: "../assets/audio/song23.mp3"
    }),

    new Song({
        name: "Otro atardecer",
        artist: "Bad Bunny, The Marías",
        duration: "04:05",
        album: "Un verano sin ti",
        genre: "Pop latino",
        year: "2022",
        cover: "../assets/images/img24.jpeg",
        urlSong: "../assets/audio/song24.mp3"
    }),

    new Song({
        name: "Quemame",
        artist: "Rusherking",
        duration: "02:36",
        album: "Quemame",
        genre: "Urbano latino",
        year: "2019",
        cover: "../assets/images/img25.jpeg",
        urlSong: "../assets/audio/song25.mp3"
    }),

    new Song({
        name: "Malibu de Coco",
        artist: "Oscu",
        duration: "02:16",
        album: "Malibu de Coco",
        genre: "Urbano latino",
        year: "2020",
        cover: "../assets/images/img26.jpeg",
        urlSong: "../assets/audio/song26.mp3"
    }),

    new Song({
        name: "Te Mentiría Remix",
        artist: "Luck Ra, Rusherking ",
        duration: "02:52",
        album: "Te Mentiría Remix",
        genre: "Urbano latino",
        year: "2022",
        cover: "../assets/images/img27.jpeg",
        urlSong: "../assets/audio/song27.mp3"
    }),

    new Song({
        name: "A tus pies",
        artist: "Lit Killah, Rusherking",
        duration: "03:32",
        album: "MAWZ",
        genre: "Urbano latino",
        year: "2021",
        cover: "../assets/images/img28.jpeg",
        urlSong: "../assets/audio/song28.mp3"
    }),

    
    new Song({
        name: "Starboy",
        artist: "The Weeknd",
        duration: "03:50",
        album: "Starboy",
        genre: "R&B/Soul",
        year: "2016",
        cover: "../assets/images/img29.jpeg",
        urlSong: "../assets/audio/song29.mp3"
    }),

    new Song({
        name: "Si Te Vas",
        artist: "Lit Killah",
        duration: "04:00",
        album: "Si Te Vas",
        genre: "Urbano latino",
        year: "2018",
        cover: "../assets/images/img30.jpeg",
        urlSong: "../assets/audio/song30.mp3"
    }),


]

function addID(songs){
    id = 0;
    songs.forEach((song)=>{
        song.id = id;
        id += 1
    })
}addID(allSongs)

class SongList {
    constructor({ listN, container, songs = [] }) {
        this.listN = listN;
        this.container = container;
        this.songs = songs;
    }

    addSong(...song) {
        this.songs.push(...song);
        this.renderList();
    }

    removeSong(song) {
        const index = this.songs.indexOf(song);
        if (index === -1) return;
        this.songs.splice(index, 1);
        this.renderList();
    }

    renderList(lista = this.songs, listN = this.listN) {

        this.container.innerHTML = "";

        lista.forEach(song => {
            let heartIcon = "";
            let plusIcon = "";

            if(song.inPlaylist){
                plusIcon = "../assets/images/dash-circle.svg" 
            }else{
                plusIcon = "../assets/images/plus-circle.svg"
            }

            if(song.isFavorite){
                heartIcon = "../assets/images/heart-filled.svg" 
            }else{
                heartIcon = "../assets/images/heart.svg" 
            }

            this.container.innerHTML += `
                <div class="song-contenedor" >
                    <div class="texto1">
                        <span>${song.name}</span>
                        <span>${song.artist}</span>
                    </div>
                    <div class="icons">
                        <button type="button" class="btn-icon" onClick='changeCurrentSong(${song.id}, "${listN}")'>
                            <img src="../assets/images/play.svg">
                        </button>
                        <button type="button" class="btn-icon">
                            <img id="heart${song.id}${listN}" src="${heartIcon}">
                        </button>
                        <button type="button" class="btn-icon">
                            <img id="plus${song.id}${listN}" src="${plusIcon}">
                        </button>
                    </div>
                </div>`;
        });

        lista.forEach(song => {
            document.getElementById(`plus${song.id}${listN}`).addEventListener('click', () =>{
                if (!song.inPlaylist) {
                    playlist.addSong(song);
                    song.inPlaylist = true;
                } else {
                    song.inPlaylist = false;
                    playlist.removeSong(song);
                }
                biblioteca.renderList();
                favorites.renderList();
                playlist.renderList();
            });

            document.getElementById(`heart${song.id}${listN}`).addEventListener('click', () =>{
                if (!song.isFavorite) {
                    favorites.addSong(song);
                    song.isFavorite = true;
                } else {
                    song.isFavorite = false;
                    favorites.removeSong(song);
                }
                biblioteca.renderList();
                favorites.renderList();
                playlist.renderList();
            });
        });
    }

    searchBy(searchTerm) {
        // Elimina los espacios en blanco al principio y al final del término de búsqueda
        searchTerm = searchTerm.trim();
    
        const filteredSongs = this.songs.filter(song => {
            // Filtra las canciones que coincidan con el término de búsqueda en el nombre, artista, álbum o género
            return (
                song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.genre.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    
        // Renderiza la lista filtrada en el mismo contenedor de la biblioteca
        this.renderList(filteredSongs, this.listN);
    }
    
}




class Player{

    constructor({currentPlayList = []}){
        this.currentPlayList = currentPlayList;
        this.currentSongIndex = 0;
    }
 
    addPlayList(...songs){
        this.currentPlayList.push(...songs)
    }

    removePlayList(){
        this.currentPlayList = [];
        this.currentSongIndex = 0;
    }

    setCurrentSong(index){
        this.currentSongIndex = index
    }


    renderMPlayer(){
        const song = this.currentPlayList[this.currentSongIndex]
        generateMPlayer(song)
        this.reproductor()
    }


    playFromList(){
        const audio = document.getElementById("audio");

        if (this.currentSongIndex !== undefined) {
            audio.pause();
            audio.src = this.currentPlayList[this.currentSongIndex].urlSong;
            audio.oncanplaythrough = function() {
                audio.play();
                audio.oncanplaythrough = null; 
            }
        } else {
            audio.pause();
        }
        this.reproductor()
    }


    reproductor(){
        const playButton = document.getElementById('play');
        const stopButton = document.getElementById('stop');
        const rewindButton = document.getElementById('rewind');
        const forwardButton = document.getElementById('forward');
        const muteButton = document.getElementById('mute');
        const audio = document.getElementById("audio");
        const songs = this.currentPlayList;
    
        audio.src = songs[this.currentSongIndex].urlSong;
        let currentSongIndex = this.currentSongIndex;
    

        audio.addEventListener('ended', function () {
            // Verifica si la canción actual es la última en la lista
            if (currentSongIndex === songs.length - 1) {
                // Si es la última canción, vuelve a la primera canción
                currentSongIndex = 0;
            } else {
                // De lo contrario, pasa a la siguiente canción
                currentSongIndex++;
            }
            audio.src = songs[currentSongIndex].urlSong;
            audio.oncanplaythrough = function () {
                audio.play();
                audio.oncanplaythrough = null;
            };
            generateMPlayer(songs[currentSongIndex]);
        });

        playButton.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playIcon.classList.remove('bi-play-circle-fill');
                playIcon.classList.add('bi-pause-circle-fill');
            } else {
                audio.pause();
                playIcon.classList.remove('bi-pause-circle-fill');
                playIcon.classList.add('bi-play-circle-fill');
            }
        });
    
        stopButton.addEventListener('click',function(){
            audio.pause();
            audio.currentTime = 0;
        });
        
        rewindButton.addEventListener('click', function(){
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            audio.pause();
            audio.src = songs[currentSongIndex].urlSong;
            audio.oncanplaythrough = function() {
                audio.play();
                audio.oncanplaythrough = null; 
            }
            generateMPlayer(songs[currentSongIndex]);
        });
    
        forwardButton.addEventListener('click', function(){
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            audio.pause();
            audio.src = songs[currentSongIndex].urlSong;
            audio.oncanplaythrough = function() {
                audio.play();
                audio.oncanplaythrough = null;  
            }
            generateMPlayer(songs[currentSongIndex]);
        });
    
        muteButton.addEventListener('click', function(){
            if (audio.muted) {
                audio.muted = false;
                volumeIcon.classList.remove('bi-volume-mute-fill');
                volumeIcon.classList.add('bi-volume-up-fill');
            } else {
                audio.muted = true;
                volumeIcon.classList.add('bi-volume-mute-fill');
                volumeIcon.classList.remove('bi-volume-up-fill');
            }    
        });

    }

    
}


function generateMPlayer(song){
    const songContainer = document.getElementById('song-container')
    
    songContainer.innerHTML = `
    <div class="container-image">
        <div class="square">
            <img src="${song.cover}">
        </div>
        <div class="circle">
            <div class="inner-circle"></div>
        </div>
    </div>
    <div class="info">
        <div class="song-information">
            <h3>Nombre</h3>
            <h3>Artista</h3>
            <h3>Duración</h3>
            <h3>Álbum</h3>
            <h3>Género</h3>
            <h3>Año</h3>
        </div>   
        <div class="song-detail">
            <span>${song.name}</span>
            <span>${song.artist}</span>
            <span>${song.duration}</span>
            <span>${song.album}</span>
            <span>${song.genre}</span>
            <span>${song.year}</span>
        </div>
    </div>  
    `
}


const bibliotecaContainerList = document.getElementById('biblioteca');
const favoritesContainerList = document.getElementById('favorites');
const playlistContainerList = document.getElementById('playlist');

const biblioteca = new SongList({ listN: 'Biblioteca', biblioteca: allSongs, container: bibliotecaContainerList });
const favorites = new SongList({ listN: 'Favoritos', container: favoritesContainerList });
const playlist = new SongList({ listN: 'Playlist', container: playlistContainerList });

    
biblioteca.addSong(...allSongs)
biblioteca.renderList()

const mPlayer = new Player({ currentPlayList: biblioteca.songs });


function changeCurrentSong(idSong, listN) {
    let currentList;
    switch (listN) {
        case 'Biblioteca':
            currentList = biblioteca;
            break;
        case 'Favoritos':
            currentList = favorites;
            break;
        case 'Playlist':
            currentList = playlist;
            break;
        default:
            console.error('Lista no reconocida:', listN);
            return;
    }

    const song = currentList.songs.find(s => s.id === idSong);
    if (!song) {
        console.error('Canción no encontrada en la lista:', idSong, listN);
        return;
    }

    if (mPlayer.currentPlayList) {
        mPlayer.removePlayList();
    }
    mPlayer.addPlayList(...currentList.songs);

    mPlayer.setCurrentSong(currentList.songs.indexOf(song));

    audio.src = song.urlSong;

    mPlayer.renderMPlayer();
    mPlayer.playFromList();

    const playIcon = document.getElementById('playIcon');
    playIcon.classList.remove('bi-play-circle-fill');
    playIcon.classList.add('bi-pause-circle-fill');
    
}


mPlayer.renderMPlayer()


const searchInput = document.getElementById('search')
const searchIcon = document.getElementById('searchIcon')

searchIcon.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    biblioteca.searchBy(searchTerm);
});
  
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        biblioteca.searchBy(searchTerm);
    }
})
