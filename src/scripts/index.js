const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const VELOCIDAD = 0.5;
class Juego {
    constructor(){
        this.inicializar()
        this.crearSecuencia()
        this.siguienteNivel()
    }

    inicializar(){
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    crearSecuencia() {
         this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
        }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    transformarNumeroAColor(numero){
        switch(numero) {
            case 0:
                return  'celeste';
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    iluminarSecuencia() {
            for (let i = 0; i < this.nivel; i++) {
              const color = this.transformarNumeroAColor(this.secuencia[i])
              setTimeout(() => this.iluminarColor(color), 1500 * i * VELOCIDAD)
            }
          }


     iluminarColor(color) {
         this.colores[color].classList.add('light')
         setTimeout(() => this.apagarColor(color), 700 * VELOCIDAD)
     }
  
         apagarColor(color) {
        this.colores[color].classList.remove('light')
        }
}

function empezarJuego(){
    var juego = new Juego()
}