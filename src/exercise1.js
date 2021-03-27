/* Dada una matriz X, de N enteros y una matriz, W, que representan los
respectivos pesos de X elementos, calcule e imprima la media ponderada de X
elementos. Su respuesta debe redondearse a una escala de 1 decimal (es decir,
formato 12.3).
    Ejemplo:
    X = [1,2,3]
    W = [5,6,7]
La matriz de valores X[i]*W[i] = [5,12,21]. Su suma es 38. La suma de W =18. 
La media ponderada es 38/18 = 2.1 y volver. */ 

let x = [10,40,30,50,20];
let y = [1,2,3,4,5];

function weightedMean(X, W, size = 5) {
    
    const mw = [];
    for(let i = 0; i < size; i++){
        mw.push(X[i] * W[i]);
    }
    
    let xy = mw.reduce((acum, value) => {
        return acum + value
    })
    
    let wi = W.reduce((acum, value) => {
        return acum + value;
    })
    
    return (xy / wi ).toFixed(1);
    
}

console.log(weightedMean(x,y));