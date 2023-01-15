import {$host} from "../axiosAPI";
export const addPirate = (name, height, birthDate, captureReward, teamName,title, devilFruit, devilFruitOwner, weapon, weaponOwner, willArmament, willObservation, willRoyal) => {
    const {date} = $host.post("/pirate/add", {
        name: name,
        height: parseInt(height),
        birthDate: birthDate,
        captureReward: parseInt(captureReward),
        teamName: teamName,
        title: title,
        devilFruit: devilFruit,
        devilFruitOwner: parseInt(devilFruitOwner),
        weapon: weapon,
        weaponOwner: parseInt(weaponOwner),
        willArmament: parseInt(willArmament),
        willObservation: parseInt(willObservation),
        willRoyal: parseInt(willRoyal)









    })
    return date
}