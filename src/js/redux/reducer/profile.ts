export type Profile = {
    name:string,
    age:number,
    occupation:string
}

export type ProfileActions = 
    {type:"setName",name:string}|
    {type:"setAge",age:number}|
    {type:"setOccupation",occupation:string};
                    
type ProfileReducer = (state:Profile,action:ProfileActions)=>Profile;

const initProfile = {
    name:"shu",
    age:30,
    occupation:"designer"
}

export const profile:ProfileReducer = (state=initProfile,action)=>{
    switch(action.type){
        case "setName":
            state.name = action.name;
            return {...state};

        case "setAge":
            state.age = action.age;
            return {...state};

        case "setOccupation":
            state.occupation = action.occupation;
            return {...state};

        default:
            return state;
    }

}

export type StateType = {
    profile:Profile
}