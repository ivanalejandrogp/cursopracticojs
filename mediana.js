const lista1 = [
    100,
    200,
    500,
    800,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(num){
    if(num%2 == 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    elemento1 = lista1[mitadLista1];
    elemento2 = lista1[mitadLista1 - 1];
    mediana = ((elemento1 + elemento2)/2);
}else{
    mediana = lista1[mitadLista1];
}