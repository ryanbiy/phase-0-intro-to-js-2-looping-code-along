// Code your solutions in this file
function writeCards(names, event){
    const newArray=[]
    for(let i=0; i<names.length; i++){
        const message=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
       newArray.push(message)

    }
    return newArray;
}
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));


//countDown
function countDown(){
    let number=10;
    while (number>=0){

        console.log(number--)
    }


}
