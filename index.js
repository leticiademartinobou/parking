// Coches : modelo, matricula, año de fabricacion, color, numRuedas, volante
// Motos : modelo, matricula, año de fabricacion, color, numRudeas, manillar

class Vehiculo { 
    constructor(modelo, matricula, año, color, numRuedas, volante) {
        this.modelo = modelo;
        this.matricula = matricula;
        this.año = año;
        this.color = color;
        this.numRuedas = numRuedas;
        this.volante = volante;
    }
    //Metodos (acciones)
    entrar() {
        console.log("ha entrado el coche");
    }
}

class Coche extends Vehiculo {
    constructor(modelo, matricula, año, color, numRuedas, volante, maletero) {
        super(modelo, matricula, año, color, numRuedas, volante);
        this.maletero = maletero;
    }
    //Método
    aparcar() {
        console.log("aparcando el coche");
    }
}

//super es una palabra reservada para heredar clases

const cochePrincipal = new Coche("tesla", 2458, 2000, "rojo", 4, 1);
console.groupCollapsed("ha entrado un vehículo", cochePrincipal);



class Moto extends Vehiculo {
    constructor(modelo, matricula, año, color, numRuedas, manillar) {
        super(modelo, matricula, año, color, numRuedas);
        this.manillar = manillar;
    }
    //Método
    aparcar() {
        console.log("aparcando la moto");
    }
}

const motoPrincipal = new Moto("Yamaha", 7586, 2003, "azul", 2, 1);
console.groupCollapsed("ha entrado una moto", motoPrincipal);

class PlazaParking {
  
    constructor(tamaño, vehiculo) {
      this.tamaño = tamaño;
      this.vehiculo = vehiculo;
    }
}

class PlazaVacia {
    constructor({tamaño : {pequeña, grande}}) {
        this.pequeña = pequeña;
        this.grande = grande;
    }
    //Metodos (acciones)
    vehiculoDentro(tipoVehiculo) {
        if(tipoVehiculo === Coche){
            this.grande--;
            return this.grande >=0
        }
        else{
            this.pequeña--
            return this.pequeña >=0
        }
    }
}

// PREGUNTAR A VICTOR
// class ParkingLotManager {
//     constructor({ size: { numOfSmallSpot, numOfMediumSpot, numOfLargeSpot } }) {
//       this.emptySpots = Array.from({ length: 3 }, (_, i) => {
//           if(this._getSizeIndex(1) === i) return Array.from({length: numOfSmallSpot}, () => (new Spot({size: 1})))
//           if(this._getSizeIndex(2) === i) return Array.from({length: numOfMediumSpot}, () => (new Spot({size: 2})))
//           if(this._getSizeIndex(3) === i) return Array.from({length: numOfLargeSpot}, () => (new Spot({size: 3})))
//       })


