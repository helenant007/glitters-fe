import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from './Header';
import WorkExperience from './WorkExperience';
import LoadingPage from '../LoadingPage';

import { editButtonStyle, editIconStyle, deleteButtonStyle, saveButtonStyle, cancelButtonStyle, addExpButtonStyle } from './style';
import editIcon from './assets/pencil-icon.png';

export const EditButton = ({ onClick }) => {
    function handleClick() {
        onClick()
    }
    return (
        <div className={editButtonStyle} onClick={handleClick}><span>Edit</span><img src={editIcon} alt="Edit" className={editIconStyle} /></div>
    );
}

export const DeleteButton = ({ onClick }) => {
    function handleClick() {
        onClick()
    }
    return (
        <div className={deleteButtonStyle} onClick={handleClick}><span>Delete</span></div>
    );
}

export const AddExperienceButton = ({ onClick }) => {
    function handleClick() {
        onClick()
    }
    return (
        <div className={addExpButtonStyle} onClick={handleClick}><span>Add New Experience</span></div>
    );
}

export const SaveButton = ({ onClick }) => {
    function handleClick() {
        onClick()
    }
    return (
        <div className={saveButtonStyle} onClick={handleClick}><span>Save</span></div>
    );
}

export const CancelButton = ({ onClick }) => {
    function handleClick() {
        onClick()
    }
    return (
        <div className={cancelButtonStyle} onClick={handleClick}><span>Cancel</span></div>
    );
}

const ProfilePage = () => {
    let { slug } = useParams();
    let history = useHistory();

    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetch(`https://glitters-be.herokuapp.com/profile/${slug}`).then(res => res.json()).then(res => {
            if (res.status === 'OK') setProfileData(res.profile);
            else history.push("/not-exist");
        });
    }, [history, slug])

    function updateProfileData(profile) {
        setProfileData(profile);
        fetch(`https://glitters-be.herokuapp.com/profile/${slug}`,
            {
                method: 'post', body: JSON.stringify(profile), headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(res => res.json()).then(res => {
            setProfileData(res.profile)
        })
    }

    function handleEditHeaderSection({ name, dob }) {
        updateProfileData({
            ...profileData,
            name,
            dob,
        });
    }

    function handleWorkExpSection({ idx, company, endDate, jobDescription, jobTitle, startDate, }) {
        const workExperiences = [...profileData.workExperiences];
        workExperiences[idx] = {
            ...profileData.workExperiences[idx],
            company,
            endDate: endDate === '' ? null : endDate,
            jobDescription,
            jobTitle,
            startDate
        };
        const updatedProfileData = {
            ...profileData,
            workExperiences,
        }
        updateProfileData(updatedProfileData);
    }

    function handleAddExperience() {
        const updatedProfileData = {
            ...profileData,
            workExperiences: [...profileData.workExperiences, {
                company: 'New Company',
                "companyLogo": "https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/805d861f71c172ce260a247028cb0718.png",
                endDate: null,
                startDate: new Date().toISOString().split('T')[0],
                jobTitle:'New Job Title',
                jobDescription:'New Job Description',
            }],
        }
        updateProfileData(updatedProfileData);
    }

    function handleDeleteExperience(idx) {
        updateProfileData({
            ...profileData,
            workExperiences: profileData.workExperiences.filter((_experience,index) => index !== idx)
        })
    }

    if (profileData === null) return <LoadingPage />;

    return (
        <div>
            <Header {...profileData} handleEditHeaderSection={handleEditHeaderSection} />
            <WorkExperience workExperiences={profileData.workExperiences} handleWorkExpSection={handleWorkExpSection} handleAddExperience={handleAddExperience} handleDeleteExperience={handleDeleteExperience} />
        </div>
    )

}

export default ProfilePage;