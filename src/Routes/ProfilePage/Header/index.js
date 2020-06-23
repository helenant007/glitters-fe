import React, { useState } from 'react';
import loadable from '@loadable/component'

import { wrapperCover, coverImage, profPic, wrapperHeadline, h1, h3 } from './style';
import CoverBackground from '../../assets/cover-min.jpg';
import { EditButton } from '../index';

const HeaderInlineEdit = loadable(() => import('./HeaderInlineEdit'), {
    fallback: <div>Loading...</div>,
  });


const Header = ({ dob, name, profilePic, handleEditHeaderSection }) => {
  const [isEdit, setEdit] = useState(false);

  function countAge() {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();

    return age;
  }

  return (
    <div>
        <div className={wrapperCover}> 
          <img src={CoverBackground} alt="Glitters Cover" className={coverImage} />
            <img src={profilePic} alt={name} className={profPic} />
        </div>
        <div className={wrapperHeadline}>
        { !isEdit && (
          <>
            <div className={h1}>{name}</div>
            <div className={h3}>{countAge()} years old</div>
            <EditButton onClick={() => setEdit(true)} />
          </>
        )
        }
        {
          isEdit && (
            <HeaderInlineEdit name={name} dob={dob} setEdit={setEdit} handleEditHeaderSection={handleEditHeaderSection}/>
          )
        }
        </div>
    </div>
  )
}

export default Header;