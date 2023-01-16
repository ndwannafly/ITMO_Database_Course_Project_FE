import {makeAutoObservable} from "mobx";

export default class BaseStore {
    constructor() {
        this._base = []
        makeAutoObservable(this)
    }

    get base() {
        return this._base
    }

    setBase(base) {
        this._base = base
    }

    addBase(base) {
        this._base.push(base)
    }
}