import React, { useState } from 'react';
import { styTextBox, styTextBoxItem } from './style';

import { SaveButton, CancelButton } from '../index';


const HeaderInlineEdit = ({ idx, company, endDate, jobDescription, jobTitle, startDate, setEdit, handleWorkExpSection }) => {
    const [companyNameValue, setCompanyName] = useState(company);
    const [jobDescValue, setJobDesc] = useState(jobDescription);
    const [jobTitleValue, setJobTitle] = useState(jobTitle);
    const [startDateValue, setStartDate] = useState(startDate);
    const [endDateValue, setEndDate] = useState(endDate);

    function handleChangeCompany(e){
        const {target: {value}} = e;
        setCompanyName(value);
    }

    function handleChangeJobTitle(e){
        const {target: {value}} = e;
        setJobTitle(value);
    }

    function handleChangeStartDate(e){
        const {target: {value}} = e;
        setStartDate(value);
    }
    function handleChangeEndDate(e){
        const {target: {value}} = e;
        setEndDate(value);
    }
    function handleChangeJobDesc(e){
        const {target: {value}} = e;
        setJobDesc(value);
    }

    function handleSaveButton() {
        setEdit(false);
        handleWorkExpSection({
            idx,
            company: companyNameValue,
            jobDescription: jobDescValue,
            jobTitle: jobTitleValue,
            startDate: startDateValue,
            endDate: endDateValue,
        })
    }

    return (
        <>
            <div className={styTextBox}>
                <input type='text' value={companyNameValue} className={styTextBoxItem} onChange={handleChangeCompany} />
            </div>
            <div className={styTextBox}>
                <input type='text' value={jobTitleValue} className={styTextBoxItem} onChange={handleChangeJobTitle} />
            </div>
            <div className={styTextBox}>
                <input type='text' value={startDateValue} className={styTextBoxItem} onChange={handleChangeStartDate} />
            </div>
            <div className={styTextBox}>
                <input type='text' value={endDateValue} className={styTextBoxItem} onChange={handleChangeEndDate} />
            </div>
            <div className={styTextBox}>
                <input type='text' value={jobDescValue} className={styTextBoxItem} onChange={handleChangeJobDesc} />
            </div>
            <div>
                <SaveButton onClick={handleSaveButton} /> <CancelButton onClick={() => setEdit(false)}/>
            </div>
        </>
    )
}

export default HeaderInlineEdit;