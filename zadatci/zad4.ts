

abstract class KucniLjubimac{
    public ime!: string
    abstract glasajSe():string
    
}
class Pas extends KucniLjubimac{
    private zvuk :string
    constructor(){
        super()
        this.zvuk = "value"
        this.ime = "Pas"
    }
    glasajSe(): string {
       return this.zvuk
    }
}


class Macka extends KucniLjubimac{
    private zvuk :string
    constructor(){
        super()
        this.zvuk = "maju"
        this.ime = "macka"
    }
    glasajSe(): string {
       return this.zvuk
    }

    static DohvatiIme() :string{
        return 'drama'
    }
}

const pass = new Pas()
const macka = new Macka()
console.log(pass.glasajSe())
console.log(pass instanceof Pas)
