import {arrDB} from "../../entity/arr";
import {IarrDB} from "../../interfaces/arrDB.interface";

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

export const create = async (array: Array<number>): Promise<IarrDB> => {

    return await arrDB.create({
        data: bubbleSort(array)
    }).save()

}
