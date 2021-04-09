import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './UserList.module.scss'
import DeleteIcon from '@material-ui/icons/Delete'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

export default () => {
  const usr = ['번호', '권한', '가입 플랫폼', '소셜 ID', '고객성함', '이메일주소', '연령대', '성별', '가입날짜', '회원탈퇴']
  const [userList, setUserList] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL+'/user/list')
      .then((response) => {
        setUserList(response.data.content)
      })
      .catch(err => { alert(err) })
  }, [])

  const deleteUser = ((user) => {
    const deleteConfirm = window.confirm('정말 유저정보를 삭제하시겠습니까?')
    if (deleteConfirm == true) {
      axios.delete(process.env.REACT_APP_URL+'/user/delete', {
        data: { num: user.num } })
        .then((response) => {
          alert(`${user.username}고객님 정보를 삭제하셨습니다.`)
          window.location.reload()
        })
        .catch(err => { alert(err) })
    } else {
      alert('유저정보 삭제를 취소하셨습니다.')
      window.location.reload()}
  })

  return <>
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <center>
              <h2>고객 정보 데이터</h2>
              <h3>※ 구글은 성별과 연령대를 저장할 수 없습니다. (구글 정책사항)</h3>
            </center>

          </div>
          <div className={styles.cardBody}>
            <Table>
              <TableHead>
                <TableRow>
                  {usr.map((user) => {
                    return <TableCell>{user}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((user) => {
                  return (
                    <TableRow>
                      <TableCell>{user.num}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.provider}</TableCell>
                      <TableCell>{user.providerId}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.age}</TableCell>
                      <TableCell>{user.gender}</TableCell>
                      <TableCell>{user.createDate}</TableCell>
                      <TableCell onClick={() => deleteUser(user)}> <DeleteIcon/></TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  </>

}