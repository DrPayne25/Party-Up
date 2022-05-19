import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

const ProfileCompleteButton = (userValues) => {
  const navigate = useNavigate();

  if (userValues.userValues.prof_comp === false) {
    return (
      <Button variant='primary' onClick={() => navigate('/signup', { state: { newUser: userValues.userValues }, })}>
        Finish Your Profile!
      </Button>
    )
  }

  return;
};


export default ProfileCompleteButton;
