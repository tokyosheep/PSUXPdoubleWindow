import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import { StateType } from "../redux/reducer/profile";
import styled from "styled-components";

import { setName, setOccupation , setAge } from "../redux/actions/profileActions";

const Container = styled.div`

`;

const TextList = styled.ul`
    padding: 0;
    list-style: none;
    li{
        margin-bottom: 5px;
    }
`;

const TestWrapper = styled.label`
    display: flex;
    justify-content:space-between;
    padding: 3px;
    width: 200px;
    height: 20px;
    border: 1px solid #555;
    input[type="text"] , input[type="number"]{
        color: #fff;
        font-size: 12px;
        width: 100px;
        border-bottom: 1px solid #fff;
    }
    p{
        margin: 0;
        color: #fff;
        font-size: 10px;
    }
`;


const EditPage = () =>{
    const dispatch = useDispatch();
    const profile = useSelector((state:StateType)=>state.profile);
    const handleName = useCallback((e)=>dispatch(setName(e.target.value)),[profile]);
    const handleOccupation = useCallback((e)=>dispatch(setOccupation(e.target.value)),[profile]);
    const handleAge = useCallback((e)=>dispatch(setAge(parseFloat(e.target.value))),[profile]);
    console.log(profile);
    return(
        <Container>
            <TextList>
                <li>
                    <TestWrapper>
                        <input type="text" value={profile.name} onChange={handleName} /><p>name</p>
                    </TestWrapper>
                </li>
                <li>
                    <TestWrapper>
                        <input type="number" min={1} max={99} step={1} value={profile.age} onChange={handleAge} /><p>age</p>
                    </TestWrapper>
                </li>
                <li>
                    <TestWrapper>
                        <input type="text" value={profile.occupation} onChange={handleOccupation} /><p>occupation</p>
                    </TestWrapper>
                </li>
            </TextList>
        </Container>
    )
}

export default EditPage;