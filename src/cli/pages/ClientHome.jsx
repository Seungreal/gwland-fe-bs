import React, { useState, useEffect } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
//import axios from 'axios'
//import { debounce } from 'throttle-debounce'
//import { useHistory, Link } from 'react-router-dom';

export const ClientHome= () => {
    return (<>
    <br>
    <h1> 고객관리 홈 </h1>
    <br>
    <P><a href='#' id="client-list">고객정보 보기</a></P>
    <P><a href='#' id="client-insert">고객정보 입력</a></P>
    </>)
}