import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

export const PlaceDetail= () => {
    return (<>
    <a href="#" id="updatePlace">수정화면으로</a>
	<table>
		<tr>
			<td><span id="name">이름</span></td>
		</tr>
		<tr>
			<td><span id="address">주소</span></td>
			<td><span id="phoneNumber">전화번호</span></td>
		</tr>
		<tr>
			<td><span id="category">분류</span></td>
			<td><span id="city">지역</span></td>
		</tr>
	</table>
	<span id="toggle"></span>
    
    </>)
}