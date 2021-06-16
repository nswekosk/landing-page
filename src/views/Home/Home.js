import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { About, Articles, Main, Hero, Signup, Projects } from './components';
import { articles, folio } from './data';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <About />
      <Projects data={folio} />
      <SectionAlternate>
        <Articles data={articles} />
      </SectionAlternate>
      <SectionAlternate>
        <Signup />
      </SectionAlternate>
    </div>
  );
};

export default Home;
