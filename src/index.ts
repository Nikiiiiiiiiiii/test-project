const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bubbleSort = (arr: Array<number>): string => {

    for (let i = 0, endI = arr.length - 1; i < endI; i++) {

        let wasSwap: boolean = false // Чтобы избежать лишних итераций, если массив уже отсортирован

        for (let j = 0, endJ = endI - i; j < endJ; j++) {

            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true
            }
        }

        if (!wasSwap) break;
    }
    return arr.join(' ')
};

rl.question('Введите числа через пробел: ', async (value: string) => {
    rl.close()
    console.log(bubbleSort(value.split(' ').map(parseFloat)))
})