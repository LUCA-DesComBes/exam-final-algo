function genererTableau(n) {
    let array = [];
    for (let i = 0; i < n + 1; i++) {
        array.push(i)
    }
    return array;
}
console.log(genererTableau(4)); // Résultat attendu : [0, 1, 2, 3, 4]
