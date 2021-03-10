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
          <b>Eventy</b>
        </Typography>
        <Divider />
        <Typography variant="h6" gutterBottom color="textPrimary">
          <i>A marketplace that connects people through entertainment events. Also known as "Tinder for Events".</i>
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
          <a target="_blank" href="http://eventy.events/" style={{textDecoration: "none", color: "black"}}>http://eventy.events/</a>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h6" color="textPrimary">
          <span style={{textDecoration: "underline"}}>Overview</span>
        </Typography>
        <Typography component="p" variant="h6" color="textPrimary">
        I started by building an API-based service written in GoLang that can provide some number of events provided some geographical coordinates and a radius in kilometers. I built data pipelines to supply 197K+ events from Eventbrite to supply this backend algorithm.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        Then I built iOS and Android mobile apps using React Native to enable users to swipe events they like/dislike and provide more personalized recommendations of local events.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I grew the user base to at most 2.6K weekly active users. I acquired users by promoting weekly events on social media, partnering with the St. Louis Department of Tourism, and joining the OneSTL business network to facilitate the St. Louis region’s sustainability efforts with community engagement events.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        In order to reduce reliance on Eventbrite as my sole supplier of event data, I created a web app for marketing professionals to publish events for free, advertise events, and purchase subscriptions to create their KPIs, charts, and dashboards in seconds by pushing a button. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        When Eventbrite closed public access to their data source of events, I shut down the mobile apps and rebranded the web app to Market Metrics.
        </Typography>
      </div>
      <div className={classes.section}>
          <Image
            src='/images/photos/blog/eventy/6_swiped_event.png'
            srcSet='/images/photos/blog/eventy/6_swiped_event.png 2x'
            className={classes.image}
            lazyProps={{ width: '33%', height: '33%' }}
          />
          <Image
            src='/images/photos/blog/eventy/5_event_detail.png'
            srcSet='/images/photos/blog/eventy/5_event_detail.png 2x'
            className={classes.image}
            lazyProps={{ width: '33%', height: '33%' }}
          />
          <Image
            src='/images/photos/blog/eventy/1_profile_section.png'
            srcSet='/images/photos/blog/eventy/1_profile_section.png 2x'
            className={classes.image}
            lazyProps={{ width: '33%', height: '33%' }}
          />
          <Image
            src='/images/photos/blog/eventy/2_featured_events.png'
            srcSet='/images/photos/blog/eventy/2_featured_events.png 2x'
            className={classes.image}
            lazyProps={{ width: '33%', height: '33%' }}
          />
          <Image
            src='/images/photos/blog/eventy/3_friend_user.png'
            srcSet='/images/photos/blog/eventy/3_friend_user.png 2x'
            className={classes.image}
            lazyProps={{ width: '33%', height: '33%' }}
          />
          <Image
            src='/images/photos/blog/eventy/4_event_creators.png'
            srcSet='/images/photos/blog/eventy/4_event_creators.png 2x'
            className={classes.image}
            lazyProps={{ width: '33%', height: '33%' }}
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
