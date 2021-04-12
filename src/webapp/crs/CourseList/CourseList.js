import axios from "axios";
import React, { useEffect, useState } from "react";
import { CourseBox } from "..";
import styles from './CourseList.module.scss'

export default () => {
  const [courseList,setCourseList] = useState([])

  useEffect(()=>{
    axios.get(process.env.REACT_APP_URL+"/course/list",{
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
    }).then(resp=>{setCourseList(resp.data)})
    .catch(err=>console.log(err))
  },[])

  return (
    <>
    <div className={styles.wrap}>
      {courseList.map((course)=>{
          return <CourseBox course={course}/>
      })}
      </div>
    </>
  );
};
