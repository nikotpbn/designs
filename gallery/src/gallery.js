const backdrop = document.querySelector(".backdrop");

const modalVideo = document.querySelector(".modal-video");
const modalImage = document.querySelector(".modal-image");

const videoBoxOverlay = document.querySelectorAll(".video-box-overlay");
const modalCloseButton = document.querySelector(".modal-close-button");
const deleteButton = document.querySelectorAll(".delete-button");

modalCloseButton.addEventListener("click", () => {
  if (!modalVideo.paused) {
    modalVideo.pause();
  }
  backdrop.style.display = "none";
  modalVideo.style.display = "none";
  modalImage.style.display = "none";
});

videoBoxOverlay.forEach((element) => {
  element.addEventListener("click", displayModal);
});

deleteButton.forEach((element) => {
  element.addEventListener("click", deleteArchive);
});

async function displayModal() {
  const fileSrc = this.dataset.archiveSrc;
  const fileType = this.dataset.archiveType;

  backdrop.style.display = "flex";
  if (fileType === "image") {
    modalImage.src = fileSrc;
    modalImage.style.display = "block";
  }

  if (fileType === "video") {
    modalVideo.src = fileSrc;
    modalVideo.style.display = "block";
  }
  // modalVideo.src = this.dataset.videoSrc;
  // backdrop.style.display = "flex";
  // try {
  //   // await modalVideo.play();
  // } catch (error) {
  //   console.log(error);
  // }
}

function deleteArchive() {
  console.log(this.dataset.url);
}