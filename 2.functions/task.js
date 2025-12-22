function getArrayParams(...arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }

    let avg = (sum / arr.length).toFixed(2);
    avg = Number(avg); 

    return { min: min, max: max, avg: avg };
}


console.log(getArrayParams(-99, 99, 10)); 
console.log(getArrayParams(1, 2, 3, -100, 10)); 
console.log(getArrayParams(5)); 








function summElementsWorker(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((sum, num) => sum + num, 0);
}


function differenceMaxMinWorker(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return max - min;
}


function differenceEvenOddWorker(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      sumEvenElement += number;
    } else {
      sumOddElement += number;
    }
  }

  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      sumEvenElement += number;
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}



function meatGrinder(worker, ...meat) {

  return worker(...meat);
}



console.log("Сумма элементов:", meatGrinder(summElementsWorker, 1, 2, 3, 4, 5)); // Вывод: 15
console.log("Разница Max и Min:", meatGrinder(differenceMaxMinWorker, 5, 2, 8, 1, 9)); // Вывод: 8
console.log("Разница четных и нечетных сумм:", meatGrinder(differenceEvenOddWorker, 1, 2, 3, 4, 5, 6)); // Вывод: 6
console.log("Среднее значение четных:", meatGrinder(averageEvenElementsWorker, 1, 2, 3, 4, 5, 6)); // Вывод: 4
console.log("Пустой массив:", meatGrinder(summElementsWorker)); 
console.log("Среднее четных (нет четных):", meatGrinder(averageEvenElementsWorker, 1, 3, 5)); // Вывод: 0










function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity; 

    for (const arr of arrOfArr) { 
        const result = func(...arr); 
        if (result > maxWorkerResult) { 
            maxWorkerResult = result; 
        }
    }

    return maxWorkerResult; 
}


function summElementsWorker(...arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
    return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
    const evenSum = arr.filter(x => x % 2 === 0).reduce((sum, current) => sum + current, 0);
    const oddSum = arr.filter(x => x % 2 !== 0).reduce((sum, current) => sum + current, 0);
    return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
    const evenElements = arr.filter(x => x % 2 === 0);
    if (evenElements.length === 0) return 0; 
    return evenElements.reduce((sum, current) => sum + current, 0) 
}

// Примеры использования
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); 
console.log(makeWork(arr, differenceMaxMinWorker)); 
console.log(makeWork(arr, differenceEvenOddWorker)); 
console.log(makeWork(arr, averageEvenElementsWorker)); 
