import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { About, Articles, Main, Hero } from './components';
import { articles } from './data';

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
      <SectionAlternate>
        <Articles data={articles} />
      </SectionAlternate>
      <About />
      <SectionAlternate>
        <Main />
      </SectionAlternate>
    </div>
  );
};

export default Home;
