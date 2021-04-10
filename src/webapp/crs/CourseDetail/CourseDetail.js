import React from 'react'
import { CourseSummary } from '..'
import styles from './CourseDetail.module.scss'

export default ()=>{
    return <>
    <div className={styles.detail_wrap}>
        <CourseSummary/>
    </div>
    </>
}