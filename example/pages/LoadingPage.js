import React from 'react'
import Loading from '../../components/loading'
import '../../components/loading/style'
const LoadingPage = () => {

  const style = {
    textAlign: 'center',
  }
  return (
    <div style={style}>
      <Loading/>
      <br/>
      <br/>
      <br/>
      <Loading size="small"/>
    </div>
  )
}
export default LoadingPage