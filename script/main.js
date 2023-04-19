

/*function total(v1=8,v2=9,v3=10, v4=12) {

  if (semilla=== "digitaria" ) {
    resultado=(compra*v1)

} else if (semilla === "pasto lloron") {
resultado=(compra*v2)


} else if (semilla === "bufell grass") {
resultado=(compra*v3)

} else if (semilla  === "panicum coloratum") {
resultado=(compra*v4)
  
};
}



alert ("Bienvenidos INTEGRAL AGRO :Somos especialistas en produccion ganadera");





/*condicional para saber que semilla elige el usuario
let semilla = prompt ("Que semillas te gustaria comprar? digitaria,pasto lloron,bufell grass o panicum coloratum");
if (semilla=="digitaria") {
        
  console.log("La digitaria cuesta 8 USD por kilo");
} else if (semilla == "pasto lloron") {
  console.log("El pasto lloron cuesta 9 USD por kilo");
} else if (semilla =="bufell grass") {
  console.log("El bufell grass cuesta 10 USD por kilo");
} else if (semilla  == "panicum coloratum") {
  console.log("El panicum coloratum cuesta 12 USD por kilo");
} else {
  console.log("No tenemos disponibilidad de esa semilla por el momento.");
};

let compra=parseFloat(prompt ("¿cuantos kilos deseas comprar? conoce descuentos comprando mas de 500 kgs"));

console.log (" La cantidad de kilos solicitada es  ", compra);

/*Condicinal para realizar el calculo total segun cantidad de kilos ingresados por el usuario

let resultado
switch (semilla) {
  case "digitaria": 
            total();
            console.log("El total de la compra es ",parseFloat(resultado),"USD");
    
    break;
    case "pasto lloron":
          total();
          console.log("El total de la compra es ",parseFloat(resultado), "USD");
    break;

    case "bufell grass":
            total();
            console.log("El total de la compra es ",parseFloat(resultado), "USD");

    break;

    case"panicum coloratum":
            total();
            console.log("El total de la compra es ",parseFloat(resultado), "USD");

    break;

    
  default:
    console.log ("No contamos con la semilla ingresada");
    break;
}

alert ("conoce los decuentos por compras mayores a 500kgs");

/* Bucle para conocer descuentos segun cantidad de kilos comprados
kilos=400;
descuento=0
while (kilos<=900&&kilos>=400) {
  descuento+=5
  kilos+=100
console.log ("Por la compra de " ,parseFloat (kilos), "kgs ,tienes un descuento de " , parseFloat (descuento), "%")};
if (compra>=1000)
{ console.log ("Compras mayores a 1000ks tienen un descuento del 30 %")};*/

const vectorDeSemillas=["digitaria","pasto lloron","bufell grass","panicum coloratum"];
let valor;
class semilla{
  
 constructor ( variedad, cantidad) {

  this.variedad=variedad;
  this.cantidad= parseFloat(cantidad);
 
}

 total() {
   let resultado=parseFloat(cantidad) * valor;
   console.log ("El total de tu compra es ", +resultado, "USD");
   
    
    
  
 }
}
 
alert ("Bienvenidos INTEGRAL AGRO :Somos especialistas en produccion ganadera");
let miCompra= [];
let respuesta = "si";
do{
variedad= prompt("¿Que semillas te gustaria comprar? digitaria,pasto lloron,bufell grass o panicum coloratum");

        let stock = vectorDeSemillas.includes(variedad);
                    if (stock) {   console.log ("Tenemos stock de la semilla seleccionada");                                         }
                             else {    console.log ("No contamos con esa semilla en stock")};

cantidad=prompt ("¿cuantos kilos quieres comprar?");
const semillauno = new semilla (variedad,parseFloat(cantidad));
miCompra.push(semillauno);




if (variedad == vectorDeSemillas[0]) {
     
  console.log("La digitaria cuesta 8 USD por kilo");
 valor=8;
 semillauno.total();
               
 
 } else if (variedad == vectorDeSemillas[1]) {
  console.log("El pasto lloron cuesta 9 USD por kilo");
  valor=9;
  semillauno.total ();
 
 } else if (variedad == vectorDeSemillas[2]) {
  console.log("El bufell grass cuesta 10 USD por kilo");
  valor=10;
  semillauno.total();
 
 } else if (variedad  == vectorDeSemillas[3]) {
  console.log("El panicum coloratum cuesta 12 USD por kilo");
  valor=12,
  semillauno.total();
 
 } else {
  console.log("No tenemos disponibilidad de esa semilla por el momento.");
 
 };

 
 
respuesta = prompt("¿Desea otra semilla'? si/no");
console.log (respuesta);

} while (respuesta!=="no");


for (let index = 0; index < miCompra.length; index++) {

  console.log (miCompra[index])
};
 


/* Bucle para conocer descuentos segun cantidad de kilos comprados*/
cantidad=400;
descuento=0
while (cantidad<=900&&cantidad>=400) {
  descuento+=5
  cantidad+=100
console.log ("Por la compra de " ,parseFloat (cantidad), "kgs ,tienes un descuento de " , parseFloat (descuento), "%")};
if (cantidad>=1000);
{ console.log ("Compras mayores a 1000ks tienen un descuento del 30 %")}
