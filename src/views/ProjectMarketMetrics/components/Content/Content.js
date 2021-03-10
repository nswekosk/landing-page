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
          <b>Market Metrics</b>
        </Typography>
        <Divider />
        <Typography variant="h6" gutterBottom color="textPrimary">
          <i>A Software-as-a-Service tool to enable marketing agencies to reduce the time spent doing non-billable work.</i>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Role</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
        CEO and Founder
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Website</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
          <a target="_blank" href="https://marketmetrics.io/" style={{textDecoration: "none", color: "black"}}>https://marketmetrics.io</a>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h6" color="textPrimary">
          <span style={{textDecoration: "underline"}}>Overview</span>
        </Typography>
        <Typography component="p" variant="h6" color="textPrimary">
          When Eventbrite closed public access to their event data, I pivoted <a target="_blank" href="/eventy" style={{textDecoration: "underline"}}>Eventy</a>’s web app into Market Metrics.
         </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
          Market Metrics is a software-as-a-service tool to enable marketing agencies to reduce the time spent doing non-billable work. 
          My solution was to build automation to create KPIs, charts, and dashboards in seconds by pushing a button.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I validated the business case and defined the product roadmap by completing 150+ prospective-user interviews over Zoom.
          To facilitate customer acquisitions, I made 30+ cold calls per day, completed demos and customer interviews over Zoom, posted content daily on social media. 
          To increase revenue, I sold monthly and annual subscriptions generating $1K+ in revenue.
          After product launch, I grew customer referrals by 30.2% over 3 months by serving as a source for 14 published media articles. 
          To augment customer retention and activation, I built and moderated a Slack workspace and a subReddit and published a monthly email newsletter.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
          I built all features based on customer feedback in GoLang, React.js, and Google Cloud Platform.
        </Typography>
      </div>
      <div className={classes.section}>
        <Image
          src='/images/photos/blog/view-dashboards.gif'
          srcSet='/images/photos/blog/view-dashboards.gif 2x'
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
