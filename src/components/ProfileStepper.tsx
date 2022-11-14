import React, { ReactNode, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import { jumpTo, ID } from 'utils/JumpTo';
import { styled } from '@mui/material/styles';

type StepType = {
  id: string;
  label: string | ReactNode;
  description: string | ReactNode;
};

const steps = [
  {
    id: 'about',
    label: <Typography style={{ cursor: 'pointer' }}>About</Typography>,
    description: <Box></Box>
  },
  {
    id: 'job-experience',
    label: (
      <Typography style={{ cursor: 'pointer' }}>Job experience</Typography>
    ),
    description: <Box></Box>
  },
  {
    id: 'education',
    label: <Typography style={{ cursor: 'pointer' }}>Education</Typography>,
    description: <Box></Box>
  },
  {
    id: 'skills',
    label: <Typography style={{ cursor: 'pointer' }}>Skills</Typography>,
    description: (
      <Box>
        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => jumpTo(ID.PROGRAMMING)}
          gutterBottom
        >
          Programming
        </Typography>
        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => jumpTo(ID.CERTIFICATES)}
          gutterBottom
        >
          Certificates
        </Typography>
      </Box>
    )
  },
  {
    id: 'publications',
    label: <Typography style={{ cursor: 'pointer' }}>Publications</Typography>,
    description: (
      <Box>
        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => jumpTo(ID.JOURNAL)}
          gutterBottom
        >
          Journal article
        </Typography>
        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => jumpTo(ID.INT_CONF)}
          gutterBottom
        >
          International conference
        </Typography>
        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => jumpTo(ID.DOM_CONF)}
          gutterBottom
        >
          Domestic conference
        </Typography>
      </Box>
    )
  }
];

const CustomStepContent = styled(StepContent)({
  '&.MuiStepContent-root': { borderLeft: '1px solid #757575' }
});

function ProfileStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const onClickStep = (i: number, step: StepType) => {
    setActiveStep(i);
    jumpTo(step.id);
  };

  return (
    <Box>
      <Box sx={{ minWidth: 200, top: '20px', position: 'sticky' }} mr={2}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, i) => {
            return (
              <Step key={i} active={true}>
                <StepLabel icon={<></>} onClick={() => onClickStep(i, step)}>
                  {step.label}
                </StepLabel>
                <CustomStepContent>{step.description}</CustomStepContent>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Box>
  );
}
export default ProfileStepper;
