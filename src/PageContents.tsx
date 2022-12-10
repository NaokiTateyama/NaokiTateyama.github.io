import { ID } from 'utils/JumpTo';
import { type Content } from 'components/Section';
import { information as info } from 'Information';

type PageContent = {
  id: string;
  title: string;
  contents?: Array<Content>;
  children?: Array<PageContent>;
};

export const pageContents: Array<PageContent> = [
  {
    id: ID.ABOUT,
    title: 'About',
    contents: [
      {
        main: info.about.ja,
        sub: info.about.en
      }
    ]
  },
  {
    id: ID.JOB_EXPERIENCE,
    title: 'Job experience',
    contents: info.jobs.map((job) => {
      return {
        gray: job.date,
        main: job.ja,
        sub: job.en
      };
    })
  },
  {
    id: ID.EDUCATION,
    title: 'Education',
    contents: info.education.map((edu) => {
      return {
        gray: edu.date,
        main: edu.ja,
        sub: edu.en
      };
    })
  },
  {
    id: ID.SKILLS,
    title: 'Skills',
    children: [
      {
        id: ID.PROGRAMMING,
        title: 'Programming',
        contents: [
          {
            main: (
              <>
                <b>Languages: </b>
                {info.skills.programming.language.join(', ')}
              </>
            )
          },
          {
            main: (
              <>
                <b>Framework: </b>
                {info.skills.programming.frameworks.join(', ')}
              </>
            )
          }
        ]
      }
    ]
  },
  {
    id: ID.PUBLICATIONS,
    title: 'Publications',
    children: [
      {
        id: ID.JOURNAL,
        title: '学術雑誌 / Journal article',
        contents: info.publications.journal.map((pub) => {
          return {
            main: pub
          };
        })
      },
      {
        id: ID.INT_CONF,
        title: '国際会議 / International conference',
        contents: info.publications.journal.map((pub) => {
          return {
            main: pub
          };
        })
      },
      {
        id: ID.DOM_CONF,
        title: '国内会議 / Domestic conference',
        contents: info.publications.journal.map((pub) => {
          return {
            main: pub
          };
        })
      }
    ]
  }
];
