/*jslint browser:true */
"use strict";

//  Builds an array of all anchors
var tempMenu = document.querySelectorAll('ul#primaryNavigation li a');
// Extracts the href from each anchor
var tempMenu2 = tempMenu[0].getAttribute("href");
// Extracts the link name from each anchor
var tempMenu3 = tempMenu[0].text;

// console.log(tempMenu);
// console.log(tempMenu2);
// console.log(tempMenu3);

//  Create a loop to output the 'smallNavArea'
var i;

for (i = 0; i < tempMenu.length; i++) {

  tempMenu2 = tempMenu[i].getAttribute("href");
  tempMenu3 = tempMenu[i].text;

  // Attaches the Unordered List to the Nav (<ul>)
  var btmMenuUl = document.createElement("UL");

  // Attaches an anchor to the List item (<li>)
  var btmMenuList = document.createElement("LI");

  // Creates the Anchor element in the navigation list
  var btmMenuA = document.createElement("A");

  // Attaches an HREF to the Anchor
  btmMenuA.setAttribute('href', tempMenu2);

  btmMenuA.innerHTML = tempMenu3;
  btmMenuList.appendChild(btmMenuA);

  // Attaches the list item to the existing Nav element that already exists on the page ('smallNavArea')
  document.getElementById('smallNavArea').appendChild(btmMenuUl).appendChild(btmMenuList);
}
