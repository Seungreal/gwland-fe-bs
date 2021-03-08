import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';




export const ClientInsert = () => {



    return (<>
    <center/>
<table border="1" >
<caption><b><br/>고객정보 저장</b></caption> 
 <colgroup>
  <col width="100"/>
  <col width="100"/>
 </colgroup>

 
 <tbody>
  <tr>
   <th>고객아이디</th>
   <td>
    <input type ="text" id="cliId" name="cliId" maxlength="50" value=""/>
   </td>
  </tr>
  <tr>
   <th>고객이름</th>
   <td>
    <input type ="text" id="name" name="name" maxlength="50" value=""/>
   </td>
  </tr>
  <tr>
   <th>성별(M/F)</th>
   <td>
    <input type ="text" id="gender" name="gender" maxlength="50" value=""/>
   </td>
  </tr>
  <tr>
   <th>연락처</th>
   <td>
    <input type ="text" id="phoneNum" name="phoneNum" maxlength="50" value=""/>
   </td>
  </tr>
  <tr>
   <th>생년월일<br/>('-'는 생략)</th>
   <td>
    <input type ="text" id="regDate" name="regDate" maxlength="50" value=""/>
   </td>
  </tr>
 </tbody>
</table>
<p>
 <input type="button" value="돌아가기" onclick="history.back(-1)"/>
 <input type="button" value="취소" onclick="location.reload()"/>
 <input type="submit" id="insert-btn" value="등록"/>
</p>
    </>)
}