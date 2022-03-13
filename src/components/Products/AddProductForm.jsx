import React, { useState, useRef } from 'react'
import _uniqueId from 'lodash/uniqueId'
import Input from '../Commons/Input'
import Button from '../Commons/Button'
import classes from './AddProductForm.module.css'

const AddProductForm = (props) => {
  const [id] = useState(_uniqueId('prefix-'));

  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); // 기본기능을 막아주는 코드
  
    const amountValue = inputRef.current.value;
    const amountValueToNumber = +amountValue;

    props.onAddToCart(amountValueToNumber);
  };

  return (
    <form className={classes.btn}>
      <Input ref={inputRef} label={'amount'} input={ {id: id, type: 'number', defaultValue: '1'}}/>
      <Button type="submit" onClick={submitHandler}>담기</Button>
    </form>
  )
}

export default AddProductForm