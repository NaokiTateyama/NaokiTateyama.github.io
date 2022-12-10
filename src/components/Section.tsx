import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export const SECTION_TYPE = {
  SECTION: 'section',
  SUBSECTION: 'subsection'
};
type SectionType = typeof SECTION_TYPE.SECTION | typeof SECTION_TYPE.SUBSECTION;

export type Content = {
  gray?: string | JSX.Element;
  main: string | JSX.Element;
  sub?: string | JSX.Element;
};

type Props = {
  id: string;
  sectionType: SectionType;
  title: string;
  contents?: Array<Content>;
};

const Component: React.FC<Props> = ({ id, sectionType, title, contents }) => {
  return (
    <>
      {/* top ? 0 :  */}
      <Typography
        id={id}
        variant={sectionType === SECTION_TYPE.SECTION ? 'h2' : 'h3'}
        mt={4}
        mb={2}
      >
        {title}
      </Typography>
      {sectionType === SECTION_TYPE.SECTION && (
        <Divider sx={{ borderBottomWidth: 2 }} />
      )}
      {contents &&
        contents.map((content) => {
          return (
            <Box mt={2} mb={2} ml={1}>
              {content.gray && (
                <Typography color="text.disabled">{content.gray}</Typography>
              )}
              <Typography>{content.main}</Typography>
              {content.sub && <Typography>{content.sub}</Typography>}
            </Box>
          );
        })}
    </>
  );
};

Component.displayName = 'Section';

export const Section = Component;
