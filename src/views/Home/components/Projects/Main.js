import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4)
  },
  folioItem: {
    position: 'relative',
    overflow: 'hidden',
    margin: theme.spacing(1, 0),
    boxShadow: `0 1.5rem 4rem rgba(22,28,45,.05)`,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
    },
    '&:last-child': {
      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
      },
    },
  },
  image: {
    objectFit: 'cover',
    height: 450,
  },
  folioInfoWrapper: {
    padding: theme.spacing(4, 2),
  },
  folioTitle: {
    fontWeight: 'bold',
  },
  folioSubtitle: {
    margin: theme.spacing(1, 0),
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 500,
      margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      maxWidth: '100%',
    },
  },
  gridWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Main = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const leftGridData = data.slice(0, 4);
  const centerGridData = data.slice(4, 8);
  const rightGridData = data.slice(8);
  const wrapper = [data];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        label=""
        title="Project Experience"
        align="left"
      />
      <div className={classes.grid}>
        {wrapper.map((column, i) => (
          <div className={classes.gridWrapper} key={i}>
            {column.map((item, index) => (
              <div className={classes.folioItem} key={index}>
                <Image
                  src={item.cover}
                  alt={item.title}
                  className={clsx('folio__image', classes.image)}
                  lazy={false}
                />
                <div
                  className={clsx(
                    'folio__info-wrapper',
                    classes.folioInfoWrapper,
                  )}
                >
                  <div className={classes.folioInfo}>
                    <Typography
                      variant="h5"
                      className={classes.folioTitle}
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.folioSubtitle}
                      color="textSecondary"
                      style={{marginBottom: "2em"}}
                    >
                      {item.subtitle}
                    </Typography>
                    <Button
                      size="large"
                      variant="contained"
                      type="submit"
                      color="primary"
                      href={`${item.link}?utm_source=front_page`}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
