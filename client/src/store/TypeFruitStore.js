import {makeAutoObservable} from "mobx";

export default class TypeFruitStore {
    constructor() {
        this._type = []
        makeAutoObservable(this)
    }

    get types() {
        return this._type
    }

    setType(types) {
        this._type = types
    }

    addPirate(type) {
        this._type.push(type)
    }
}