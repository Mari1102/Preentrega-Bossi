alert ("Bienvenidos INTEGRAL AGRO :Somos especialistas en produccion ganadera");





/*condicional para saber que semilla elige el usuario*/
let semilla = prompt ("Que semillas te gustaria comprar? digitaria,pasto lloron,bufell grass o panicum coloratum");
if (semilla==="digitaria") {
        
  console.log("La digitaria cuesta 8 USD por kilo");
} else if (semilla === "pasto lloron") {
  console.log("El pasto lloron cuesta 9 USD por kilo");
} else if (semilla === "bufell grass") {
  console.log("El bufell grass cuesta 10 USD por kilo");
} else if (semilla  === "panicum coloratum") {
  console.log("El panicum coloratum cuesta 12 USD por kilo");
} else {
  console.log("No tenemos disponibilidad de esa semilla por el momento.");
};

let compra =prompt ("¿cuantos kilos deseas comprar? conoce descuentos comprando mas de 300 kgs");

console.log (" La cantidad de kilos solicitada es  " + compra);

/*Condicinal para realizar el calculo total segun cantidad de kilos ingresados por el usuario*/
let resultado
if (semilla=== "digitaria") {
        resultado=(compra*8)
  console.log("El total de la compra es " +resultado,"USD");
} else if (semilla === "pasto lloron") {
  resultado=(compra*9)
  console.log("El total de la compra es " +resultado,"USD");
  
} else if (semilla === "bufell grass") {
  resultado=(compra*10)
  console.log("El total de la compra es " +resultado,"USD");
 
} else if (semilla  === "panicum coloratum") {
  resultado=(compra*12)
  console.log("El total de la compra es " +resultado, "USD");
  
} else {
  console.log("No podemos realizar el calculo");

}

alert ("Conoce nuestros descuentos por compras mayores a 500 kgs");

/* Bucle para conocer descuentos segun cantidad de kilos comorados*/
kilos=400;
descuento=0
while (kilos<=900&&kilos>=400) {
  descuento+=5
  kilos+=100
console.log ("Por la compra de "+ kilos, "kgs", "tienes un descuento de " + descuento, "%")};
if (compra>=1000)
{ console.log ("Compras mayores a 1000ks tienen un descuento del 30 %")};


