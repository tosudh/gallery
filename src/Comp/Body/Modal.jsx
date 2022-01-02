import React from 'react'
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
const ModalConatiner = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.95);
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content:center;
    align-items:center;
`
const ModalImage = styled.img`
    max-height: 80%;
    max-width: 80%;
    z-index: 6;
`
const ModalCross = styled.span`
    position: absolute;
    z-index: 7;
    top:15px;
    right:15px;
`
function Modal({data,callback}) {
    return (
        <ModalConatiner>
            <ModalImage src={data.urls.regular}/>
            <ModalCross><IconButton onClick={callback}><CloseIcon htmlColor="white" fontSize="large"/></IconButton></ModalCross>
        </ModalConatiner>
    )
}

export default Modal
