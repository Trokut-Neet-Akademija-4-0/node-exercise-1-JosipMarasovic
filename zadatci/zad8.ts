

/*class Singleton{

    private static instance :Singleton
    private constructor(){}

    static getInstance():Singleton {
        if(!Singleton.instance){
            Singleton.instance = new Singleton
        }
        return Singleton.instance
    }

}*/

class Singleton{
    static instance :Singleton
    static numberOfCalls :number = 0

    constructor(private isCalledFromParent :boolean = false){
        if(Singleton.instance === undefined && !this.isCalledFromParent) 
        Singleton.instance = new Singleton()
    }

    getInstance() : Singleton{
        return Singleton.instance
    }
}