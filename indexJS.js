

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
    saveValue();

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
     }
  };
}
