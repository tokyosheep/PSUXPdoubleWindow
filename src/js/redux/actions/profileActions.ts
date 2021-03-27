import { ProfileActions } from "../reducer/profile";

export const setName:(name:string)=>ProfileActions = name =>{
    return{type: "setName",name:name};
}

export const setAge:(age:number)=>ProfileActions = age =>{
    return{type: "setAge",age:age};
}

export const setOccupation:(occupation:string)=>ProfileActions = occupation =>{
    return {type: "setOccupation",occupation};
}