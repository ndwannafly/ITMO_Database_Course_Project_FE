import {$host} from "../axiosAPI";
export const addTeam = (teamName, shipName, imgLink) => {
    const {date} = $host.post('/team/add', {
        teamName: teamName,
        shipName: shipName,
        imgLink: imgLink
    })
    return date
}