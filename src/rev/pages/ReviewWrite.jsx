import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

export const BoardWrite= () => {
    return (<>
    
    <div class="container">
	<h4 class="main"><a href="#" id="home">리뷰 메인</a></h4>
		<h1>리뷰쓰기</h1>
		<form>
			<div>
				<label for="writer">작성자</label> 
                <input id="writerId" type="text"
					name="bdwriter" class="form-control mt-4 mb-2" placeholder="작성자 입력"
					required/><br />
			</div>
			<div class="form-group">
				<label for="content">리뷰</label>
				<textarea id="content" class="form-control" rows="10"
					name="bdContent" placeholder="리뷰입력" required></textarea>
			</div>
			<button type="submit" id="write-btn" class="btn btn-secondary mb-3">저장</button>
			<button type="reset" id="cancel-btn" class="btn btn-secondary mb-3">취소</button>
		</form>
	</div>

    </>)
}
