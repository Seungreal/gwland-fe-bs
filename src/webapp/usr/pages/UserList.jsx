import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../../usr/styles/UserList.module.scss'
import DeleteIcon from '@material-ui/icons/Delete'
import { SvgIcon, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

export default () => {
  const usr = ['번호', '권한', '플랫폼', '소셜 ID', '고객성함', '이메일주소', '연령대', '성별', '가입날짜']
  const [userList, setUserList] = useState([])
  const URL = '/user/all'
  useEffect(() => {
    axios.get(URL,)
      .then((response) => {
        console.log(response.data)
        setUserList(response.data)
      })
      .catch(err => { alert(err) })
  }, [])
  return <>
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>고객 정보</h2>
            <h3>구글은 성별과 나이대를 수집할수 없습니다.</h3>
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
                      <TableCell onClick={() => this.deleteUser(user.id)}>  <DeleteIcon /></TableCell>
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