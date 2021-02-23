import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

export const BoardMain= () => {
    return (<>
    
        <title>방문자 리뷰</title>

    <div class="container">
    <h2>방문자 리뷰</h2>
    <ul class="list-group">
        <li class="list-group-item">
            <a href="#" id="write">리뷰 쓰기</a>
        </li>
        <li class="list-group-item">
            <a href="#" id="list">리뷰 리스트</a>
        </li>
    </ul>
    </div>


    </>)
}
