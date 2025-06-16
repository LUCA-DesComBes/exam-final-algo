function produitTotal(tab) {
    return tab.reduce((acc, val) => acc * val, 1)
}
console.log(produitTotal([1, 2, 3, 4])); // Résultat attendu : 24
