const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
      else {
          entry.target.classList.remove('show')
      }
  });
});

const aboutHobbiesTextsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show-about-hobbies-text');
      }
      else {
        entry.target.classList.remove('show-about-hobbies-text')
    }
  });
});

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show')
        }
    });
});

const blobObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-blob');
        }
    });
});


const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach((element) => aboutObserver.observe(element));

const aboutHobbiesSvg = document.querySelectorAll("#about-text path");
aboutHobbiesSvg.forEach((element) => aboutHobbiesTextsObserver.observe(element));

const hiddenHardSkillsElements = document.querySelectorAll('.hard-skills-list-hidden');
hiddenHardSkillsElements.forEach((element) => skillsObserver.observe(element));

const hiddenSoftSkillsElements = document.querySelectorAll('.soft-skills-list-hidden');
hiddenSoftSkillsElements.forEach((element) => skillsObserver.observe(element));

const hiddenBlobs = document.querySelectorAll('.my-skills-blob');
hiddenBlobs.forEach((element) => blobObserver.observe(element));



const aboutText = document.querySelectorAll('#about-text path')
const hobbiesText = document.querySelectorAll('#hobbies-text path')


VanillaTilt.init(document.querySelector(".data-tilt"), {
  scale: 1.05, // Tilt intensity
  max: 25,    // Max tilt rotation (in degrees)
  speed: 5000 // Transition speed
});


VanillaTilt.init(document.querySelector(".education-lyceum"), {
  scale: 1.05, // Tilt intensity
  max: 10,    // Max tilt rotation (in degrees)
  speed: 1000 // Transition speed
});

VanillaTilt.init(document.querySelector(".education-university"), {
  scale: 1.05, // Tilt intensity
  max: 10,    // Max tilt rotation (in degrees)
  speed: 1000 // Transition speed
});

VanillaTilt.init(document.querySelector(".btn.btn2"), {
  scale: 1.15, // Tilt intensity
  max: 25,    // Max tilt rotation (in degrees)
  speed: 5000 // Transition speed
});

VanillaTilt.init(document.querySelector(".to-top"), {
  scale: 1.15, // Tilt intensity
  max: 25,    // Max tilt rotation (in degrees)
  speed: 1000 // Transition speed
});



// to top button
const toTopButton = document.querySelector(".to-top");

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTopButton.classList.add("active")
  }
  else {
    toTopButton.classList.remove("active")
  }
})


const toggle = document.querySelector('.switch input[type="checkbox"]');

function toggleTheme() {
  if (toggle.checked) {
    transition()
    updateCSSVariables("#00fbff", "#ffffff", "#000000", "#626262");
  } 
  else {
    transition()
    updateCSSVariables("#00fbff", "#000000", "#ffffff", "#262626");
  }
}

let transition = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000)
}

function updateCSSVariables(mainColor, blackColor, whiteColor, greyColor) {
  document.documentElement.style.setProperty('--main-color', mainColor);
  document.documentElement.style.setProperty('--black-color', blackColor);
  document.documentElement.style.setProperty('--white-color', whiteColor);
  document.documentElement.style.setProperty('--grey-color', greyColor);
}

toggle.addEventListener('change', toggleTheme);

// let darkMode = localStorage.getItem("switch")
// const darkModeToggle = document.querySelector("switch")

// darkMode.addEventListener('click', function () {
//   console.log('test');
// })

// const toggle = document.getElementsByClassName('switch')
// const body = document.getElementById('body')

// toggle.addEventListener('click', function () {
//   this.classList.toggle()
// })