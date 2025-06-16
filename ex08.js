function tousPositifs(tab) {
	let temp;
	for (let i = 0; i < tab.length - 1; i++) {
		for (let j = 0; j < tab.length - 1 - i; j++) {
            if (tab[j] > tab[j + 1]) {
                temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
            }
        }
	}
    return tab[0] > 0 ? true : false
}
console.log(tousPositifs([2, 5, 7])); // Résultat attendu : true
console.log(tousPositifs([2, -1, 7])); // Résultat attendu : false
