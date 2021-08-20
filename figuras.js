//Codigo cuadrado

console.group("Cuadrados");
    //const ladoCuadrado = 5;
    // console.log("Los lados del cuadrado miden: " + ladoCuadrado + " centímetros");
    // const perimetroCuadrado = ladoCuadrado * 4;
    // console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " centímetros");
    // const areaCuadrado = ladoCuadrado * ladoCuadrado;
    // console.log("El área del cuadrado es: " + areaCuadrado + " centímetros cuadrados");

    //FUNCTIONS
    function perimetroCuadrado(lado){
        return lado * 4;
    }
    function areaCuadrado(lado){
        return lado * lado;
    }
console.groupEnd();
//Codigo Triangulo

console.group("Triangulos");
    // const lado1Triangulo = 6;
    // const lado2Triangulo = 6;
    // const baseTriangulo = 4;
    // const alturaTriangulo = 5.5;

    // console.log("Los lados del triángulo miden: " 
    // + lado1Triangulo 
    // + " cm, y "
    // + lado2Triangulo 
    // + " cm, y su base " 
    // + baseTriangulo 
    // + " cm");

    // console.log("La altura del triangulo es: " + alturaTriangulo + " cm");
    // const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
    // console.log("El perimetro del Triangulo es: " + perimetroTriangulo + " cm");
    // const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    // console.log("El area del Triangulo es de: " + areaTriangulo + " cm cuadrados");
    
    //FUNCTIONS
    function perimetroTriangulo(lado1,lado2,base){
        return lado1 + lado2 + base;
    }
    function areaTriangulo(base,altura){
        return (base * altura) / 2;
    }
    function alturaIsoceles(base,lado1,lado2){
        if(lado1===lado2 & base>lado1){
            const altura = Math.sqrt(lado1*lado1 - (base/2*base/2))
            return altura;
        }else{
            alert("Los lados de tu triangulo deben ser iguales, y la base debe ser mayor a los lados.")
        }
    }

console.groupEnd();

//Codigo Circulo

console.group("Circulo")
    // const radioCirculo = 4;
    //     console.log("El radio del circulo es: " + radioCirculo);
    // const diametroCirculo = radioCirculo * 2;
    //     console.log("El diametro del circulo es: " + diametroCirculo);
    // const PI = 3.1415; //Math.PI tambien puede usarse
    //     console.log("El valor de PI es: " + PI);
    // const perimetroCirculo = diametroCirculo * PI;
    //     console.log("El perimetro del circulo es: " + perimetroCirculo);
    // const areaCirculo = (radioCirculo * radioCirculo) * PI;
    //     console.log("El area del circulo es: " + areaCirculo);

    //FUNCTIONS
    function diametroCirculo(radio){
        return radio * 2;
    }
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * Math.PI;
    }
    function areaCirculo(radio){
        return (radio * radio) * Math.PI;
    }
console.groupEnd();

//Aqui interactuamos con el HTML

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);   
}