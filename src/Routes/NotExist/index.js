import React from 'react';
import { coverImage, wrapperNotExist, h1 } from './style';
import CoverBackground from '../assets/cover-min.jpg';

const NotExist = () => {
    return (
        <div>                
            <img src={CoverBackground} alt="Glitters Cover" className={coverImage} />
            <div className={wrapperNotExist}>
                <div className={h1}>The profile that you search is not exist.</div>
            </div>
        </div>
    )
}

export default NotExist;