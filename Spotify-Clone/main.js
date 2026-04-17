// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

// Function to close menu
const closeMenu = () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
};

// Function to open menu
const openMenu = () => {
  hamburger.classList.add('active');
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

if (hamburger && mobileMenu) {
  // Toggle menu with hamburger
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu with X button
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

// Play Button

const play = document.getElementById("play");
const progressBar = document.getElementById("progress-bar");

let audio = new Audio("audio/3.mp3");
let  currentSong = 1;



play.addEventListener("click", () => {
  if (audio.paused || audio.currentTime == 0) {
    audio.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");
  } else if (audio.play) {
    audio.pause();
    play.classList.remove("fa-circle-pause");
    play.classList.add("fa-circle-play");
  }
});

// Time Update Of Progress Bar

audio.addEventListener("timeupdate", () => {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  progressBar.style.background = `linear-gradient(to right, #fff ${progress}%, #333 ${progress}%)`;
});

// Progress-Bar Color Setting

progressBar.addEventListener("input", function () {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #fff ${value}%, #333 ${value}%)`;
  audio.currentTime = (progressBar.value * audio.duration) / 100;
});

// Music Card Play

let playMusic = Array.from(document.getElementsByClassName("playMusic"));

makeAllplay = () => {
  playMusic.forEach((elements) => {
    elements.classList.remove("fa-circle-pause");
    elements.classList.add("fa-circle-play");
  });
};

playMusic.forEach((elements) => {
  elements.addEventListener("click", (e) => {
    makeAllplay();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");

    index = parseInt(e.target.id);
    currentSong = index;
    audio.src = `audio/${index}.mp3`;
    audio.currentTime = 0;
    audio.play();
    updateMusicDetails();
  });
});


// Songs Array
const songs = [
  { id: 1,  title: 'Sitare ("From Ikkis")', artist: "Arijit Singh",                               img: "images/1.jpg"   },
  { id: 2,  title: "ROLL WITH ME",           artist: "Sukha, Prodgk",                             img: "images/2.jpg"   },
  { id: 3,  title: "Khat",                   artist: "Navjot Ahuja",                              img: "images/3.jpg"   },
  { id: 4,  title: "Khayaal",                artist: "Talwiinder, NDS",                           img: "images/4.jpg"   },
  { id: 5,  title: "Attraction",             artist: "Sukha",                                     img: "images/5.jpg"   },
  { id: 6,  title: "High On You",            artist: "Jind Verse",                                img: "images/6.jpg"   },
  { id: 7,  title: "Meri Zindagi Hai Tu",    artist: "Asim Azhar, Sabri Sisters",                 img: "images/7.jpg"   },
  { id: 8,  title: "4am in Karachi",          artist: "Talha Anjum, Umair",                       img: "images/8.jpg"   },
  { id: 9,  title: "Rakhlo Tum Chupaake",    artist: "Arpit Bala, Adil",                          img: "images/9.jpg"   },
  { id: 10, title: "Deewane",                artist: "Navaan Sandhu",                             img: "images/10.jpg"  },
  { id: 11, title: "Ishqa Ve",               artist: "Zeeshan Ali",                               img: "images/11.webp" },
  { id: 12, title: "Champakali",             artist: "Arpit Bala, Natiq, toorjo dey, Angad Virk", img: "images/12.jpg"  },
  { id: 13, title: "Midnight Call",          artist: "Harkirat Singh",                            img: "images/13.jpg"  },
  { id: 14, title: "Rakhlo Tum Chupaake",    artist: "Arpit Bala, Adil",                          img: "images/14.jpg"  },
];

// Update Player Bar
const updateMusicDetails = () => {
  const song = songs[currentSong - 1];
  document.querySelector(".music-title").textContent     = song.title;
  document.querySelector(".music-desc").textContent      = song.artist;
  document.querySelector(".now-bar img").src             = song.img;
};

// Call on page load
updateMusicDetails();

// Next Song Button

forward = document.getElementById('forward');

playNextsong = () => {
  if (currentSong < 14) {
    currentSong++;
  } else {
    currentSong = 1; // wrap back to first song
  }
  audio.src = `audio/${currentSong}.mp3`;
  audio.currentTime = 0;
  audio.play();
  updateMusicDetails();
}

forward.addEventListener("click", () =>{
  playNextsong();
  updateMusicDetails();
});

// Previous Song

backward = document.getElementById('backward');

playPrevsong = () => {
  let prevSong = (currentSong - 1);
  currentSong = prevSong == 0 ? 14: prevSong ;
  audio.src = `audio/${currentSong}.mp3`;
  audio.currentTime=0;
  audio.play();
}

backward.addEventListener("click", () => {
  playPrevsong();
  updateMusicDetails();
});

// Shuffle and Repeat 
let isShuffle = false;
let isRepeat  = false;

const shuffleBtn = document.getElementById("shuffle");
const repeatBtn  = document.getElementById("repeat");

// Shuffle Toggle
shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.querySelector("i").style.color = isShuffle ? "#1db954" : "#b3b3b3";
});

// Repeat Toggle
repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.querySelector("i").style.color = isRepeat ? "#1db954" : "#b3b3b3";
});

// Random Song
const getRandomSong = () => {
  let random;
  do { random = Math.floor(Math.random() * songs.length) + 1; }
  while (random === currentSong);
  return random;
};

audio.addEventListener("ended", () => {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
  } else if (isShuffle) {
    currentSong = getRandomSong();
    audio.src = `audio/${currentSong}.mp3`;
    audio.currentTime = 0;
    audio.play();
    updateMusicDetails();
  } else {
    playNextsong();
    updateMusicDetails();
  }
});

// Volume Bar 

const volumeBar  = document.getElementById("volume-bar");
const volumeIcon = document.getElementById("volume-icon");

// Volume Change
volumeBar.addEventListener("input", function () {
  audio.volume = this.value / 100;
  volumeBar.style.background = `linear-gradient(to right, #fff ${this.value}%, #333 ${this.value}%)`;

  if (this.value == 0) {
    volumeIcon.className = "fa-solid fa-volume-xmark";
  } else if (this.value < 50) {
    volumeIcon.className = "fa-solid fa-volume-low";
  } else {
    volumeIcon.className = "fa-solid fa-volume-high";
  }
});

// Mute Unmute
let isMuted = false;
let prevVolume = 100;

volumeIcon.addEventListener("click", () => {
  isMuted = !isMuted;
  if (isMuted) {
    prevVolume = volumeBar.value;
    audio.volume = 0;
    volumeBar.value = 0;
    volumeBar.style.background = `linear-gradient(to right, #fff 0%, #333 0%)`;
    volumeIcon.className = "fa-solid fa-volume-xmark";
  } else {
    audio.volume = prevVolume / 100;
    volumeBar.value = prevVolume;
    volumeBar.style.background = `linear-gradient(to right, #fff ${prevVolume}%, #333 ${prevVolume}%)`;
    volumeIcon.className = "fa-solid fa-volume-high";
  }
});


