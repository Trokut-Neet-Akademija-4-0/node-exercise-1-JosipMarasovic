import Osoba from "./zad1";

class Student extends Osoba {
    constructor(
        ime :string,
        dob:number,
        private brojIndexa : number,
    ){
        super(ime,dob) 
    }  
}

export default Student