import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';


class Album extends Component {
	constructor(props) {
		super(props);
	

	const album = albumData.find( album => {
		return album.slug === this.props.match.params.slug
    });

		
	this.state = {
        album: album,
        currentSong: album.songs[0],
        hoveredSong: null,
        currentTime: 0,
        volume: 1,
        duration: album.songs[0].duration, 
        isPlaying: false
    };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
	
    }   

    play() {
        this.audioElement.play();
        this.setState({ isPlaying:true });
    }

    pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
}
    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }
       componentDidMount() {
     this.eventListeners = {
     timeupdate: e => {
     this.setState({ currentTime: this.audioElement.currentTime });
     },
     durationchange: e => {
     this.setState({ duration: this.audioElement.duration });
     }
     };
     this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
   }

   componentWillUnmount() {
   this.audioElement.src = null;
   this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
   this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
   }
   

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
            if ( !isSameSong) { this.setSong(song); }
            this.play();
        }
    }

    handleMouseEnter (song) {
        this.setState({ isHovered: song });
console.log("hello")
}

    handleMouseLeave (song) 
    {this.setState({ isHovered: song });
console.log("Bye")
}

getSongIcon (song,index) {
//if This song is being hovered,
//  If this song is currently playing
//      Show a pause icon
//  else return play icon
//else
//  if playing show pause
//  else show song number

if (song == this.state.isHovered) {
if (song == this.state.currentSong && this.state.isPlaying) {
return (<span className = "ion-md-pause"></span>);
}
else { return (<span className ="ion-md-play"></span>); }
}
else { 
if (song == this.state.currentSong) {
return (<span className = "ion-md-pause"></span>);
} else {
return (index+1)
}
}
}
   handlePrevClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }
    
    handleNextClick() {
           const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
           const newIndex = Math.max(0, currentIndex + 1);
           const newSong = this.state.album.songs[newIndex];
           this.setSong(newSong);
           this.play();
       }

handleTimeChange(e) {
const newTime = this.audioElement.duration * e.target.value;
this.audioElement.currentTime = newTime;
this.setState({ currentTime: newTime });
}

handleVolumeChange(e) {
const newVolume = e.target.value;
this.audioElement.volume = newVolume;
this.setState({ volume: newVolume });
}

formatTime(time) {
if(isNaN(time)) {
return ("-:--")
} else {
let min = Math.floor(time / 60);
let sec = Math.round(time % 60);
return (sec < 10 ? (`${min}:0${sec}`) : (`${min}:${sec}`))
}
}

	render() {
		return (
			<section className="album">
			<section id="album-info">
			<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
			<div className="album-details">
 			<h1 id="album-title">{this.state.album.title}</h1>
			<h2 className="artist">{this.state.album.artist}</h2>
			<div id="release-info">{this.state.album.releaseInfo}</div>
			</div>
			</section>
			<table id="song-list">
			<colgroup>
			<col id="song-number-column" />
			<col id="song-title-column" />
			<col id="song-duration-column" />
			</colgroup>
			<tbody>
			{this.state.album.songs.map( (song, index) =>( 
                <tr key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleMouseEnter(song)} onMouseLeave={() => this.handleMouseLeave(song)} >
                <td>{this.getSongIcon(song,index)}</td>
				<td>{song.title}</td>
				<td>{this.formatTime(song.duration)}</td>
				</tr>
			))}
			</tbody>
        </table>
        <div className="playerbar">
                 <PlayerBar className="playerbar"
           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           currentTime={this.audioElement.currentTime}
           currentVolume={this.audioElement.currentVolume}
           duration={this.audioElement.duration}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
           handleTimeChange={(e) => this.handleTimeChange(e)}
           handleVolumeChange={(e) => this.handleVolumeChange(e)}
           formatTime={(time) => this.formatTime(time)}
       />
   </div>
			</section>
		);
    }
   }


export default Album;
