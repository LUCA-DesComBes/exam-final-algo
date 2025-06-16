function motLePlusLong(phrase) {
	let str = "";
	let split = phrase.split(" ");
	let long = phrase.split(" ").map((val) => val.length);
	let max = Math.max(...long);
	for (let i = 0; i < split.length; i++) {
        if (max <= split[i].length) {
            str += split[i]
        }
    }
    return str;
}
console.log(motLePlusLong("Bonjour à tous et bienvenue")); // Résultat attendu : "bienvenue"
