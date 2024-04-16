function sortByMoreCriteria(input) {
    let sorted = input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });

    for(let i=0; i<sorted.length; i++){
         idx = sorted.indexOf(i)
        
    }

return sorted.join(`\n`)
}
console.log(sortByMoreCriteria(['Gosho',
    'dragan',
    'Petkan',
    'Hasan',
    'Frafan',
    'Taratan']));