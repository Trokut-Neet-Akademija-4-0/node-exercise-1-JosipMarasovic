

class Test{
    private imeTest!: string;
    constructor(pravoIme:string){
        this.imeTest = pravoIme

    }

    public setName(imeTest :string):void {
        this.imeTest = imeTest

    }
    public getName() :string{
        return this.imeTest
    }

    predstaviSe():string{
        return `Ovo je moje  ime ${this.imeTest}`

    }

}


class Test2 extends Test {
    private name :string
    private pravoIme: string;
    constructor (pravoIme: string){
        super(pravoIme);
        this.name = "drama"
        this.pravoIme = "nije drama"
        
       
       
    }

}