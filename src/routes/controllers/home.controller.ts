import {userArray} from "../../index";
import {create} from "../services/home.service";

export const root = (req: any, res: any) => {
    res.render('index', {
        array: userArray
    })
}

export const calc = async (req: any, res: any) => {
    await create(userArray)
    res.redirect('/')
}
