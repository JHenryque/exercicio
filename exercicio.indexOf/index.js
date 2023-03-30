let arrNomePessa = new Array('ana', 'fernanda','carlos','andre')
arrNomePessa.push('Henrique')
console.log(arrNomePessa)

if (arrNomePessa.indexOf('Henrique') !== -1) {
    arrNomePessa.pop('carlos')
}
console.log(arrNomePessa)

console.log(arrNomePessa.indexOf(0))