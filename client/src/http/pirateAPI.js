import {$host} from "../axiosAPI";
export const addPirate = (name, height, birthDate, captureReward, teamID,title, devilFruit, devilFruitOwner, weapon, weaponOwner, willArmament, willObservation, willRoyal) => {
    const {date} = $host.post("/pirate/add", {
        name: name,
        height: parseInt(height),
        birthDate: birthDate,
        captureReward: parseInt(captureReward),
        teamID: teamID,
        title: title,
        fruitID: devilFruit,
        fruitOwnerLevel: parseInt(devilFruitOwner),
        weaponID: weapon,
        weaponOwnerLevel: parseInt(weaponOwner),
        willOfArmsLevel: parseInt(willArmament),
        willOfObservation: parseInt(willObservation),
        willOfKing: parseInt(willRoyal)
    })
    return date
}