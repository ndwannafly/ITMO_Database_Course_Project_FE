import {makeAutoObservable} from "mobx";

export default class PirateSentinelStore {
    constructor() {
        this._pirateSentinel = []
        makeAutoObservable(this)
    }

    get pirateSentinel() {
        return this._pirateSentinel
    }

    setPirateSentinel(pirateSentinel) {
        this._pirateSentinel = pirateSentinel
    }

    addpirateSentinel(pirateSentinel) {
        this._pirateSentinel.push(pirateSentinel)
    }
}