var BASEURL=  location.pathname;
/* Parametros de configuracion globales*/
const config = {
base:BASEURL,
imgs: 30,        ///Numero de imagenes
infinite:false, //Giro infinito   Booleano
buttons:true,  //Mostrar botones Booleano
directionInverse:true,   //Direccion de rotacion Booleano
speed:2,     // sensibilidad de velocidad de rotacion 
debug:true,  // Modo desarrollo permite ver datos de zoom, frames y velocidad en la intefaz
amount:50,  //Numero de zoom + y -

}

export default config