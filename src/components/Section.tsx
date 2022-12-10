import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Content } from 'Information';

export const SECTION_TYPE = {
  SECTION: 'section',
  SUBSECTION: 'subsection'
};
type SectionType = typeof SECTION_TYPE.SECTION | typeof SECTION_TYPE.SUBSECTION;

type Props = {
  id: string;
  sectionType: SectionType;
  title: string;
  contents?: Array<Content>;
  top?: boolean;
};

const Component: React.FC<Props> = ({
  id,
  sectionType,
  title,
  contents,
  top
}) => {
  return (
    <>
      <Typography
        id={id}
        variant={sectionType === SECTION_TYPE.SECTION ? 'h2' : 'h3'}
        mt={top ? 0 : 4}
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
              {content.date && (
                <Typography color="text.disabled">{content.date}</Typography>
              )}
              {content.ja && <Typography>{content.ja}</Typography>}
              {content.en && <Typography>{content.en}</Typography>}
            </Box>
          );
        })}
    </>
  );
};

Component.displayName = 'Section';

export const Section = Component;
