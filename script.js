// template_99g6b7q template id
//service_7i1gd4b   service id
//LkCCwhVRUMJg-Xgap API keys

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;


// Moving Background
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i ) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}



// Toggle Contrast Function

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if ( contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }

}

// Email function

function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  event.preventDefault();
  emailjs
    .sendForm(
      "service_7i1gd4b",
      "template_99g6b7q",
      event.target,
      "LkCCwhVRUMJg-Xgap",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on Lavelleali7@gmail.com",
      );
    });
}



// Toggle Modal Function

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
