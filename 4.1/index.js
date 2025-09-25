function getRang(start, end, step = 1) {
    const result = [];

    if (step === 0) {
        console.log("Шаг не может быть 0.");
    }

    if (start <= end && step > 0) {
        for (let x = start; x <= end; x += step) {
            result.push(x);
        }
    } else if (start >= end && step < 0) {
        for (let x = start; x >= end; x += step) {
            result.push(x);
        }
    }

    return result;
}


console.log(getRang(1, 10, 2));  
console.log(getRang(10, 1, -3));  
