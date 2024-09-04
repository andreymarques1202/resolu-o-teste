const word = "portigas d. Ace";
let val = 0;

word.includes("a" || "A") ? console.log("letra existe na string.") : console.log("letra não existe na string.");

for(let i = 0; i < word.length; i++) {
    

    word[i] == "a" || word[i] == "A" ? val++ : null;
}

console.log("A letra ocorre " + val + " vezes na string");