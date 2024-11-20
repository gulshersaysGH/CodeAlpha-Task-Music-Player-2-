const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackTitle = document.getElementById('track-title');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

const tracks = [
    { title: "Track 1", src: "track1.mp3" },
    { title: "Track 2", src: "track2.mp3" },
    { title: "Track 3", src: "track3.mp3" }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    audio.load();
}

function updateTime() {
    const currentTime = Math.floor(audio.currentTime);
    const duration = Math.floor(audio.duration);
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}

playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'inline';
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display =