import React, { useRef, useState } from 'react'
import { UserProfile, UserProfileResponse } from '../../types/user.types'
import { getUserProfile } from '../../services/profile.service'
import UserProfilerContainer from '../../components/UserProfile/UserProfileContainer'
import Spinner from '../../components/UI/Spinner/Spinner'
import SearchForm from '../../components/SearchForm/SearchForm'
import './HomePage.css'
import MainLayout from '../../components/layouts/MainLayout'

const HomePage: React.FC = () =>{
  const [userInfo, setUserInfo] = useState<UserProfile | null | undefined>(null)
  const [status, setStatus] = useState<number | null | undefined>(null)
  const [loading, setLoading] = useState<Boolean>(false)

  const searchUserHanlder = async (value: string) => {
      setLoading(true)
      const data: UserProfileResponse | null = await getUserProfile(value)
      setUserInfo(data?.userInfo)
      setStatus(data?.status)
      setLoading(false)    
  }

  return (
    <>
    <MainLayout >
     <SearchForm searchUserHandler={searchUserHanlder} />
      {!loading && userInfo && <UserProfilerContainer userInfo={userInfo} />}
      {loading && <Spinner size={50} color="blue" />}
      {status === 404 && <div>No result found!</div>}
      </MainLayout>
    </>

  )
}

export default HomePage
