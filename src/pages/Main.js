import React, { useState } from 'react';
import Header from '../components/Header';
import EditResume from '../components/EditResume';
import PreviewResume from '../components/PreviewResume';

const Main = ({auth}) => {
  
  const [resume, setResume] = useState([
    {
      id: '1',
      name: '수빈',
      school: 'sch',
      major: 'Internet of Things',
      email: 'subin@gmail.com',
      phoneNumber: '010-1111-3333',
      project: '(1) baby smart band',
      career: 'none',
      certificate: '정보처리기사, 사회조사분석사',
      memo: 'I can do it',
      theme: 'light',
      fileName: 'subin',
      fileURL: 'subin.png'
    }
  ])

  const onLogout = () => {
    auth.logout();
  };

  return(
    <>
    <Header onLogout={onLogout}/>
    <EditResume resume={resume}/>
    <PreviewResume resume={resume}/>
    </>
  )
}

export default Main;
