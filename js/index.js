/*document.getElementById("tab-label-1").addEventListener('click', function (event) {
  console.log(event)
})*/

document.addEventListener("DOMContentLoaded", function () {

  document.body.addEventListener('click', function (event) {
    let element = event.target;
    let headerMenu = element.closest('.header-menu');
    let accountIcon = element.closest('#account');
    if (headerMenu === null && accountIcon === null) {
      document.getElementById("headerMenu").style.visibility = 'hidden';
    }

  });

  let tabLabel1 = document.getElementById("tab-label-1");
  let tabLabel2 = document.getElementById("tab-label-2");

  let tabContainer1 = document.getElementById("tab-container-1");
  let tabContainer2 = document.getElementById("tab-container-2");

  tabLabel1.addEventListener("click", function () {
    tabLabel1.classList.add("active");
    tabContainer1.classList.add("active");

    tabLabel2.classList.remove("active");
    tabContainer2.classList.remove("active");
  });

  tabLabel2.addEventListener("click", function () {
    tabLabel2.classList.add("active");
    tabLabel1.classList.remove("active");

      tabContainer2.classList.add("active");
      tabContainer1.classList.remove("active");
  });

  let headerMenu = document.getElementById("headerMenu");
  let account = document.getElementById("account");

  account.addEventListener("click", function () {
    if (headerMenu.style.visibility === 'visible') {
        headerMenu.style.visibility = 'hidden';
    } else {
        headerMenu.style.visibility = 'visible';
    }
  });

});




