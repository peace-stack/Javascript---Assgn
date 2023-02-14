let details = new function(){ 
    this.myName ="Peace Agboola";
    this.myGender = "Female",
    myCourse = "Agricultural Economics",
    myInstituion ="Obafemi Awolowo university",
}
console.log ( details.myName + ('') + details.myGender + ('') + details.myCourse + ('') + details.myInstituion);

function Calc (Arithmetic) {
    this.firstValue = 10
    this.secondValue = 7
    this.thirdValue = 19
    this.firstFunc = function dFirstCalc (firstValue,secondValue, thirdValue){
         firstFunc = ((this.firstValue + this.secondValu)- this.thirdValue)
        dFirstCalc( 10 , 7, 19)
    }
}
    
    this.secondFunc = function dSecondCalc (){
        this.secondFunc = ((this.secondValue * this.thirdValue) + this.firstValue)
        dSecondCalc(19 + 7 + 10);
    }
    
