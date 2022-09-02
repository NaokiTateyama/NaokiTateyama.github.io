import React, { FC, ReactNode } from 'react';
import { information } from '../Information';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function Profile(){
  return (
    <Box>
      <H2 id='job-experience' title={'Job experience'}/>
      <Divider sx={{ borderBottomWidth: 2 }}/>
      {information.jobs.map((job, i)=>{
        return (
          <ItemJob key={`job-${i}`} job={job}/>
        )
      })}

      <H2 id='education' title={'Education'}/>
      <Divider sx={{ borderBottomWidth: 2 }}/>
      {information.education.map((education, i)=>{
        return (
          <ItemEdu key={`edu-${i}`} education={education}/>
        )
      })}

      <H2 id='publications' title={'Publications'}/>
      <Divider sx={{ borderBottomWidth: 2 }}/>
      <H3 id='journal' title={'学術雑誌 / Journal article'}/>
      {information.publications.journal.map((publication, i)=>{
        return (
          <ItemPub key={`journal-${i}`} publication={publication}/>
        )
      })}
      <H3 id='int-conf' title={'国際会議 / International conference'}/>
      {information.publications.int_conf.map((publication, i)=>{
        return (
          <ItemPub key={`int-${i}`} publication={publication}/>
        )
      })}
      <H3 id='dom-conf' title={'国内会議 / Domestic conference'}/>
      {information.publications.dom_conf.map((publication, i)=>{
        return (
          <ItemPub key={`dom-${i}`} publication={publication}/>
        )
      })}

      <H2 id='skills' title={'Skills'}/>
      <Divider sx={{ borderBottomWidth: 2 }}/>
      <H3 id='programming' title={'Programming'}/>
      <ItemProg programming={information.skills.programming}/>
      <H3 id='certificates' title={'Certificates'}/>
      {information.skills.certificates.map((certificate, i)=>{
        return (
          <ItemCert key={`cert-${i}`} certificate={certificate}/>
        )
      })}
    </Box>
  )
}
export default Profile

type PropsMidashi = {
  id: string,
  title: string
}

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

const H2: FC<PropsMidashi> = (props: PropsMidashi) => {
  return (
    <Typography id={props.id} variant='h2' mt={4} mb={2}>{props.title}</Typography>
  )
}

const H3: FC<PropsMidashi> = (props: PropsMidashi) => {
  return (
    <Typography id={props.id} variant='h3' mt={4} mb={4}>{props.title}</Typography>
  )
}

const ItemEdu: FC<PropsEdu> = (props: PropsEdu) => {
  return (
    <Box mt={2} mb={2} ml={1}>
      <Typography color='text.disabled'>{props.education.date}</Typography>
      <Typography>{props.education.ja}</Typography>
      <Typography>{props.education.en}</Typography>
    </Box>
  )
};

const ItemJob: FC<PropsJob> = (props: PropsJob) => {
  return (
    <Box mt={2} mb={2} ml={1}>
      <Typography color='text.disabled'>{props.job.date}</Typography>
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