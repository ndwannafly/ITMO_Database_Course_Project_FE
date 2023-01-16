import {$host} from "../axiosAPI";
export const addFruit = (fruitName, fruitDesc, fruitType) => {
    const {date} = $host.post('/fruit/add', {
        fruitName: fruitName,
        fruitDesc: fruitDesc,
        fruitTypeId: fruitType
    })
    return date
}