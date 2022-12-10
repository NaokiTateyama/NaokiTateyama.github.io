import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { styled } from '@mui/material/styles';

import { BIO_ORDER } from 'Information';
import { jumpTo } from 'utils/JumpTo';

const CustomStepContent = styled(StepContent)({
  '&.MuiStepContent-root': { borderLeft: '1px solid #757575' }
});

function ProfileStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const onClickStep = (i: number, id: string) => {
    setActiveStep(i);
    jumpTo(id);
  };

  return (
    <Box>
      <Box sx={{ minWidth: 200, top: '20px', position: 'sticky' }} mr={2}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {BIO_ORDER.map((bio, i) => {
            return (
              <Step key={`step-${i}`} active={true}>
                <StepLabel icon={<></>} onClick={() => onClickStep(i, bio.id)}>
                  <Typography style={{ cursor: 'pointer' }}>
                    {bio.title}
                  </Typography>
                </StepLabel>
                <CustomStepContent>
                  {bio.children?.map((child) => {
                    return (
                      <Typography
                        key={`description-${bio.id}-${child.id}-${i}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => jumpTo(child.id)}
                        gutterBottom
                      >
                        {child.title}
                      </Typography>
                    );
                  })}
                </CustomStepContent>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Box>
  );
}

export default ProfileStepper;
