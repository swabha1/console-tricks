const persons = [
  {
    name: "Vishal",
    age: 30
  },
  {
    name: "Swapnil",
    age: 29
  },
  {
    name: "Megha",
    age: 26
  }
];
const increaseFontSize = element => {
  element.style.fontSize = "50px";
  element.style.backgroundColor = "green";
  element.style.borderColor = "#013220";
  element.innerText = "Thanks!";
};
const breakButton = document.getElementById("btnBreak");

// //Regular
// console.log("Hello");

// //Interpolated
// console.log("Hello I am a %s face", "😃");

// //Styled
// console.log(
//   "%c I am a styled text!!",
//   "font-size:50px; background: blue; color: white"
// );

// //Warning!!
// console.warn("OH-NO");

// //Error
// console.error("Oh my God! Something went wrong!");

// //Info
// console.info("The human nose can detect about 1 trillion smells.");

// //Testing
// //console.assert(1 === 2, "That's not true");

// console.assert(
//   breakButton.classList.contains("btn-danger"),
//   "Element not found!!"
// );

// //Clearing
// console.clear();

// //Viewing DOM elements
// console.log(breakButton);
// console.dir(breakButton);

// //Grouping together
// persons.forEach(person => {
//   console.group(`${person.name}`);
//   /*console.groupCollapsed(`${person.name}`);*/
//   console.log(`My name is ${person.name} and I am ${person.age} year old!`);
//   console.groupEnd(`${person.name}`);
// });

// //Counting

// const printName = name => {
//   console.count(name);
// };
// printName("Vishal");
// printName("Megha");
// printName("Swapnil");
// printName("Megha");
// printName("Megha");
// printName("Megha");
// printName("Swapnil");
// printName("Swapnil");
// printName("Vishal");

// //Timing
// console.time("fetching data");
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(data => data.json())
//   .then(data => {
//     console.timeEnd("fetching data");
//     console.log(data);
//     /*console.table(data);*/
//    /* console.trace() */
//   });

// $ (only work from console)
/*
$("a"); //Element

$("a") === document.querySelector("a"); //true

$$("a"); //List of elements

$$("a").length;

*/

//Preserve Log (only work from console)

/*Click on settings icon click "Preserve log"*/

//contentEditable (only work from console)
/*document.body.contentEditable = true;*/

// //Log Object
// console.log("window: " + window);
// console.log("window: ", window, "body: ", document.body);

// //getEventListeners (only work from console)

// breakButton.addEventListener("click", function() {
//   console.log("clicked");
// });

// /*
// getEventListeners($("#btnBreak"));
// getEventListeners($("#btnBreak")).click;
// */

// //monitorEvents (only work from console)

// /*
// monitorEvents($("#btnBreak"));
// monitorEvents($('#btnBreak'), 'click');
// monitorEvents($('#btnBreak'), ['click', 'keyup', 'focus']);
// */

// //unmonitorEvents (only work from console)

// /* unmonitorEvents($("#btnBreak")); */

// $_ (only work from console)
/*
  > 2+365+8/2*25
   = 467
  > $_
   = 467
  > $_*$_
   = 218089
  > $_
   = 218089 //$_ is always the last result.
  > Math.sqrt($_);
   = 467
*/

// clear (only work from console)

/*
 > clear();
    //will remove everything from your console.
*/

//profile (only work from console)
/*
profile("myProfile");

persons.forEach(person => {
  console.groupCollapsed(`${person.name}`);
  console.log(`My name is ${person.name} and I am ${person.age} year old!`);
  console.groupEnd(`${person.name}`);
});

profileEnd("myProfile");
*/

//inspect (only work from console)

/*
inspect($('#btnBreak'));
inspect($$('a')[3]);
*/

//$0-$4 (only work from console)

/*
  > $0
    //last element you have inspected
  > $1
    //second to the last item you have inspected
  > $2
    //you can use $0-$4 to get the last inspected elements
*/
