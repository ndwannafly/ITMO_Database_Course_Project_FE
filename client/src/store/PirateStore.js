import {makeAutoObservable} from "mobx";

export default class PirateStore {
    constructor() {
        this._pirate = []
        makeAutoObservable(this)
    }

    get pirate() {
        return this._pirate
    }

    setPirate(pirate) {
        this._pirate = pirate
    }

    addPirate(pirate) {
        this._pirate.push(pirate)
    }
}