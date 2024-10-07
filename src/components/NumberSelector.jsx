
import { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({setEror,error,seleNum,setSeleNum}) => {

    let arr=[1,2,3,4,5,6]
    const numberSelectorHandler=(value)=>{
        setSeleNum(value);
        setEror('')
          }
    
    
  return (
    <NumberSelectorContainer>
        <p className='eror'>{error}</p>
    <div className='flex'>
    {arr.map((val,i)=>
    <Box
    isSelected={
        val===seleNum
    }
    key={i}
    onClick={()=>numberSelectorHandler(val)}>{val}
    </Box>)}
    </div>
    <p>Select Number </p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer =styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap:24px
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .eror{
        color: red;
    }
`


const Box= styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected? 'black':'white'};
    color: ${(props)=>!props.isSelected? 'black':'white'} ;

`