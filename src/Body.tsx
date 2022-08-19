import React from "react";
import profile from './profile.json';
import { Education } from "./@types/index";

function Body(){
  return (
    <div>
      <p className="title">Education</p>
      {profile.education.map((education)=>{
        return (
          <ItemEduOrJob info={education}/>
        )
      })}
      
      <p className="title">Job experience</p>
      {profile.jobs.map((job)=>{
        return (
          <ItemEduOrJob info={job}/>
        )
      })}
      
      <p className="title">Publications</p>
      <p className="subtitle">学術雑誌 / Article</p>
      <ul>
      {profile.publications.journal.map((paper)=>{
        return (
          <ItemPub paper={paper}/>
        )
      })}
      </ul>
      
      <p className="subtitle">国際会議 / International conference</p>
      <ul>
      {profile.publications.int_conf.map((paper)=>{
        return (
          <ItemPub paper={paper}/>
        )
      })}
      </ul>
      
      <p className="subtitle">国内会議 / Domestic conference</p>
      <ul>
      {profile.publications.dom_conf.map((paper)=>{
        return (
          <ItemPub paper={paper}/>
        )
      })}
      </ul>

      <p className="title">Skills</p>
      <p className="subtitle">Programming</p>
      <div style={{textAlign: 'center'}}>
        Language: {profile.skills.programming.langage.join(', ')}
      </div>
      <div style={{textAlign: 'center'}}>
        Framework: {profile.skills.programming.framework.join(', ')}
      </div>
      <p className="subtitle">Certificates</p>
      
      <ul>
      {profile.skills.certifications.map((certification)=>{
        return (
          <ItemCert info={certification}/>
        )
      })}
      </ul>
    </div>
  )
}

export default Body

function ItemEduOrJob({info}: any){
  return (
    <div style={{marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}}>
      <div style={{color: '#a5a5a5'}}>{info.date}</div>
      <div>{info.ja}</div>
      <div>{info.en}</div>
    </div>
  )
}

function ItemPub({paper}: any){
  return (
    <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
      <div>{paper}</div>
    </div>
  )
}

function ItemCert({info}: any){
  return (
    <div style={{marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}}>
      <div>{info.ja}</div>
      <div>{info.en}</div>
    </div>
  )
}