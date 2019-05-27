/* Bildspel */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByTagName("photo");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

/* Visa / göm meny */

function toggleMenu() {
  const menuClass = 'site-menu';
  const expandedMenu = 'expanded';
  const menu = document.getElementsByClassName(menuClass)[0];

  menu.classList.toggle(expandedMenu);
}

var btnShow = document.getElementById("add-item");

btnShow.addEventListener('click', toggleMenu);




/* Byte mellan olika teman */

var themeSwitch = document.getElementById('themeMenu');

const saveValue = () => {
  localStorage.setItem("val-of-dd", themeSwitch.value);
  console.log(localStorage.getItem("val-of-dd") + " yeey");
}

const loadedValue = localStorage.getItem("val-of-dd");

if (loadedValue){
  themeSwitch.value = loadedValue;
  console.log(themeSwitch.value);
}

if(localStorage.getItem('val-of-dd') == null) {
  document.getElementById('pageTheme').setAttribute('href', 'styleOG.css');
}

if(themeSwitch) {
    initTheme();

  themeSwitch.addEventListener('change', function(event){
    resetTheme();

  });

  function initTheme() {

    var darkThemeSelected = (localStorage.getItem('val-of-dd') != null && localStorage.getItem('val-of-dd') === 'styleDark.css');
    darkThemeSelected ? document.getElementById('pageTheme').setAttribute('href', 'styleDark.css') : document.getElementById('pageTheme').removeAttribute('href');

    var lightThemeSelected = (localStorage.getItem('val-of-dd') != null && localStorage.getItem('val-of-dd') === 'styleLight.css');
    lightThemeSelected ? document.getElementById('pageTheme').setAttribute('href', 'styleLight.css') : document.getElementById('pageTheme').removeAttribute('href');

    var defaultThemeSelected = (localStorage.getItem('val-of-dd') != null && localStorage.getItem('val-of-dd') === 'styleOG.css');
    defaultThemeSelected ? document.getElementById('pageTheme').setAttribute('href', 'styleOG.css') : document.getElementById('pageTheme').removeAttribute('href');

  };

  function resetTheme() {

    if (themeSwitch.value != null ){
      document.getElementById('pageTheme').setAttribute('href', themeSwitch.value);
      localStorage.setItem('val-of-dd', themeSwitch.value);

    // }  else {
    //   document.getElementById('pageTheme').removeAttribute('href');
    //   localStorage.removeItem('val-of-dd');
    }
  };
}
