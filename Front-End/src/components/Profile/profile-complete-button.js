import React from "react";
import { useNavigate } from 'react-router-dom';

const ProfileCompleteButton = (userValues) => { 
  const ButtonLogic = () => {
    const navigate = useNavigate();
  
    return (
      <button onClick={() => navigate('/signup', {userValues: "userValues"})}>
        Finish Your Profile!
      </button>
    )
  }
   
  return userValues.isComplete ? <ButtonLogic /> : null;
};


export default ProfileCompleteButton;
