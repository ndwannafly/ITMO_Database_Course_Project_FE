import {makeAutoObservable} from "mobx";

export default class DevilFruitStore {
    constructor() {
        this._devilDruit= []
        makeAutoObservable(this)
    }

    get devilFruit() {
        return this._devilDruit
    }

    setDevilFruit(devilFruit) {
        this._devilDruit = devilFruit
    }

    addDevilFruit(devilFruit) {
        this._devilDruit.push(devilFruit)
    }
}