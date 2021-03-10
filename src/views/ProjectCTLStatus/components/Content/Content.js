import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Typography,
  Divider
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {},
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  socialIcon: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.text.primary,
    background: colors.grey[200],
    '&:last-child': {
      marginRight: 0,
    },
  },
}));

const Content = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.section}>
        <Typography variant="h3" gutterBottom color="textPrimary">
          <b>CenturyLink Cloud Status</b>
        </Typography>
        <Divider />
        <Typography variant="h6" gutterBottom color="textPrimary">
          <i>An application that shows the scheduled maintenances and operational status for each service on CenturyLink's cloud-based platform in all available global locations.</i>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Role</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
        Senior Software Developer
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Website</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
          <a target="_blank" href="https://status.ctl.io/" style={{textDecoration: "none", color: "black"}}>https://status.ctl.io</a>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h6" color="textPrimary">
          <span style={{textDecoration: "underline"}}>Overview</span>
        </Typography>
        <Typography component="p" variant="h6" color="textPrimary">
        I co-built a web-based service that enabled CenturyLink Cloud customers and partners to evaluate the planned maintenance schedule or operational status of every product in CenturyLink’s cloud-based platform in every available location. We built a portal that enabled customer service agents to update a product’s status, schedule a planned maintenance event, and send email notifications to 10K+ recipients. In addition, we built a separate portal for customers and partners to manage their notification preferences.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        The application’s frontend was implemented in Angular.JS and the backend was built in GoLang. I collaborated with the UI/UX team to build a public-facing user interface. In addition, I initiated the team process to optimize code versioning and manage multiple remote environments on Google Cloud Platform for development, quality assurance, production, and user sandbox.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        In order to view the overall cloud platform’s operational status in real time, I designed and built a Chrome Extension indicating if a service’s operational status was impaired or if a scheduled maintenance was in progress. It can be found on the Chrome Web Store <a target="_blank" href="https://chrome.google.com/webstore/detail/centurylink-cloud-status/abhpdblgadmelnffnnfddppakgbfimmj?hl=en" style={{textDecoration: "underline"}}>here</a>.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        All work was completed while going from a team of 7 to 2 engineers and while cycling through 3 different engineering managers and 2 different product owners.
        </Typography>
      </div>
      <div className={classes.section}>
          <Image
            src='/images/photos/blog/ctl-status-1.jpg'
            srcSet='/images/photos/blog/ctl-status-1.jpg 2x'
            className={classes.image}
            lazyProps={{ width: '100%', height: '100%' }}
          />
          <Image
            src='/images/photos/blog/ctl-status-2.jpg'
            srcSet='/images/photos/blog/ctl-status-2.jpg 2x'
            className={classes.image}
            lazyProps={{ width: '100%', height: '100%' }}
          />
          <Image
            src='/images/photos/blog/ctl-status.png'
            srcSet='/images/photos/blog/ctl-status.png 2x'
            className={classes.image}
            lazyProps={{ width: '100%', height: '100%' }}
          />
      </div>
    </div>
  );
};

Content.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Content;
