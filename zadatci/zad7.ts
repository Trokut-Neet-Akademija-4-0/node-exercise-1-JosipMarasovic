
interface Oblik{

povrsina():number
obujam():number
       
}

class Krug implements Oblik{

    constructor(public radious :number){}
    povrsina(): number {
        return Math.PI * this.radious * this.radious
        
    }
    obujam(): number {
        return 2 * this.radious
    }  
}

class Pravokutnik implements Oblik {
    constructor(public radious : number, public fix :number){}

    povrsina(): number {
       return this.radious + this.fix
    }
    obujam(): number {
        throw new Error("Method not implemented.")
    }
    
}