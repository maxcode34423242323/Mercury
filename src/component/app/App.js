import React, {useState} from 'react'
import TotalPage from '../totalPage/totalPage';
import {content} from '../content/content.js'
import './App.scss';


function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("1");
  const [total, setTotal] = useState(0);

  const onSubmitForm =(e) => {
    e.preventDefault()
    setCount(count + 1)
    setTotal(total + (+value))
  }

  const onReadValue = (e) =>{
    console.log(12)
    setValue(e.target.value)
  }

  if (count === 5){
    return <TotalPage total={total}/>
  } else {
    return (
      
        
        <form id='form' onSubmit={onSubmitForm}>
          <div className='form__title'>{content[count].title}</div>
          <div>
            <label>
                
                <input
                  className='form__input'
                  checked={value==='1'}
                  name='radio'
                  value='1'
                  type='radio'
                  onChange={(e) => onReadValue(e)}>
                </input>
                <span className='fake'></span>
                {content[count].anwser1}
              </label>
              
            <label>
                <input
                className='form__input'
                  checked={value==='2'}
                  name='radio'
                  value='2'
                  type='radio'
                  onChange={(e) => onReadValue(e)}>
                </input>
                <span className='fake'></span>
                {content[count].anwser2}
              </label> 
              <label>
                <input
                className='form__input'
                  checked={value==='3'}
                  name='radio'
                  value='3'
                  type='radio'
                  onChange={(e) => onReadValue(e)}>
                </input>
                <span className='fake'></span>
                {content[count].anwser3}
              </label>
          </div>
          <button type='submit'>далее</button>
        </form>
      
    );
  }
  
}

export default App;
