import { Button, SvgIcon } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styles from './RecomBox.module.scss'

const ResultCourse = ({recom})=>{
    return <div className={styles.boxCourse}>
    <ul>
        <li style={{display:"inline-block"}}><img src="https://blog.kakaocdn.net/dn/nH7W6/btq2hJWcGQs/E2JTaem8tohYPLrJhoUTNk/img.png"/>
            <hr style={{marginTop: "10px", marginBottom: "24px",
                        width: "100px", backgroundColor: "#B0B0B0", height: "4px" }} />
        </li>
        {recom.map((item) => {
            return <li className={styles.li}>
                    <center>
                    <div style={{ width: "250px" }}>
                        <SvgIcon style={{ fontSize: "50px", color: "#1E90FF" }} viewBox={'0 0 30 50'}>
                            <path d="M17.23,0A17.22,17.22,0,0,0,0,17.23C0,24.46,10,38.49,14.74,44.8a3.12,3.12,0,0,0,5,0c4.77-6.31,14.74-20.34,14.74-27.57A17.23,17.23,0,0,0,17.23,0Zm2.16,26.43a9.45,9.45,0,1,1,7-7A9.46,9.46,0,0,1,19.39,26.43Z">
                            </path>
                        </SvgIcon>
                    </div>
                          
                     </center>
                        <hr style={{
                            marginTop: "10px", marginBottom: "10px",
                            width: "250px", backgroundColor: "#B0B0B0", height: "4px" }} />
                        <center>
                            <p style={{ fontSize:"13px", width: "300px" }} >{item.place.title}</p>
                        </center>
                    </li> })}
    </ul>
    <div style={{fontSize:'120px'}}><br/></div>
       </div>
}

export default ({recom,index})=>{
    const currentUser = useSelector(state=>state.accountReducer.currentUser)
    const history = useHistory()

    const handleDetail = (e)=>{
        e.preventDefault()
        if(currentUser==null){
            alert('로그인이 필요한 서비스입니다')
        }else{
            history.push("/course/detail")
        }
    }
    const handleSave = (e)=>{
        e.preventDefault()
        if(currentUser==null){
            alert('로그인이 필요한 서비스입니다')
        }else{
            axios.post(process.env.REACT_APP_URL+'/course/save',{
                crsName:`나만의 코스${Math.ceil(Math.random()*100)}`,
                places:Array.from(recom,v=>v.place.contentid),
                usrNum:currentUser.usrNum
            }).then(alert('저장 성공!'))
            .catch(err=>alert(err))
        }
    }
    
    return <>
        <div className={styles.recomBox}>
            <div className={styles.boxInfo}>
                <div className={styles.title}><span>추천코스{index+1}</span></div>
                <div className={styles.score}><span>추천도:{}</span></div>
                <div className={styles.btn_box}><Button onClick={handleDetail}>상세보기</Button><Button onClick={handleSave}>저장하기</Button></div>
            </div>
            <ResultCourse recom={recom}/>
        </div>
        
    </>
}