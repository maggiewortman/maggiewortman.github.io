const para = document.querySelector('h1');

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = 'On Repeat Today: ' + name;
}

const n = 5;
const epicMix = [
  "The Complete Knock - Blood Orange",
  "Rocky - Still Woozy",
  "ALL THESE CHANGES - Nick Hakim",
  "The Morning - The Weeknd",
  "We Are The People - Empire of the Sun",
  "Loud Places - Jaime xx",
  "Billy - DRAMA",
  "Honey - 070 Shake",
  "Back To What I Know - NEIL FRANCES",
  "Confessions - Sudan Archieves",
  "By Design - Kid Cudi",
  "Is It True - Tame Impala",
  "So Good At Being in Trouble - Unknown Mortal Orchestras",
  "Sundress - A$AP Rocky",
  "Bambi - Hippo Campus",
  "White Ferrari - Frank Ocean",
  "HOTTIE - Brockhampton",
  "Let Go - RAC",
  "Too Good - Drake",
  "Menswear - The 1975",
  "The Divine Chord - The Avalanches",
  "Life Itself - Glass Animals",
  "peppermint - lavender",
  "Baby Baby - Sports"
]
  .map(x => ({ x, r: Math.random() }))
  .sort((a, b) => a.r - b.r)
  .map(a => a.x)
  .slice(0, n);

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};

var index = 0;
    change();

    function change() {
        var x = document.getElementsByClassName('slides');
        for(var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        index++;

        if(index > x.length) {
            index = 1;
        }

        x[index - 1].style.display = "block";

        setTimeout(change, 3000);
    }
