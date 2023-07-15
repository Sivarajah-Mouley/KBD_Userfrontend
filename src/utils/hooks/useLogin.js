import React, {useCallback, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Api} from '../Api'
import {logout} from '../localstorage'

function useLogin() {
  const [loginInfo, setLoginInfo] = useState({
    loading: true,
    isLogin: false,
  })
  const {replace} = useHistory()
  const checkLogin = useCallback(async () => {
    if(localStorage.getItem('E_COMMERCE_TOKEN')) {
      setLoginInfo({loading: true, isLogin: true})
      const {statusCode, data} = await Api.getRequest(`/api/user/me`)
      console.log(statusCode);
      if (statusCode === 400 || statusCode === 500) {
        replace('/')
        logout()
        return
      }
      setLoginInfo({loading: false, isLogin: true})

    }
  }, [replace])
  useEffect(() => {
    checkLogin()
  }, [checkLogin])
  return {loginInfo}
}

export default useLogin
