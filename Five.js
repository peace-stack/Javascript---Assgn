let details = new Object()         
    details.myName ="Peace Agboola";
    details.myGender = "Female",
   details.myCourse = "Agricultural Economics",
   details.myInstituion ="Obafemi Awolowo university",
console.log ( details.myName + ' ' + details.myGender + ' ' + details.myCourse + ' ' + details.myInstituion);


    let Calc = {
    firstValue: 10,
    secondValue :7,
    thirdValue :19,
    firstFunc (){
        let math= ((this.firstValue + this.secondValue)- this.thirdValue)
        return math
    },

    secondFunc (){
        let mathTwo = ((this.secondValue * this.thirdValue) + this.firstValue)
        return mathTwo
    }
}
 console.log (Calc.firstFunc())
 console.log (Calc.secondFunc())




let obj= new Object() 
obj.name = "Peace Agboola"
obj.gender = "Female"
obj.course = "Agricultural Economics"
obj.institution = "OAU"
let objSentence = `My name is ${obj.name} I am a ${obj.gender} i studied ${obj.course} from ${obj.institution}`

console.log(objSentence)



















    
