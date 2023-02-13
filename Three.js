

function yearS ( year1, year2){
    let yearDiff= ((year1.getyear() - year2.getyear()) / 1000 )
    yearDiff /= (60 * 60 * 24) ;
    return Math.abs(Math. round(yearDif/365.25));   
}

yearS(2023, 1970);
