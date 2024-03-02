import React from 'react'
import Header from '../header/header'
import Discription from '../discription/discription'
import Logomention from '../logomention/logomention'
import Whatuget from '../whatuget/whatuget'
import Certificate from '../certificate/certificate'
import TimeingChart from '../timeingChart/timeingChart'
import Whatwillcover from '../whatwillcover/whatwillcover'
import Project from '../project/project'
import Enrolbtn from '../enrollbtn/enrolbtn'

function Info() {
  return (
    <div>
        <Header/>
  <Discription/>
  <Logomention/>
  <Whatuget/>
  <Certificate/>
  <TimeingChart/>

  <Whatwillcover/>
  <Project/>
  <Enrolbtn/>
 
    </div>
  )
}

export default Info