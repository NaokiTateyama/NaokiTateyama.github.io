import React, { FC, ReactNode } from 'react';
import { information } from '../Information';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

function Profile(){
  return (
    <Box>
      <Typography id='education' variant='h2' mt={4} mb={4}>Education</Typography>
      {information.education.map((education, i)=>{
        return (
          <ItemEdu key={`edu-${i}`} education={education}/>
        )
      })}
      
      <Typography id='job-experience' variant='h2' mt={4} mb={4}>Job experience</Typography>
      {information.jobs.map((job, i)=>{
        return (
          <ItemJob key={`job-${i}`} job={job}/>
        )
      })}

      <Typography id='publications' variant='h2' mt={4} mb={4}>Publications</Typography>
      <Typography id='journal' variant='h3' mt={4} mb={4}>学術雑誌 / Journal article</Typography>
      {information.publications.journal.map((publication, i)=>{
        return (
          <ItemPub key={`journal-${i}`} publication={publication}/>
        )
      })}
      <Typography id='int-conf' variant='h3' mt={4} mb={4}>国際会議 / International conference</Typography>
      {information.publications.int_conf.map((publication, i)=>{
        return (
          <ItemPub key={`int-${i}`} publication={publication}/>
        )
      })}
      <Typography id='dom-conf' variant='h3' mt={4} mb={4}>国内会議 / Domestic conference</Typography>
      {information.publications.dom_conf.map((publication, i)=>{
        return (
          <ItemPub key={`dom-${i}`} publication={publication}/>
        )
      })}

      <Typography id='skills' variant='h2' mt={4} mb={4}>Skills</Typography>
      <Typography id='programming' variant='h3' mt={4} mb={4}>Programming</Typography>
      <ItemProg programming={information.skills.programming}/>
      <Typography id='certificates' variant='h3' mt={4} mb={4}>Certificates</Typography>
      {information.skills.certificates.map((certificate, i)=>{
        return (
          <ItemCert key={`cert-${i}`} certificate={certificate}/>
        )
      })}
    </Box>
  )
}
export default Profile

type PropsEdu = {
  education: {
    date: string | ReactNode,
    ja: string | ReactNode,
    en: string | ReactNode
  }
};

type PropsJob = {
  job: {
    date: string | ReactNode,
    ja: string | ReactNode,
    en: string | ReactNode
  }
}

type PropsPub = {
  publication: string | ReactNode
}

type PropsProg = {
  programming: {
    language: string[],
    framework: string[]
  }
}

type PropsCert = {
  certificate: {
    ja: string | ReactNode,
    en: string | ReactNode
  }
}

const ItemEdu: FC<PropsEdu> = (props: PropsEdu) => {
  return (
    <Box mt={2} mb={2} ml={1}>
      <Typography color={grey[700]}>{props.education.date}</Typography>
      <Typography>{props.education.ja}</Typography>
      <Typography>{props.education.en}</Typography>
    </Box>
  )
};

const ItemJob: FC<PropsJob> = (props: PropsJob) => {
  return (
    <Box mt={2} mb={2} ml={1}>
      <Typography color={grey[700]}>{props.job.date}</Typography>
      <Typography>{props.job.ja}</Typography>
      <Typography>{props.job.en}</Typography>
    </Box>
  )
};

const ItemPub: FC<PropsPub> = (props: PropsPub) => {
  return (
    <Box mt={2} mb={2} ml={1}>
      <Typography>{props.publication}</Typography>
    </Box>
  )
};

const ItemProg: FC<PropsProg> = (props: PropsProg) => {
  return (
    <>
      <Box mt={2} mb={2} ml={1}>
        <Typography>{<b>Languages: </b>}{props.programming.language.join(', ')}</Typography>
      </Box>
      <Box mt={2} mb={2} ml={1}>
        <Typography>{<b>Framework: </b>}{props.programming.framework.join(', ')}</Typography>
      </Box>
    </>
  )
}

const ItemCert: FC<PropsCert> = (props: PropsCert) => {
  return (
    <Box mt={2} mb={2} ml={1}>
      <Typography>{props.certificate.ja}</Typography>
      <Typography>{props.certificate.en}</Typography>
    </Box>
  )
};