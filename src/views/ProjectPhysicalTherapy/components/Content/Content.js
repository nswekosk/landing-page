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
          <b>Accelerated Doctorate Program in Physical Therapy</b>
        </Typography>
        <Divider />
        <Typography variant="h6" gutterBottom color="textPrimary">
          <i>A 6-year accelerated doctorate program to achieve a minor degree in Psychology, a Bachelor of Science degree in Exercise Science, and a Doctorate in Physical Therapy.</i>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Role</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
        Doctorate candidate
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Website</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
          <a target="_blank" href="https://catalog.slu.edu/colleges-schools/health-sciences/physical-therapy-athletic-training/physical-therapy-program/" style={{textDecoration: "none", color: "black"}}>SLU's P.T. Home Page</a>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h6" color="textPrimary">
          <span style={{textDecoration: "underline"}}>Overview</span>
        </Typography>
        <Typography component="p" variant="h6" color="textPrimary">
        When I was 18, I accepted an academic Martin Luther King Jr. scholarship to Saint Louis University and committed to a 6-year doctorate program in physical therapy at Saint Louis University. This would include an undergraduate degree in exercise science and a required completion of a minor degree; mine was in psychology. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        Shortly after my 21st birthday, we began the graduate level courses. While I did not complete the program, I did accomplish a lot.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I was voted Class Representative to represent my class of 90+ students. In this role, I discussed and voted on program changes in the Physical Therapy Student Council. In addition, I contributed to discussions and decisions of the program advisory board.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I served as a manuscript reviewer for the Journal of Student Physical Therapy where I Appraised the writing and technical excellence of research manuscripts and evaluated the overall importance of the study with regard to physical therapy. I’m grateful for their acknowledgment.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I served as a principal investigative assistant for Dr. Mark Reinking, Dr. Tricia Austin, Dr. Jason Bennett, Dr. Ann Hayes, and Dr. William Mitchell. We discovered risk factors for the development of lower extremity overuse bone injury in athletes, as further described here.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I completed my last clinical rotation in the physical therapy clinic at the Veterans Affairs hospital in Memphis, Tennessee. In the mornings, I would shadow my mentor and eventually work semi-independently with patients with complex central nervous system injuries in an inpatient setting. In the afternoons, shadow my mentor and eventually work semi-independently with patients with patients with orthopedic injuries in an outpatient setting. My mentor taught a weekly class to veterans on how to mitigate and live with their back pain; on one occasion I taught the class on the anatomy of the spine and the role their therapeutic exercises played in mitigating that pain.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I volunteered on multiple occasions in the physical therapy clinics at both the Jefferson Barracks and John Cochran branches of the St. Louis Veterans Affairs hospital system.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I worked between 1 to 3 part-time jobs at various points of the doctorate program. As a parking garage attendant, I was essentially paid to study. As a bartender at Chuy Arzola’s, I was paid to have a social life. And as a caregiver for a gentleman with a C3 spinal cord injury, I learned firsthand how patients with complex central nervous systems conduct their activities of daily living without motor functionality in their arms or legs.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        Ultimately, I fell in love with computer science and created my own computer science education program. I began completing this program and my grades begin to decline. So I dropped out of my doctorate program, got a part time job, and began my journey towards a career in computer science.
        </Typography>
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
