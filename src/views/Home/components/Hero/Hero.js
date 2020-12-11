import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  typed: {
    fontWeight: 'bold',
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <>
            An all-in optimist
            <br />
            with experience in
            <br />
            <TypedText
              component="span"
              variant="h2"
              color="secondary"
              className={classes.typed}
              typedProps={{
                strings: [
                  'engineering',
                  'entrepreneurship',
                  'genomics',
                  'marketing',
                  'healthcare',
                  'economics',
                  'cloud computing',
                  'supply chain',
                  'entertainment'
                ],
                typeSpeed: 50,
                loop: true,
              }}
            />
          </>
        }
        subtitle="I’m a technology entrepreneur. I want to be known for making this world better."
        align="center"
        titleProps={{
          variant: 'h2',
          color: 'textPrimary',
        }}
        subtitleProps={{
          color: 'textPrimary',
          variant: 'h5',
        }}
        ctaGroup={[
          <Button
            size="large"
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="mailto:nick.swekosky@gmail.com"
          >
            Contact
          </Button>
        ]}
        data-aos="fade-up"
        disableGutter
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
