import React from 'react';
import Box from '@mui/material/Box';
import { Section, SECTION_TYPE } from './Section';
import { BIO_ORDER } from './../Information';

function Profile() {
  return (
    <Box>
      {BIO_ORDER.map((bio, i) => {
        return (
          <div key={`section-${bio.id}`}>
            <Section
              id={bio.id}
              sectionType={SECTION_TYPE.SECTION}
              title={bio.title}
              contents={bio.contents}
              top={i === 0}
            />
            {bio.children &&
              bio.children.map((child) => {
                return (
                  <Section
                    key={`subsection-${child.id}`}
                    id={child.id}
                    sectionType={SECTION_TYPE.SUBSECTION}
                    title={child.title}
                    contents={child.contents}
                  />
                );
              })}
          </div>
        );
      })}
    </Box>
  );
}
export default Profile;
