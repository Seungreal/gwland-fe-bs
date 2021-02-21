import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

export const PlaceList= () => {
    return (<>
    <div id="main">
	<div id="add"><button id="addPlace">새 관광지 추가하기</button></div>
	<div id="list"></div>
	<div id="page"></div>
    </div>
    </>)
}