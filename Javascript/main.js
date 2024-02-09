const serverAddress = "minecraft.neal-innovations.com";
const screenshotContainer = document.getElementById("screenshotsContainer");
const images = [
  "../Images/World2.png",
  "../Images/World3.png",
  "../Images/World4.png",
];
let currentImageIndex = 0;

// Get All elements with the class "server-link"
const serverLinks = document.getElementsByClassName("server-link");

// Loop through the elements
for (let i = 0; i < serverLinks.length; i++) {
  // Get the element
  const element = serverLinks[i];

  element.innerText = serverAddress;

  //   Add event listener to copy the server address to the clipboard
  element.addEventListener("click", function () {
    navigator.clipboard.writeText(serverAddress);
    console.log("Server address copied to clipboard");
  });

  //   On Hover show a tooltip saying "Click to copy"
  element.addEventListener("mouseover", function () {
    element.innerText = "Click to copy";
  });

  //   On Mouse out show the server address
  element.addEventListener("mouseout", function () {
    element.innerText = serverAddress;
  });
}

function NextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  screenshotContainer.src = images[currentImageIndex];
}

function Update() {
  NextImage();
}

Update();

setInterval(Update, 5000);
