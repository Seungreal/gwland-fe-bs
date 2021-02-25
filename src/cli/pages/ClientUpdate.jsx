// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { debounce } from 'throttle-debounce'
// import { useHistory, Link } from 'react-router-dom';

// export const ClientUpdate = () => {
    
//     return (<>
//     <title>고객정보 입력창</title>
// <caption><b>고객정보 수정</b></caption>


//   <tr>
//    <th>고객번호</th>
//    <td>
//     <span id= "cliNum"></span>
//    </td>
//   </tr>
//    <tr>
//    <th>고객아이디</th>
//    <td>
//     <span id = "cliId"></span>
//    </td>
//   </tr>
//   <tr>
//    <th>고객이름</th>
//    <td>
//     <input type ="text" id="name" name="name" maxlength="50px" value=""/>
//    </td>
//   </tr>
//   <tr>
//    <th>성별(M/F)</th>
//    <td>
//     <input type ="text" id="gender" name="gender" maxLength="50" value=""/>
//    </td>
//   </tr>
//   <tr>
//    <th>연락처</th>
//    <td>
//     <input type ="text" id="phoneNum" name="phoneNum" maxLength="50" value=""/>
//    </td>
//   </tr>
//   <tr>
//    <th>생년월일<br/>('-'는 생략)</th>
//    <td>
//     <input type ="text" id="regDate" name="regDate" maxLength="50" value=""/>
//    </td>
//   </tr>

// <p>
//  <input type="button" value="돌아가기" onclick="history.back(-1)"/>
//  <input type="button" value="취소" onclick="location.reload()"/>
//  <input type="submit" id="update-btn" value="수정하기"/>
// </p>
//     </>)
// }