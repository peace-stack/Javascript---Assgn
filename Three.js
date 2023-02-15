

function yearS ( year1, year2){
    let firstYear = new Date().getFullYear()
    let secondYear = new Date(1).getFullYear()
    let yearDiff= firstYear - secondYear
    return yearDiff
}
console.log (yearS(2023, 1970));
