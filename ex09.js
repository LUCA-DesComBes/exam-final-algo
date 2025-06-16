function supprimerDoublons(tab) {
    let acc = tab;
    let val = [];
    for (let i = 0; i < tab.length; i++) {
        if (acc.indexOf(val) === -1) {
            acc.push(val)
        } 
    }
    return acc;
}
console.log(supprimerDoublons([1, 2, 2, 3, 3, 3])); // Résultat attendu : [1, 2, 3]
