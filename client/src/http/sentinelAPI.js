import {$host} from "../axiosAPI";
export const addSentinel = (name, height, birthDate,ranking, devilFruit, devilFruitOwner, weapon, weaponOwner, willArmament, willObservation, willRoyal) => {
    const {date} = $host.post("/sentinel/add", {
        name: name,
        height: parseInt(height),
        birthDate: birthDate,
        ranking: ranking,

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