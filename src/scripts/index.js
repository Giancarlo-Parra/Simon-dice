const btnEmpezar = document.getElementById('btnEmpezar')
const btnRule = document.getElementById("btnRules")
const btnCreditos = document.getElementById("btnCreditos")
const menu = document.getElementById("menu") 
const b1 = document.getElementById('1')
const b2 = document.getElementById('2')
const b3 = document.getElementById('3')
const b4 = document.getElementById('4')
const b5 = document.getElementById('5')
const b6 = document.getElementById('6')
const b7 = document.getElementById('7')
const b8 = document.getElementById('8')
const VELOCIDAD = 0.5;
const ULTIMO_NIVEL = 5
	

class Juego {
  constructor(){
      this.crearSecuencia()
      this.inicializar()
      setTimeout(this.siguienteNivel, 500)
  }

  inicializar(){
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.elegirColor = this.elegirColor.bind(this)
    this.toggelBtnEmpezar()
    this.nivel = 1
    this.colores = {
          b1,
          b2,
          b3,
          b4,
          b5,
          b6,
          b7,
          b8
    }
  }
  toggelBtnEmpezar(){
    if (menu.classList.contains('hide')){
      menu.classList.remove('hide')
    }else{
      menu.classList.add('hide')
    }
 }

  crearSecuencia() {
       this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 8))
      }

  siguienteNivel(){
      this.iluminarSecuencia()
      this.subnivel = 0
  }

  transformarNumeroAColor(numero){
      switch(numero) {
          case 0:
              return 'b1';
          case 1:
              return 'b2';
          case 2:
              return 'b3';
          case 3:
              return 'b4';
          case 4:
              return 'b5';
          case 5:
              return 'b6';
          case 6:
              return 'b7';
          case 7:
              return 'b8';
      };
  }
  transformarColorANumero(color) {
      switch (color) {
          case 'b1':
              return 0
          case 'b2':
              return 1
          case 'b3':
              return 2
          case 'b4':
              return 3
          case 'b5':
              return 4
          case 'b6':
              return 5
          case 'b7':
             return 6
          case 'b8':
              return 7
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
          this.colores.b1.addEventListener('click', this.elegirColor)
          this.colores.b2.addEventListener('click', this.elegirColor)
          this.colores.b3.addEventListener('click', this.elegirColor)
          this.colores.b4.addEventListener('click', this.elegirColor)
          this.colores.b5.addEventListener('click', this.elegirColor)
          this.colores.b6.addEventListener('click', this.elegirColor)
          this.colores.b7.addEventListener('click', this.elegirColor)
          this.colores.b8.addEventListener('click', this.elegirColor)
        }

        eliminarEventosClick() {
          this.colores.b1.removeEventListener('click', this.elegirColor)
          this.colores.b2.removeEventListener('click', this.elegirColor)
          this.colores.b3.removeEventListener('click', this.elegirColor)
          this.colores.b4.removeEventListener('click', this.elegirColor)
          this.colores.b5.removeEventListener('click', this.elegirColor)
          this.colores.b6.removeEventListener('click', this.elegirColor)
          this.colores.b7.removeEventListener('click', this.elegirColor)
          this.colores.b8.removeEventListener('click', this.elegirColor)
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
  
   var juego = new Juego()
}
function reglas(){
  alert("Comming soon")
 
}
function creditos(){
  alert("Comming soon")
}