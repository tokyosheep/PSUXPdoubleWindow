import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import { StateType } from "../redux/reducer/profile";
import styled from "styled-components";

const Container = styled.div`
    display: block;
`;

const NameTitle = styled.h2`
    font-size: 20px;
    color: #fff;
    font-weight: 200;
`;

const OtherTitle = styled.p`
    font-size: 15px;
    color: #fff;
    font-weight: 200;
`;

const ProfilePage = () =>{
    const profile = useSelector((state:StateType)=>state.profile);
    console.log(profile);
    return(
        <Container>
            <NameTitle>{profile.name}</NameTitle>
            <OtherTitle>{profile.age}</OtherTitle>
            <OtherTitle>{profile.occupation}</OtherTitle>
        </Container>
    )
}

export default ProfilePage;