import React from 'react'
import classes from './Login.module.css'
import Modal from '../Commons/Modal'
import Button from '../Commons/Button'


const Login = (props) => {

const modalButton = (
  <div className={classes.buttons}>
    <Button onClick={props.onClose}>닫기</Button>
  </div>
);

const loginModalContent = (
  <>  
  {modalButton}
  </>
);

  return <Modal onClose={props.onClose}>{loginModalContent}</Modal>;
}

export default Login