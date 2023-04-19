import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './Main'
import CarDetail from './components/CarDetail'
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="page" element={<Main />} />
        <Route path="detail" element={<CarDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/page" />} />
    </Routes>
  )
}

export default PrivateRoutes
