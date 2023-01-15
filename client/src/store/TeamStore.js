import {makeAutoObservable} from "mobx";

export default class TeamStore {
    constructor() {
        this._team = []
        makeAutoObservable(this)
    }

    get team() {
        return this._team
    }

    setTeam(team) {
        this._team = team
    }

    addTeam(team) {
        this._team.push(team)
    }
}