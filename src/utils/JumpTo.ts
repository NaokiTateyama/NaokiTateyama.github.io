export const ID = {
  ABOUT: 'about',
  JOB_EXPERIENCE: 'job-experience',
  EDUCATION: 'education',
  PUBLICATIONS: 'publications',
  JOURNAL: 'journal',
  INT_CONF: 'int-conf',
  DOM_CONF: 'dom-conf',
  SKILLS: 'skills',
  PROGRAMMING: 'programming',
  CERTIFICATES: 'certificates'
};
export function jumpTo(id: string){
  let target = document.getElementById(id);
  if (target !== null){
    target.scrollIntoView({behavior: 'smooth'});
  }
};