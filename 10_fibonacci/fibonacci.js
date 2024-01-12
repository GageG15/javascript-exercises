function fibonacci(sequence){
            
    let arr = [];
    Number(sequence);

    if (sequence > 0){
        arr = [0,1];
        for (i = 1; i < sequence; i++){
            let lastNum = arr[arr.length - 1];
            let nextToLastNum = arr[arr.length - 2];
            let nextNum = lastNum + nextToLastNum;
            arr.push(nextNum);
        }
        return arr[arr.length - 1];
    }

    else if (sequence < 0){
        return 'OOPS';
    }

    else {
        arr = [0];
        return 0;
    }

    
}

// Do not edit below this line
module.exports = fibonacci;
