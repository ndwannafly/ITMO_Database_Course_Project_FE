import {$host} from "../axiosAPI";
export const addWeapon = (weaponName, weaponDesc) => {
    const {date} = $host.post('/weapon/add', {
        weaponName: weaponName,
        weaponDesc: weaponDesc,

    })
    return date
}