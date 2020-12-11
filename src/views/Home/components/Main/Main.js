import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Divider, ListItem, List } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
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
    '&:hover': {
      '& .folio__image': {
        transform: 'scale(1.2)',
      },
      '& .folio__info-wrapper': {
        transform: 'translateY(0)',
      },
    },
  },
  image: {
    transitionDuration: '.7s',
    transform: 'scale(1.0)',
    objectFit: 'cover',
  },
  folioInfoWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'white',
    padding: theme.spacing(4, 2),
    transition: 'transform .6s',
    transform: 'translateY(100%)',
    borderRadius: theme.spacing(2, 0),
  },
  folioTitle: {
    fontWeight: 'bold',
  },
  folioSubtitle: {
    textTransform: 'capitalize',
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
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            Education
          </Typography>
          <Divider />
          <Typography variant="h5" gutterBottom color="textPrimary">
            Saint Louis University
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Doctorate in Physical Therapy [2012 - 2014, Did Not Complete]
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Bachelor’s Degree, Exercise Science [2008-2012]
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            Experience
          </Typography>
          <Divider />
          <Typography variant="h5" gutterBottom color="textPrimary">
            <a target="_blank" href="https://marketmetrics.io/" style={{textDecoration: "underline", color: "black"}}>Market Metrics</a>, CEO and Founder [January 2020 to present]
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Build and sell software that enables marketing agencies to reduce the time spent doing non-billable work and businesses easily evaluate customer acquisition, activation, referrals, retention, and revenue.
              </Typography>
            </ListItem>
          </List>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Eventy, CEO and Founder [August 2018 to January 2020]
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Build and grow multi-sided marketplace that connects people through live experiences.
              </Typography>
            </ListItem>
          </List>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Bayer Crop Sciences, Data Engineer [November 2017 to February 2019]
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Genomics Team, Core Contributor
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Distributed Systems
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Contributed to the imputation service that leveraged 15,000 cores to use pedigree and ancestral genotype observations to infer the likely genotypes of each seed population [<a target="_blank" href="https://cloud.google.com/blog/products/containers-kubernetes/google-kubernetes-engine-clusters-can-have-up-to-15000-nodes" style={{textDecoration: "underline", color: "black"}}>paper</a>]
              </Typography>
            </ListItem>
          </List>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <a target="_blank" href="http://status.ctl.io/" style={{textDecoration: "underline", color: "black"}}>CenturyLink Cloud</a>, Senior Software Engineer [February 2016 - November 2017]
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Distributed Systems ^ Application Development ^ Chrome Extension Development
              </Typography>
            </ListItem>
          </List>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <a target="_blank" href="https://www.bjc.org/" style={{textDecoration: "underline", color: "black"}}>BJC Healthcare</a>, Healthcare Informaticist [June 2015 - February 2016]
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Healthcare Informatics
              </Typography>
            </ListItem>
          </List>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <a target="_blank" href="https://www.infopluscommerce.com/" style={{textDecoration: "underline", color: "black"}}>Infoplus Commerce</a>, Junior Software Engineer [ December 2014 - May 2015]
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Business Logic Implementation
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            Research
          </Typography>
          <Divider />
          <Typography variant="h5" gutterBottom color="textPrimary">
            Journal of Student Physical Therapy, Manuscript Reviewer [2012 - 2015]
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
              Appraised the writing and overall importance of research manuscripts with regard to physical therapy [<a target="_blank" href="https://blogs.elon.edu/jsptr/acknowledgments/" style={{textDecoration: "underline", color: "black"}}>reference</a>].
              </Typography>
            </ListItem>
          </List>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Saint Louis University, Principal Investigator Assistant [August 2012 - December 2012]
          </Typography>
          <List>
            <ListItem>
              <Typography variant="v6" gutterBottom color="textPrimary">
                Assisted in study which determined risk factors for the development of lower extremity overuse bone injury in athletes. [<a target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4387723/" style={{textDecoration: "underline", color: "black"}}>paper</a>]
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
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
