import React, { useState } from 'react';
import { styTextBox, styTextBoxItem } from './style';

import { SaveButton, CancelButton } from '../index';


const HeaderInlineEdit = ({ name, dob, setEdit, handleEditHeaderSection }) => {
    const [nameValue, setName] = useState(name);
    const [dobValue, setDob] = useState(dob);

    function handleChangeName(e){
        const {target: {value}} = e;
        setName(value);
    }

    function handleChangeDob(e){
        const {target: {value}} = e;
        setDob(value);
    }

    function handleSaveButton(){
        handleEditHeaderSection({ name:nameValue, dob: dobValue});
        setEdit(false);
    }

    return (
        <>
            <div className={styTextBox}>
                <input type='text' value={nameValue} className={styTextBoxItem} onChange={handleChangeName} />
            </div>
            <div className={styTextBox}>
                <input type='text' value={dobValue} className={styTextBoxItem} onChange={handleChangeDob} />
            </div>
            <div>
                <SaveButton onClick={handleSaveButton} /> <CancelButton onClick={() => setEdit(false)}/>
            </div>
        </>
    )
}

export default HeaderInlineEdit;