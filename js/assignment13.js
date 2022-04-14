const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// use "let" to declare variables with values that change
// use "const" to declare variables that DO NOT change

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  // create new variable
  let newStory = storyText;

  // create 3 more variables
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // Step 3: replace :insertx: :inserty: :insertz: , make another function called replace or write the code again
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  if(customName.value !== '') {
    const name = customName.value;
    // Step 4: if custom value entered, find Bob and replace name
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';//replace 300 with calculation that converts 300 pounds into stones
    // turn weight into string
    // add string and 'stone' together to create one string
    const temperature =  Math.round((94-32)*5/9) + ' centigrade'; //replace 94 with calculation that converts F into Centigrate
    // same as weight

    // replace values in string with temp and weight variables
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

// Change the CSS to match site's CSS
