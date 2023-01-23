import {makeAutoObservable} from "mobx";

export default class SenStore {
    constructor() {
        this._sen = ''
        makeAutoObservable(this)
    }

    get sen() {
        return this._sen
    }

    setSen(sen) {
        this._sen = sen
    }

    addSen(sen) {
        this._sen.push(sen)
    }
}