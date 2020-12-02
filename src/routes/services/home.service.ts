import {arrDB} from "../../entity/arr";
import { getManager} from "typeorm";

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

export const create = async (array: Array<number>): Promise<Array<number>> => {

    let lastSortId = await getManager()
        .query(`SELECT MAX(sortid) FROM public.array`) // Получаем id последней сортировки в бд

    lastSortId[0].max === null ? lastSortId = 1 : lastSortId = lastSortId[0].max + 1 // Если сортировок ещё не было, указываем, что это первая, иначе приводим полученное значение к удобному виду

    const result = bubbleSort(array)

    for (let j = 0; j < result.length; j++) {
        await arrDB.create({
            sortid: lastSortId,
            el: result[j]
        }).save()
    }

    return result

}
