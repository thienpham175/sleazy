var musicPlayer = document.getElementById("musicPlayer");
var playPauseButton = document.querySelector(".tdk-music");
var isPlaying = false; // Ban đầu là không đang phát

// Hàm để bật hoặc tạm dừng trình phát nhạc và thay đổi hình ảnh của nút
function toggleMusic() {
  if (isPlaying) {
    musicPlayer.pause();
    playPauseButton.classList.remove("playing");
  } else {
    musicPlayer.play();
    playPauseButton.classList.add("playing");
  }
  isPlaying = !isPlaying; // Chuyển trạng thái đang phát hoặc tạm dừng
}

// Đặt hàm toggleMusic() vào hàm setTimeout() để chạy sau 3 giây
setTimeout(function () {
  toggleMusic();
}, 3000);
