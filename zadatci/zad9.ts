


class Student{
    constructor(public ime :string, public godine :number){}

    kloniraj():Student{
        return new Student(this.ime,this.godine)
    }

}
let student1 = new Student("josip",9)
let student2 = student1.kloniraj()

// rezultat je