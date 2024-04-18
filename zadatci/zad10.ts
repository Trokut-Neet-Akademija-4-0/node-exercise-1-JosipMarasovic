

class Kutija<T>{

    sadrzaj: T[]

    constructor(){
        this.sadrzaj = []
    }
    dodajStvari(stvar : T){
        this.sadrzaj.push(stvar)

    }

}