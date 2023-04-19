import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import OTPpage from './components/OTPpage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import PrivateRoutes from './PrivateRoute'
import { storeToken } from './features/Auth/CheckOTPSlice'
function Layout() {
  const { token } = useSelector((store) => store.OTPCheck)
  // console.log(token)
  const currentTime = new Date().getTime()
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('data')) {
      const local = JSON.parse(localStorage.getItem('data'))
      let expiredTime = local?.data.token_expired_at
      expiredTime = new Date(expiredTime).getTime()
      // console.log('current' + currentTime)
      // console.log(expiredTime)
      currentTime < expiredTime && dispatch(storeToken(local))
    }
  }, [token, currentTime, dispatch])
  return (
    <Routes>
      {token ? (
        <>
          <Route path="/*" element={<PrivateRoutes />} />
          <Route index element={<Navigate to="/page" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/OTP" element={<OTPpage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  )
}

export default Layout
