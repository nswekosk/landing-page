import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Content,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';

import { content, sidebarArticles, similarStories } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.main,
  },
}));

const BlogArticle = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Content data={content} />
          </Grid>
        </Grid>
      </Section>
      {/*<SectionAlternate className={classes.similarStoriesSection}>
        <SimilarStories data={similarStories} />
  </SectionAlternate>*/}
    </div>
  );
};

export default BlogArticle;
