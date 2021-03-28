const X = [64630,11735,14216,99233,14470,4978,73429,38120,51135,67060];

function processData(input){
    let average, median, mode;
    //average
    let sum = input.reduce((acum,value) => {
        return acum + value
    })
    average = (sum / input.length).toFixed(1)
    //median
    let media = input.sort((a,b) => {return a - b}) 
        .slice((input.length/2) -1, (input.length/2) +1)
        .reduce((current,index) => {return current + index})
    median = (media/2).toFixed(1)
    //mode 

    console.log(average + '\n' + median)
}
processData(X);