console.log("let's write JS");

//chatgpt for getting the songs from the folder
// async function logSongs(folder) {
//     try {
//         const res = await fetch(`/${folder}/`);
//         const html = await res.text();

//         const tempDiv = document.createElement("div");
//         tempDiv.innerHTML = html;

//         const links = tempDiv.getElementsByTagName("a");
//         const songs = [];

//         for (let link of links) {
//             if (link.href.endsWith(".mp3")) {
//                 const songName = decodeURIComponent(link.href.split(`/${folder}/`)[1]);
//                 songs.push(songName);
//             }
//         }

//         console.log("🎵 Songs in folder:", songs);
//     } catch (err) {
//         console.error("⚠️ Failed to load songs:", err);
//     }
// }

// // Call the function with your folder name
// logSongs("songs");

let currentSong = new Audio();
let songs;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    // console.log(response);

    // Create a dummy DOM element to hold the HTML
    let div = document.createElement("div");
    div.innerHTML = response;

    // Get all anchor elements (links)
    let links = div.getElementsByTagName("a");
    // console.log(links)

    //create an empty array
    let songs = [];

    //loop to traverse and filter songs
    for (let index = 0; index < links.length; index++) {
        const element = links[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}

const playMusic = (trackName, songs) => {
    // let audio = new Audio("/songs/" + track)
    // audio.play();

    //chatgpt
    //to match the url of the song
    let matchedSong = songs.find(s => s.includes(trackName));
    //to play the mached song
    if (matchedSong) {
        // let audio = new Audio(matchedSong);
        currentSong.src = matchedSong   //this is to play the current song-avoids playing multiple songs


        currentSong.play();
        play.src = "pause.svg";

        document.querySelector(".songinfo").innerHTML = trackName;
        document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
    }
    else {
        console.error("Song not found:", trackName);
    }
}

async function main() {
    //get the list of all the songs
    songs = await getSongs();
    // console.log(songs)

    let songUL = document.querySelector(".songList ul");

    //to add the songs and make card for each song
    for (const song of songs) {
        let songName = song.split("/").pop().replace(".mp3", "").replace(/-\d+$/, ""); // Extract clean name
        songUL.innerHTML += `
            <li>
                <img class="invert"  src="music.svg" alt="">
                <div class="info">
                    <div>${songName}</div>
                    <div>Harry</div>
                </div>
                <div class="playnow">
                    <span>Play</span>
                    <img class="invert" src="play.svg" alt="">
                </div>
            </li>`;
    }

    //Attach an event listner to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            // playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())


            //chat gpt for above line to play song,just adds songs as parameter
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim(), songs)
        })
    })

    // //play the first song
    // var audio = new Audio(songs[0]);
    // // audio.play();  

    // audio.addEventListener("loadeddata", () => {
    //     let duration = audio.duration;
    //     // console.log(duration);
    // })

    //chatgpt to make the first song as default
    currentSong.src = songs[0];
    let firstSongName = songs[0].split("/").pop().replace(".mp3", "").replace(/-\d+$/, "");
    document.querySelector(".songinfo").innerHTML = firstSongName;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

    currentSong.addEventListener("loadeddata", () => {
        document.querySelector(".songtime").innerHTML =
            `00:00 / ${secondsToMinutesSeconds(currentSong.duration)}`;
    });



    //eventlistner to stop and play music with playbar and change play button accordingly
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "pause.svg";
        }
        else {
            currentSong.pause();
            play.src = "play.svg";
        }
    })

    //listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime,currentSong.duration); //for checking
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`

        //to move circle in the seekbar
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    //to make seekbar interactive
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    //add event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    //add event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    })

    //add an event listener to previous
    previous.addEventListener("click", () => {
        currentSong.pause();
        // console.log("previous clicked")

        // Get the current song filename from the URL
        let currentFile = currentSong.src.split("/").slice(-1)[0]; // get current file name
        let index = songs.findIndex(s => s.includes(currentFile));
        if ((index - 1) >= 0) {
            let newTrack = songs[index - 1];
            let songName = newTrack.split("/").pop().replace(".mp3", "").replace(/-\d+$/, "");
            playMusic(songName, songs);
        }
    })

    //add an event listener to next
    next.addEventListener("click", () => {
        currentSong.pause(); // Pause the current song
        // console.log("Next clicked");

        // Get the current song filename (e.g. "song1.mp3")
        let currentFile = currentSong.src.split("/").slice(-1)[0];

        // Find the index of this song in the 'songs' array
        let index = songs.findIndex(s => s.includes(currentFile));

        // Check if there is a next song available
        if ((index + 1) < songs.length) {
            let newTrack = songs[index + 1]; // get the next song
            let songName = newTrack.split("/").pop().replace(".mp3", "").replace(/-\d+$/, "");
            playMusic(songName, songs); // play the next song
        }
    })

    //add event listener to volume
    document.querySelector(".volume").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        //to see event 
        console.log("setting volume to:", e.target.value);

        currentSong.volume = parseInt(e.target.value)/100
    })

}
main() 
