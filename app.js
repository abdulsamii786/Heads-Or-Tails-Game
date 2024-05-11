function generateHeadOrTails() {
  let para = document.querySelector("#para");
  headOrTails = ["head", "tails"];
  rounded = Math.random() * headOrTails.length;
  genLength = Math.floor(rounded);
  result = headOrTails[genLength];
  if (result === "head") {
    para.innerText = "It's Heads!";
  } else {
    para.innerText = "It's Tails!";
  }
}
