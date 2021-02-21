import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

export const BoardDetail= () => {
    return (<>

    <title>방문자 리뷰</title>
    <h4 class="main">
    <a href="#" id="home">리뷰 메인</a></h4>
    <h2>리뷰 보기</h2>
    <a href="#" id="list">리뷰목록</a>

    <table id="bddetail" class="w3-table w3-striped w3-border">
  	<thead>
  		<tr>
  			<th style="width: 20%">글번호: <span id="bdNum"></span></th> 			
            <th style="width: 40%">작성자: <span id="writerId"></span></th>
            <th style="width: 40%">작성일: <span id="regDate"></span></th>
  		</tr>
  	</thead>
  	<tbody>
  		<tr><td colspan="3" style="width: 100%"><div id="content" style="height: 300px"></div></td></tr>  		
  	</tbody>
    </table>

    </>)
}

