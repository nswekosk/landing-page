import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  playIcon: {
    width: 40,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
    },
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <span>
            <span className="text-highlighted__primary">
              We love to explore
            </span>{' '}
            new ways to engage with brands and reach
          </span>
        }
        subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions."
        ctaGroup={[
          <Button color="primary" variant="contained" size="large">
            Try for free
          </Button>,
          <Button color="secondary" variant="outlined" size="large">
            See pricings
          </Button>,
        ]}
        data-aos="fade-up"
      />
      <CardBase withShadow liftUp variant="outlined" data-aos="fade-up">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container justify="flex-end">
              <Image
                className={classes.playIcon}
                src="/images/illustrations/play-icon.svg"
                alt="Play Video"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Image
                  src="/images/illustrations/design-team.svg"
                  alt="Play Video"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
