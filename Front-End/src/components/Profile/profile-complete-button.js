import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

const ProfileCompleteButton = (userValues) => { 
  const ButtonLogic = () => {
    const navigate = useNavigate();
  
    return (
      <Button variant='primary' onClick={() => navigate('/signup', {userValues: "userValues"})}>
        Finish Your Profile!
      </Button>
    )
  }
  return userValues.isComplete ? <ButtonLogic /> : null;
};


export default ProfileCompleteButton;
