import type { NextPage } from 'next'

import Steps from '../../components/ProgressBar/Steps';


const ProgressBar : NextPage  = () => {

  return (
    <div> 
        <Steps steps={4}/>
    </div>
  )
}

export default ProgressBar;
