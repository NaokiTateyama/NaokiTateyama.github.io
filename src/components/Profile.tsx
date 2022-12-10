import React from 'react';
import Box from '@mui/material/Box';
import { Section, SECTION_TYPE } from './Section';
import { pageContents } from 'PageContents';

function Profile() {
  return (
    <Box>
      {pageContents.map((pageContent) => {
        return (
          <>
            <Section
              id={pageContent.id}
              sectionType={SECTION_TYPE.SECTION}
              title={pageContent.title}
              contents={pageContent.contents}
            />
            {pageContent.children &&
              pageContent.children.map((childContent) => {
                return (
                  <Section
                    id={childContent.id}
                    sectionType={SECTION_TYPE.SUBSECTION}
                    title={childContent.title}
                    contents={childContent.contents}
                  />
                );
              })}
          </>
        );
      })}
    </Box>
  );
}
export default Profile;
