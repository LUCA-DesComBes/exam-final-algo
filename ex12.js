function estTableau(valeur) {
	return Array.isArray(valeur);
}
console.log(estTableau([1, 2, 3])); // Résultat attendu : true
console.log(estTableau("chaîne")); // Résultat attendu : false
