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

//Class List Manipulation
console.log(img.classList);            
img.classList.add("xyz");              
img.classList.remove("xyz");           
img.classList.contains("xyz");         
img.classList.toggle("xyz");           


//DOM Navigation
let h4 = document.querySelector('h4');
h4.parentElement;

let div = document.querySelector('.box');
div.children;
div.childElementCount;

let ul = document.querySelector('ul');
ul.children[2].previousElementSibling;
ul.children[2].nextElementSibling;


//Creating & Appending Elements
let p = document.createElement('p');
p.innerText = "hi i am a new paragraph";
document.body.appendChild(p); //makes p a child of body
p.append("abc"); //adds abc at the end of p
p.prepend("xyz"); //adds xyz at the start of p
let span = document.createElement('span');
span.innerText = "lala";
p.insertAdjacentElement("beforebegin", span);

//removing elements
span.remove();
p.lastChild.remove(); // Remove "abc"
p.firstChild.remove(); // Remove "xyz"