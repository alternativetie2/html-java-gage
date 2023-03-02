




const styles = `
  body {
    text-align: center;
  }
  
  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: lightblue;
  } 

  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: lightblue;
  }

  .main {
    margin: 0 25%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
 
 let leftText = document.createElement("div");
 leftText.classList.add("left");
 leftText.innerText = "This is a place holder for DJ Khalid";

 let rightText = document.createElement("div");
 rightText.classList.add("right");
 rightText.innerText = "This is a place holder for MARK ZUCKERBURG"

 let mainText = document.createElement("div");
 mainText.classList.add("main");
 let my_element = document.createElement("h1");
let my_span = document.createElement('span');
let my_element2 = document.createElement("h2");
let my_element3 = document.createElement("textarea");

my_element2.innerText = "Where the fuck will this go";
my_element3.innerText = "Enter Paragraph";

my_span.innerText = "Hello World, This will be my frist attempt at creating anything of substance with java script.";

my_element.innerText = "Testing shiii";

mainText.appendChild(my_element);
mainText.appendChild(my_span);

const styleElement = document.createElement("style");
styleElement.innerHTML = styles;

document.head.appendChild(styleElement)
document.body.appendChild(leftText);
document.body.appendChild(rightText);
document.body.appendChild(mainText);
document.body.appendChild(my_element2);
document.body.appendChild(my_element3);


