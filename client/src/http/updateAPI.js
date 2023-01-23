import {$host} from "../axiosAPI";
export const update = (peopleId, devilFruitId, weaponId,weaponOwner, willArmament, willObservation, willRoyal,  devilFruitOwner ) => {
    const {date} = $host.post("/people/update", {
        peopleId: parseInt(peopleId),
        fruitId: parseInt(devilFruitId),
        fruitOwnerLevel: parseInt(devilFruitOwner),
        weaponId: parseInt(weaponId),
        weaponOwnerLevel: parseInt(weaponOwner),
        willOfArmsLevel: parseInt(willArmament),
        willOfObservation: parseInt(willObservation),
        willOfKing: parseInt(willRoyal)
    })
    return date
}