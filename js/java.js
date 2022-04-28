const n = 5;
const epicMix = [
  "The Complete Knock",
  "Rocky",
  "ALL THESE CHANGES",
  "The Morning",
  "We Are The People",
  "Loud Places",
  "Billy",
  "Honey",
  "Back To What I Know",
  "Confessions",
  "By Design",
  "Is It True",
  "So Good At Being in Trouble",
  "Sundress",
  "Bambi",
  "White Ferrari",
  "HOTTIE",
  "Let Go",
  "Too Good",
  "Menswear",
  "The Divine Chord",
  "Life Itself",
  "peppermint",
  "Baby Baby"
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
