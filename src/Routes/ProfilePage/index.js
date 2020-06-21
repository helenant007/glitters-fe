import React, {useEffect} from 'react';

const ProfilePage = () => {

    function getProfileData(){
        fetch('https://glitters-be.herokuapp.com/profile/Helen').then(res => res.json()).then(res => console.log(res));
    }
    
    useEffect(() => {
        getProfileData();
    }, [])

return (<div>Hello World Again</div>)

}

export default ProfilePage;