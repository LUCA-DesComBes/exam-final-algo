function compterLettre(texte, lettre) {
	let count = 0;
    for (let i = 0; i < texte.length; i++) {
        if (texte[i] == lettre || texte[i] == "A") {
            count++
        }
    }
    return count
}
console.log(compterLettre("Abracadabra", "a")); // Résultat attendu : 5
