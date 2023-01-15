import {makeAutoObservable} from "mobx";

export default class RankingStore {
    constructor() {
        this._ranking = []
        makeAutoObservable(this)
    }

    get ranking() {
        return this._ranking
    }

    setRanking(ranking) {
        this._ranking = ranking
    }

    addRanking(ranking) {
        this._ranking.push(ranking)
    }
}