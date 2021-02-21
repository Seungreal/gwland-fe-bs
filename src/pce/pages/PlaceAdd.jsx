import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

export const PlaceAdd= () => {
    return (<>
    <table>
	    <tr>
	    	<td>관광지명</td>
	    	<td><input id="placeName" type="text" value="설악산 국립공원"/></td>
	    </tr>
	    <tr>
	    	<td>주소</td>
	    	<td><input id="placeAddress" type="text" value="강원도 속초시 설악산로 1091"/></td>
	    </tr>
	    <tr>
	    	<td>전화번호</td>
	    	<td><input id="placePhoneNumber" type="text" value="033-801-0900"/></td>
	    </tr>
	    <tr>
	    	<td>분류</td>
	    	<td><input id="placeCategory" type="text" value="공원"/></td>
	    </tr>
	    <tr>
	    	<td>지역</td>
	    	<td><input id="placeCity" type="text" value="속초시"/></td>
	    </tr>
	    <tr>
	    	<td>사진</td>
	    	<td><input id="placeImage" type="text" value="http://www.knps.or.kr/portal/images/park/k_img.jpg"/></td>
	    </tr>
    </table>
    <button id="add-btn">추가하기</button>
    
    </>)
}