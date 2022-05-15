function greet() {
    alert("Hello my mouse!");
}

// Level 48
/* 
function makeFieldGreen() {
  let inputField = document.querySelector("input");
  inputField.style.backgroundColor = 'lightgreen';
} 
function makeFieldWhite() {
  let inputField = document.querySelector("input");
  inputField.style.backgroundColor = 'white';
}
 */

// Level 49
/* 
function checkAddress(fieldId) {
  if (document.querySelector(fieldId).value === "") {
    alert("Email address required.");
    document.querySelector('h2').textContent = "Need email address!"
  }
} 
*/

// Level 50
/* function fillCity() {
  let cityName;
  let zipEntered = document.querySelector("#zip").value;
  switch (zipEntered) {
    case "60608" :
      cityName = "Chicago";
      break;
    case "68114" :
      cityName = "Omaha";
      break;
    case "53212" :
      cityName = "Milwaukee";
  }
  document.querySelector("#city").value = cityName;
} */

// Level 51
/*
function expandLoris() {
  let expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
  document.querySelector("#slowLoris").innerHTML = expandedParagraph;
}

function placeAList() {
  let listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
  document.querySelector("#lorisList").innerHTML = listToPlace;
}

function peekAtContent() {
  let whatsThere = document.querySelector("#slowLoris").innerHTML;
  document.querySelector('#peek').textContent = whatsThere;
}
*/
// Level 52
/* 
function makeInvisible() {
  document.querySelector("#ugly").className = "hidden";
}
*/

// Level 53
/* 
function swapPic(id, newPic) {
  document.querySelector('#before').src = newPic;
}
 */

// Level 55
/* let lorem = document.querySelector("#lorem");
lorem.style.fontSize = "2em";
 */

// Level 56
// let myH2 = document.getElementsByTagName("p");
/*
let myButtons = document.querySelectorAll("button"); // this is like [p0, p1, p2, p3]

for (let i = 0; i < myButtons.length; i++) {
    console.log(myButtons[i].textContent);
}


for (let i = 0; i < myH2.length; i++) {
  myH2[i].style.color = "red";
}
myH2[2].style.display = "flex";
myH2[2].style.justifyContent = "center";
myH2[3].textContent += " new:"; 
*/

/* for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].onclick = () => alert(`Holy moli! ${myButtons[i].innerText}`);
  myButtons[i].classList.add("anotherclass");
} */

/* myButtons.forEach((something) => {
  something.addEventListener("click", () => alert("oh hello"));
}); */


//SOME TESTS WITH EVENTListeners
/* myButtons.forEach(myFunction)

function myFunction(item, index, arr) {
    item.addEventListener('click', greet);
    if (item.textContent == "My bed is not here!") {
        item.textContent = "You did it!";
        item.style.color = "grey";
    }
    // How to remove handler!
    if (item.id == "two") {
        arr[0].removeEventListener("click", greet);

    }
    // How to add again
    if (item.id == "three") {
        arr[0].addEventListener("click", greet);
    }

}
 */
// Level 57
/* 
let myContainer = document.querySelector("#container");
let myButtons = myContainer.querySelectorAll("button");
console.log(myButtons)
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].style.fontSize = "2em";
    myButtons[i].style.color = "SlateBlue"
}
 */
// Level 60
let myDivs = document.querySelector("#h2");

let contents = myDivs.childNodes[0];
let contentName = contents.nodeValue;

for (let i = 0; i < myDivs.childNodes.length; i++) {
    console.log(myDivs.childNodes[i].nodeValue)
}
// Level 63 Getting targets name
console.log(myDivs.childNodes[0].nodeValue)
console.log(myDivs.childNodes.length)