// Proyecto final

class DatosUserFormulario {

    constructor(nombre,apellido,cursoDeInteres,email,pais){
		this.nombre = nombre;
		this.apellido = apellido;
		this.cursoDeInteres = cursoDeInteres;
		this.email = email;
		this.pais = pais;
	
	}

  seleccionaPais() { 
      if (this.pais == "ARGENTINA" || this.pais == ""){
          console.log("Gracias por tu interes en el curso " + this.cursoDeInteres +" tenemos excelentes opciones para ti, te enviaremos la informacion al " + email)
      }else {
          console.log(" Gracias por elegirnos " + usuarioNuevo.nombre+" "+  usuarioNuevo.apellido +  ", Increible te enviaremos informacion a tu mail " + this.email)
      }
  }
    
}
let nombre = prompt("Ingresa tu nombre")
let apellido = prompt("Ingresa tu apellido")
let cursoDeInteres = prompt("Ingresa tu curso de interes  para recibir informacion ")
let email = prompt("Ingresa tu mail para recibir informacion ")
let pais = prompt("Ingresa tu pais ").toUpperCase()
 
const usuarioNuevo = new DatosUserFormulario(nombre,apellido,cursoDeInteres,email,pais)

 usuarioNuevo.seleccionaPais()









