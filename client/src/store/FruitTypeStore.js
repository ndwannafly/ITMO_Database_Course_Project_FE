import {makeAutoObservable} from "mobx";

export default class FruitTypeStore {
    constructor() {
        this._fruitType = []
        makeAutoObservable(this)
    }

    get fruitType() {
        return this._fruitType
    }

    setFruitType(fruitType) {
        this._fruitType = fruitType
    }

    addFruitType(fruitType) {
        this._fruitType.push(fruitType)
    }
}