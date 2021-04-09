import React from 'react'
import { useLocation } from 'react-router'
import { RecomBox } from 'webapp/rcm'
import styles from './SurveyResult.module.scss'

export default ()=>{
    const location = useLocation()
    const recomList = location.state.recomList

    return <>
        <div className={styles.resultWrap}>
            <div>
                {recomList.map((recom,i)=>{
                    return <RecomBox recom={recom} index={i}/>
                })}
            </div>
        </div>
    </>
}