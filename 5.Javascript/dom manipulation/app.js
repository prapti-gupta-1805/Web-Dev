// Element Selection
let mainImg = document.getElementById("mainImg");             // By ID
let oldImgs = document.getElementsByClassName("oldImg");      // By class (HTMLCollection)
let paragraphs = document.getElementsByTagName("p");          // By tag (HTMLCollection)

let firstParagraph = document.querySelector('p');             // First <p> element
let description = document.querySelector('#description');     // ID selector
let firstOldImg = document.querySelector('.oldImg');          // First element with class
let allParagraphs = document.querySelectorAll('p');           // All <p> elements (NodeList)

// Inspecting & Logging
console.dir(mainImg);               // Properties/methods of mainImg
console.log(mainImg.src);           // Image URL

// Accessing & Modifying Content
let para = document.querySelector('p');
console.log(para.innerText);        // Visible text
console.log(para.innerHTML);        // HTML inside element
console.log(para.textContent);      // All text including hidden

para.innerHTML = "hi, i am <b>Spider Man</b>";

// Modifying another element
let heading = document.querySelector('h1');
heading.innerHTML = `<u>${heading.innerText}</u>`;

// Attribute Manipulation
let img = document.querySelector('img');
img.getAttribute('id');                         // Getter
img.setAttribute('id', 'spidermanImg');         // Setter

// Inline Style Manipulation
heading.style.color = 'purple';
heading.style.backgroundColor = 'yellow';
