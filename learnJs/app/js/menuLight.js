    'use strict';


(function() {
    let menuJquery =document.querySelector('#menu-jquery');
    let menuLight = menuJquery.cloneNode('deep');
    menuLight.setAttribute("id", "menuLight");
    menuLight.style.zIndex = "1000";
    document.body.insertBefore(menuLight, menuJquery);

    let subMenu = document.querySelectorAll('.sub-menu');
    let dropDown = document.querySelectorAll('.dropdown');

    // remove all no-js classes from dropDown
    dropDown.forEach((el) => {
        el.classList.remove("no-js");
    });


    let styles = document.styleSheets;

    let firstSheet = styles[0];

    //let's create new stylesheets

    subMenu.forEach((el) => {
        el.style.display = "block";
        let height = el.clientHeight;
        el.removeAttribute("style");


        let rulesNum = firstSheet.rules.length;

        let submenuId = 'submenu' + ((Math.random() * 10000000) ^ 0);
        el.setAttribute('id', submenuId);


        let actualHeightRule1 =
            `.dropdown > #${submenuId} {
                display: block;
                overflow: hidden;
                height: 0;
                -webkit-transition: height 0.5s;
                transition: height 0.5s;
            }`;

        let actualHeightRule2 =
            `.dropdown > #${submenuId}:hover {
                overflow: visible;
            }`;

        let actualHeightRule3 =
            `.dropdown:hover > #${submenuId} {
                height: ${height}px;
                -webkit-transition: height 0.5s;
                transition: height 0.5s;
            }`;
        firstSheet.insertRule(actualHeightRule1, rulesNum);
        firstSheet.insertRule(actualHeightRule2, rulesNum);
        firstSheet.insertRule(actualHeightRule3, rulesNum);

    });

}());
