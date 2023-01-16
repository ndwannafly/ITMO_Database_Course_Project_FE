import {makeAutoObservable} from "mobx";

export default class WeaponStore {
    constructor() {
        this._weapon = []
        makeAutoObservable(this)
    }

    get weapon() {
        return this._weapon
    }

    setWeapon(weapon) {
        this._weapon = weapon
    }

    addWeapon(weapon) {
        this._weapon.push(weapon)
    }
}