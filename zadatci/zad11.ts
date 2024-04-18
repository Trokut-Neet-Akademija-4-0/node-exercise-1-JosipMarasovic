
class Auto{
    constructor(
        private model:string, 
        private year:number,
        private manufa :string
    ){}
}

class AutoBuilder{
        private model!:string
        private year!:number
        private manufa! :string
        constructor(){}

        setModel(model:string) :AutoBuilder{
            this.model = model
            return this
        }

        setYear(year :number):AutoBuilder{
            this.year = year
            return this
        }

        setManufa(manufa:string):AutoBuilder{
            this.manufa = manufa
            return this
        }

        build():Auto{
            return new Auto(this.model,this.year,this.manufa)
        }

}

const auto = new AutoBuilder()
                 .setManufa('da')
                 .setModel('nije')
                 .setYear(2034)
                 .build()