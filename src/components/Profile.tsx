import Box from '@mui/material/Box';
import { BIO_ORDER } from './../Information';
import { SECTION_TYPE, Section } from './Section';

function Profile() {
  return (
    <Box>
      {BIO_ORDER.map((bio, i) => {
        return (
          <Box key={`section-${bio.id}`}>
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
          </Box>
        );
      })}
    </Box>
  );
}
export default Profile;
