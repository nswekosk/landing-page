import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    height: 'auto',
    '& .card-base__content': {
      padding: 0,
      height: 'auto',
    },
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderTop: `1px solid ${colors.grey[50]}`,
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Pages = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Secondary Pages"
        subtitle="These are the supporting pages to supplement the main landings."
        align="left"
      />
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
            <a href={item.href} title={item.title}>
              <CardBase withShadow liftUp className={classes.cardBase}>
                <Image src={item.cover} alt={item.title} />
                <div className={classes.linkContainer}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.title}
                  >
                    {item.title}
                  </Typography>
                  <ChevronRightIcon />
                </div>
              </CardBase>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Pages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Pages;
