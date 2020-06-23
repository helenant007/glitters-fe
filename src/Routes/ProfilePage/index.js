import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from './Header';
import WorkExperience from './WorkExperience';
import LoadingPage from '../LoadingPage';

import { editButtonStyle, editIconStyle, saveButtonStyle, cancelButtonStyle } from './style';
import editIcon from './assets/pencil-icon.png';

export const EditButton = ({ onClick }) => {
    function handleClick() {
        onClick()
    }
    return (
        <div className={editButtonStyle} onClick={handleClick}><span>Edit</span><img src={editIcon} alt="Edit" className={editIconStyle} /></div>
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

    function handleEditHeaderSection({ name, dob }) {
        const updatedProfileData = {
            ...profileData,
            name,
            dob,
        }
        setProfileData(updatedProfileData); // offline-first
        fetch(`https://glitters-be.herokuapp.com/profile/${slug}`,
            {
                method: 'post', body: JSON.stringify(updatedProfileData), headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(res => res.json()).then(res => {
            setProfileData(res.profile)
        })
    }

    if (profileData === null) return <LoadingPage />;

    return (
        <div>
            <Header {...profileData} handleEditHeaderSection={handleEditHeaderSection} />
            <WorkExperience workExperiences={profileData.workExperiences} />
        </div>
    )

}

export default ProfilePage;