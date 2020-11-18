import {createConnection} from 'typeorm'
import {arrDB} from "./entity/arr";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bubbleSort = (arr: Array<number>): Array<number> => {

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
    return arr
};

rl.question('Введите числа через пробел: ', async (value: string) => {
    rl.close()
    const result = bubbleSort(value.trim().split(' ').map(parseFloat))

    await createConnection().then(async (connection) => {

        const value = new arrDB();
        value.data = result

        const arrRepository = connection.getRepository(arrDB);

        await arrRepository.save(value);

    })

    console.log(result.join(' '))
})