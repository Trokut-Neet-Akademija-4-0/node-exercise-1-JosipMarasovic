
class BankovniRacun{
    

    private stanje :number
   constructor(pocetnoStanje:number){
    this.stanje = pocetnoStanje
}

   uplata(iznos :number){
    this.stanje += iznos
}

   dohvatiStanje(){
    return this.stanje
   }

  isplata(iznos:number){
    if(iznos<= this.stanje){
        this.stanje = iznos
        return true
    }else{
        return false
    }
  }
}