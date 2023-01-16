import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./input.css"
import UserStore from "./store/UserStore";
import PirateStore from "./store/PirateStore";
import TeamStore from "./store/TeamStore";
import DevilFruitStore from "./store/DevilFruitStore";
import WeaponStore from "./store/WeaponStore";
import RankingStore from "./store/RankingStore";
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        team: new TeamStore(),
        pirate: new PirateStore(),
        devilFruitArray: new  DevilFruitStore(),
        rankingArray: new RankingStore(),
        weaponArray: new WeaponStore()
    }}>
        <App/>
    </Context.Provider>);