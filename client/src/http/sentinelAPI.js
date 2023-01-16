import {$host} from "../axiosAPI";
export const addSentinel = (name, height, birthDate,ranking, devilFruit, devilFruitOwner, weapon, weaponOwner, willArmament, willObservation, willRoyal, base) => {
    const {date} = $host.post("/sentinel/add", {
        name: name,
        height: parseInt(height),
        birthDate: birthDate,
        rankingId: ranking,
        fruitId: devilFruit,
        fruitOwnerLevel: parseInt(devilFruitOwner),
        weaponID: weapon,
        weaponOwnerLevel: parseInt(weaponOwner),
        willOfArmsLevel: parseInt(willArmament),
        willOfObservation: parseInt(willObservation),
        willOfKing: parseInt(willRoyal),
        baseId: base
    })
    return date
}