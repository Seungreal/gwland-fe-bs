import React, { useEffect, useState } from 'react'
import Styles from '../sytles/reviewInput.module.scss'
import ReactStars from "react-rating-stars-component";
import Axios from 'axios'


export default () => {
    const [rate, setRate] = useState(0)
    const [textsection, setSection] = useState("")
    const [textlength, setLength] = useState(0)
    const textArray = ['진짜 별로에요...', '별로에요...', '그냥 그래요.', '좋아요!', '너무 좋아요!!']
    const ratingChanged = (newRating) => { 
        console.log(newRating)
        setRate(newRating); };
    useEffect(() => { setLength(textsection.length) }, [textsection])

    const reviewSumit = (e)=>{
        e.preventDefault()
        Axios.post('/review/save',{
           pce_num: '',
           rev_content: `{textsection}`,
           rev_date: '',
           rev_name:'',
           rev_star:'rate',
           num:''
            
           //pce_num, rev_content, rev_date, rev_name, rev_star, num
        }).then((respone)=>{alert(respone)})
        .catch((err)=>{alert(err)})
    }



    return <>
        <div className={Styles.kContent}>
            <div className={Styles.comment}>
                <div className={Styles.evaluation_place}>
                    <form className={Styles.commentUpdateForm}>
                        <fieldset className={Styles.fieldsetForm}>
                            <div className={Styles.grade_star}>
                                <span className={Styles.ico_star_inner_star} Style={{ width: "0%" }, { height: "1%" }}></span>
                                <div className={Styles.starform}>
                                    <ReactStars
                                        classNames={Styles.rateStar}
                                        count={5} onChange={ratingChanged} size={40}
                                        emptyIcon activeColor="#1E90FF" />
                                </div>
                                <em className={Styles.num_rate}>
                                    <span className={Styles.txt_g}> {rate}/5 점 </span>
                                </em>
                                <span className={Styles.txt_word}> {rate == 0 ? '평가해주세요' : textArray[rate - 1]} </span>
                            </div>
                            <div className={Styles.write_review}>
                                <textarea placeholder="작성한 평가는 해당 장소에 공개되며, 다른 사용자가 볼 수 있습니다.&#13;&#10;글자수는 100자를 넘을 수 없습니다."
                                    id="text1"
                                    className={Styles.contents}
                                    maxlength="100"
                                    onChange={(e) => { setSection(e.target.value) }}>
                                </textarea>
                            </div>
                        </fieldset>
                    </form>
                    <div className={Styles.agree_review}>
                        <span className={Styles.num_letter_txt_len_warp}>
                            <span className={Styles.screen_out}>등록한 글자수:</span>
                            <span className={Styles.txt_len}>{textlength}</span>
                            <span className={Styles.num_total}>/ 100</span>
                        </span>
                        <button className={Styles.btn_enroll} onClick={reviewSumit} >등록</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}