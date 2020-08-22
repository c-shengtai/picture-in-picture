const videoElement = document.getElementById("videoStream");
const startBtn = document.getElementById("startBtn");

const loadStream = async () => {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = stream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
};

startBtn.addEventListener("click", async () => {
  startBtn.disabled = true;
  await videoElement.requestPictureInPicture();
  startBtn.disabled = false;
});

loadStream();
