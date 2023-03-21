// ну ок, давай так напиши функцію generateFibonacci(x:number), вона має згенерувати послідовність фібоначі до заданого числа
// можеш зробити декілька варіантів реалізації (як мінімум два)
// ознайомся що це таке і де використовується
// залий код в окремий відкритий репозиторій і скинь мені лінк


function generateFibonacci(num) {
    let a = 0,
        b = 1;
    for (let i = 1; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(a);

    }
}
generateFibonacci(10);

// Ну давай один варіант це кількість чисел
// А другий варіант це згенерувати до заданого числа, типу якщо 4 то має бути 1 1 2 3

function generateFibonacciSecond(num) {
    let a = 0,
        b = 1,
        c;
    for (let i = -1; i < num - 1; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(a); 
    }
}
generateFibonacciSecond(4);