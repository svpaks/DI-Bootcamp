// NOT BAD

const sentence = "This dinner is not that bad ! You cook well";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
  let newSentence =
    sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  console.log(sentence);
}
