//Codigo cuadrado

console.group("Cuadrados");
    const ladoCuadrado = 5;
    console.log("Los lados del cuadrado miden: " + ladoCuadrado + " centímetros");
    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " centímetros");
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El área del cuadrado es: " + areaCuadrado + " centímetros cuadrados");
console.groupEnd();
//Codigo Triangulo

console.group("Triangulos");
    const lado1Triangulo = 6;
    const lado2Triangulo = 6;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;

    console.log("Los lados del triángulo miden: " 
    + lado1Triangulo 
    + " cm, y "
    + lado2Triangulo 
    + " cm, y su base " 
    + baseTriangulo 
    + " cm");

    console.log("La altura del triangulo es: " + alturaTriangulo + " cm");
    const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
    console.log("El perimetro del Triangulo es: " + perimetroTriangulo + " cm");
    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    console.log("El area del Triangulo es de: " + areaTriangulo + " cm cuadrados");

console.groupEnd();

//Codigo Circulo

console.group("Circulo")
    const radioCirculo = 4;
        console.log("El radio del circulo es: " + radioCirculo);
    const diametroCirculo = radioCirculo * 2;
        console.log("El diametro del circulo es: " + diametroCirculo);
    const PI = 3.1415; //Math.PI tambien puede usarse
        console.log("El valor de PI es: " + PI);
    const perimetroCirculo = diametroCirculo * PI;
        console.log("El perimetro del circulo es: " + perimetroCirculo);
    const areaCirculo = (radioCirculo * radioCirculo) * PI;
        console.log("El area del circulo es: " + areaCirculo);
console.groupEnd();




