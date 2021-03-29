import React from 'react';
import {anwser} from '../content/content'
import './totalPage.scss'
import instagram from '../../img/icon/instagram.svg'
import fb from '../../img/icon/fb.svg'
import twitter from '../../img/icon/twitter.svg'

const TotalPage = ({total}) => {
    let count;
    
    if ( total >= 5 && total <= 7 ){
        count = 0;
    } else if (total >= 8 && total <= 12){
        count = 1;
    } else {
        count = 2;
    }
    return(
        <div className='anwser'>
            <div>
                <div className='anwser__title'>{anwser[count].title}</div>
                <div className='anwser__descr'>{anwser[count].anws}</div>
            </div>
            <div className='anwser__links'>
                <div>Поделиться результатом</div>
                <div>
                    <a className='anwser__link' href='/'><img src={instagram} alt="instagram"/></a>
                    <a className='anwser__link' href='/'><img src={fb} alt="fb"/></a>
                    <a className='anwser__link' href='/'><img src={twitter} alt="twitter"/></a>
                </div>
            </div>
        </div>
    )
}

export default TotalPage;