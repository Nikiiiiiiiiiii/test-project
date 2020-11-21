import {create} from "../services/home.service";

export const root = (req: any, res: any) => {
    res.render('index')
}

export const calc = async (req: any, res: any) => {
    const array = await create(req.body.title.trim().split(' ').map(parseFloat))
    res.render('index', {
        array: array.data
    })
}
