import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles(() => ({}))



export const ClientIndex = () => {
  const [client, setClient] = useState([])
  const URL = '/client/all'
  useEffect(() => {
    axios.get(URL,)
      .then((resp) => {
        alert('restful success')
        setClient(resp.data)
      })
      .catch((err) => {
        alert('실패')
        throw err;
      })
  }, [])

  return <><div className="content-body">
    <center>
      <h2>고객관리</h2>
      <input type="submit" value="고객정보 보기" className="cws-button alt" />
      <input type="submit" value="고객정보 입력" className="cws-button alt" />
    </center>
    <ul>

    {client.map(i=>(
      <li key = {i.cliNum}>
        {i.cliName}
      </li>
    ))}


    </ul>
  </div>
  </>
}