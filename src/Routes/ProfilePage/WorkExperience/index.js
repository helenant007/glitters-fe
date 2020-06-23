import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component'
import { EditButton } from '../index';

import {
    companyLogoStyle, workExpWrapper, ExpItemWrapper, ExpItemCol1, ExpItemCol2,
    companyNameStyle, jobTitleStyle, jobDurationStyle, jobDescStyle
} from './style';

const WorkExpInlineEdit = loadable(() => import('./WorkExpInlineEdit'), {
    fallback: <div>Loading...</div>,
});

const WorkExperienceItem = ({ company, companyLogo, endDate, jobDescription, jobTitle, startDate }) => {
    const [isEdit, setEdit] = useState(false);

    return (
        <div className={ExpItemWrapper}>
            <div className={ExpItemCol1}>
                <img src={companyLogo} alt={company} className={companyLogoStyle} />
            </div>
            {
                !isEdit && (
                    <div className={ExpItemCol2}>
                        <div className={companyNameStyle}>{company} </div>
                        <div className={jobTitleStyle}> {jobTitle} </div>
                        <div className={jobDurationStyle}> ({startDate} - {endDate}) </div>
                        <div className={jobDescStyle}> {jobDescription} </div>
                        <EditButton onClick={() => setEdit(true)} />
                    </div>
                )
            }
            {
                isEdit && (
                    <div className={ExpItemCol2}>
                    <WorkExpInlineEdit
                        company={company} endDate={endDate} jobDescription={jobDescription} jobTitle={jobTitle} startDate={startDate} setEdit={setEdit}
                    />
                    </div>
                )
            }
        </div>
    )
}

const WorkExperience = ({ workExperiences }) => {
    const [workExperiencesList, setWorkExperience] = useState([]);

    useEffect(() => {

        const formatDate = (nonFormattedDate) => {
            const currDate = new Date(nonFormattedDate);
            return currDate.toLocaleString('default', { month: 'long' }) + ' ' + currDate.getDate() + ', ' + currDate.getFullYear();
        }

        const list = workExperiences.map(experience => {
            const startDate = formatDate(experience.startDate);
            const endDate = experience.endDate === null ? 'Present' : formatDate(experience.endDate);

            return {
                ...experience,
                startDate,
                endDate,
            };
        });
        setWorkExperience(list);

    }, [workExperiences])

    return (
        <div className={workExpWrapper}>
            {
                workExperiencesList.map((experience, i) =>
                    <WorkExperienceItem key={i} {...experience} />
                )
            }
        </div>
    )

}

export default WorkExperience;