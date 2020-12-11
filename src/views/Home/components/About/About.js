import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section, CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.alternate,
    backgroundSize: 'cover',
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 0),
    },
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: 470,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  section: {
    paddingTop: 0,
  },
  sectionHeader: {
    padding: theme.spacing(0, 2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      width: 'calc(100vw - 625px)',
      marginBottom: 0,
    },
  },
  textWhite: {
    color: 'white',
  },
  image: {
    alignSelf: 'flex-end',
    maxWidth: 625,
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: 'auto',
      transform: 'translateY(-50%) !important',
    },
  },
  card: {
    borderBottom: `4px solid ${theme.palette.secondary.main}`,
    '& .MuiCardContent-root': {
      padding: 30,
    },
  },
  cardTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.hero}>
        <Section className={classes.section} disablePadding>
          <div className={classes.sectionHeader}>
            <Typography variant="h6" gutterBottom color="textPrimary">
              MISSION DRIVEN
            </Typography>
            <SectionHeader
              title="Move fast and create things."
              subtitle="I’m a self-taught data engineer and former doctorate candidate with experience in economics, cloud-computing, and genomics. After paying off my undergraduate and graduate-school debt and moving up the corporate ladder, I took the entrepreneurial leap to build technology that improves the quality of life of those around me. When I'm not running Market Metrics, I'm conquering escape rooms and binge-watching Netflix with my friends and family."
              subtitleColor="textPrimary"
              align="left"
              data-aos="fade-up"
            />
            <CardBase withShadow liftUp align="left" className={classes.card}>
              <Typography className={classes.cardTitle} variant="h6">
               "I would highly recommend Nick Swekosky for your next IT, 
               or business development project. Nick is one of the most 
               talented, fast learning, entrepreneurial and highly self-motivated 
               individuals I have ever met in my life. I had the pleasure to first 
               meet Nick several years ago at a community code-a-thon, and was 
               impressed with his self-determination to learn computer science, 
               algorithms, and c++ development from MIT open courseware and other 
               free online resources, and gain exposure to large software development 
               projects from volunteering, participating and collaborating in community 
               dev events. Nick's story is truly inspiring and he would be a great asset 
               to your team."
              </Typography>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Francis Schmitz"
                    secondary="One of Nick’s Mentors and a Sr. Applications Developer @ Simplex Investments"
                  />
                </ListItem>
              </List>
            </CardBase>
          </div>
        </Section>
        <Image
          src="https://media-exp1.licdn.com/dms/image/C5603AQHVUqa9aoiycQ/profile-displayphoto-shrink_400_400/0/1531073055378?e=1613001600&v=beta&t=j5Odr5-1KoOhS71r1za_fd0Y1QpAojQ3-ft45aI58nU"
          className={classes.image}
          data-aos="fade-up"
          lazy={false}
        />
      </div>
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
