function supprimerDoublons(tab) {
	let acc = [];
	for (const value of tab) {
		if (acc.indexOf(value) === -1) {
            acc.push(value)
        }
	}
	return acc
}
console.log(supprimerDoublons([1, 2, 2, 3, 3, 3])); // Résultat attendu : [1, 2, 3]
