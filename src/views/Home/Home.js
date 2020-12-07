import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { About, Articles, Main, Hero } from './components';
import { folio, articles } from './data';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Hero />
      </Section>
      <About />
      <SectionAlternate>
        <Main data={folio} />
      </SectionAlternate>
      <SectionAlternate>
        <Articles data={articles} />
      </SectionAlternate>
    </div>
  );
};

export default Home;
