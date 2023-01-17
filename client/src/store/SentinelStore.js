import {makeAutoObservable} from "mobx";

export default class SentinelStore {
    constructor() {
        this._sentinel = []
        makeAutoObservable(this)
    }

    get sentinel() {
        return this._sentinel
    }

    setSentinel(sentinel) {
        this._sentinel = sentinel
    }

    addSentinel(sentinel) {
        this._sentinel.push(sentinel)
    }
}