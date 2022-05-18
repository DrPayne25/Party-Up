import React from "react";
import { useNavigate } from 'react-router-dom';

const ProfileCompleteButton = (userValues) => { 
  const navigate = useNavigate();
  
    if (userValues.userValues.prof_comp === false) {
      return (
        <button onClick={() => navigate('/signup', { userValues: "userValues" })}>
          Finish Your Profile!
        </button>
      )
    }  

  return  ;
};


export default ProfileCompleteButton;
