import React from 'react'
import Styles from '../sytles/reviewList.module.scss'

export default () => {


    return <>


        <div className={Styles.ahead_info}>
            <strong className={Styles.screen_out}>평가 요약</strong>
            <div className={Styles.grade_star}>
                <em className={Styles.num_rate}>평점 3.3
                    <span className={Styles.txt_score}></span>
                </em>

            </div>
        </div>

    </>
}