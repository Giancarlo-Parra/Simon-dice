
const btnEmpezar = document.getElementById('btnEmpezar')
const btnRule = document.getElementById("btnRules")
const btnCreditos = document.getElementById("btnCreditos")
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const menu = document.getElementById("menu") 
const VELOCIDAD = 0.5;
const ULTIMO_NIVEL = 5

class Juego {
    constructor(){
        this.inicializar()
        this.crearSecuencia()
        setTimeout(this.siguienteNivel, 500)
    }

    inicializar(){
        this.toggelBtnEmpezar()
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    toggelBtnEmpezar(){
      console.log("im in")
      if (menu.classList.contains('hide')){
        menu.classList.remove('hide')
      }else{
        menu.classList.add('hide')
      }
   }

    crearSecuencia() {
         this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
        }

    siguienteNivel(){
        this.iluminarSecuencia()
        this.subnivel = 0
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
        };
    }
    transformarColorANumero(color) {

        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
            }
    };
    iluminarSecuencia() {
            for (let i = 0; i < this.nivel; i++) {
              const color = this.transformarNumeroAColor(this.secuencia[i])
              setTimeout(() => this.iluminarColor(color), 1500 * i * VELOCIDAD)
              this.agregarEventosClick()
            }
          }


     iluminarColor(color) {
         this.colores[color].classList.add('light')
         setTimeout(() => this.apagarColor(color), 700 * VELOCIDAD)
     }
  
         apagarColor(color) {
        this.colores[color].classList.remove('light')
       
        }

        agregarEventosClick() {
            this.colores.celeste.addEventListener('click', this.elegirColor)
            this.colores.verde.addEventListener('click', this.elegirColor)
            this.colores.violeta.addEventListener('click', this.elegirColor)
            this.colores.naranja.addEventListener('click', this.elegirColor)
          }
  
          eliminarEventosClick() {
            this.colores.celeste.removeEventListener('click', this.elegirColor)
            this.colores.verde.removeEventListener('click', this.elegirColor)
            this.colores.violeta.removeEventListener('click', this.elegirColor)
            this.colores.naranja.removeEventListener('click', this.elegirColor)
          }
  
          elegirColor(ev) {
            const nombreColor = ev.target.dataset.color
            const numeroColor = this.transformarColorANumero(nombreColor)
            this.iluminarColor(nombreColor)
            if (numeroColor === this.secuencia[this.subnivel]) {
              this.subnivel++
              if (this.subnivel === this.nivel) {
                this.nivel++
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                  alert("gano!")
                  this.eliminarEventosClick()
                  this.toggelBtnEmpezar()
                } else {
                  setTimeout(this.siguienteNivel, 1500)
                  this.eliminarEventosClick()

                }
              }
            } else {
              alert("perdio!")
              this.eliminarEventosClick()
              this.toggelBtnEmpezar()
            }
          }
}


function empezarJuego(){
  console.log("funciona")
    var juego = new Juego()
      
}
function reglas(){
  console.log("funciona")
 //   var juego = new Juego()
}
function creditos(){
  console.log("funciona")
 //   var juego = new Juego()
}