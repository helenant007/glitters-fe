import React, { useState } from 'react';
import { styTextBox, styTextBoxItem } from './style';

import { SaveButton, CancelButton } from '../index';


const HeaderInlineEdit = ({ company, endDate, jobDescription, jobTitle, startDate, setEdit }) => {
    const [companyNameValue, setCompanyName] = useState(company);
    const [jobDescValue, setJobDesc] = useState(jobDescription);
    const [jobTitleValue, setJobTitle] = useState(jobTitle);
    const [startDateValue, setStartDate] = useState(startDate);
    const [endDateValue, setEndDate] = useState(endDate);

    function handleChangeName(e){
        const {target: {value}} = e;
        setCompanyName(value);
    }

    function handleChangeDob(e){
        const {target: {value}} = e;
        setJobDesc(value);
    }

    return (
        <>
            <div className={styTextBox}>
                <input type='text' value={companyNameValue} className={styTextBoxItem} onChange={handleChangeName} />
            </div>
            <div className={styTextBox}>
                <input type='text' value={jobDescValue} className={styTextBoxItem} onChange={handleChangeDob} />
            </div>
            <div>
                <SaveButton /> <CancelButton onClick={() => setEdit(false)}/>
            </div>
        </>
    )
}

export default HeaderInlineEdit;