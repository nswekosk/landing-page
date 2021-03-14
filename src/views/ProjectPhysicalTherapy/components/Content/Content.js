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
        When I was 18, I accepted the Martin Luther King Jr. academic scholarship and committed to an accelerated 6-year doctorate program in physical therapy at Saint Louis University. I would complete my Bachelor of Science degree in Exercise Science with a Minor degree in Psychology. While I would not complete the entire graduate program, I would ultimately accomplish a lot.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I was voted Class Representative to represent my class of 90+ students. In this role, I discussed and voted on program changes in the Physical Therapy Student Council. In addition, I contributed to discussions and decisions of the program advisory board.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I served as a manuscript reviewer for the Journal of Student Physical Therapy where I appraised the writing and technical excellence of research manuscripts and evaluated the overall importance of physical therapy studies. I’m grateful for their <a target="_blank" href="https://blogs.elon.edu/jsptr/acknowledgments/" style={{textDecoration: "underline"}}>acknowledgement</a>.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I served as a principal investigative assistant for Dr. Mark Reinking, Dr. Tricia Austin, Dr. Jason Bennett, Dr. Ann Hayes, and Dr. William Mitchell. We discovered risk factors for the development of lower extremity overuse bone injury in athletes, as further described <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4387723/" style={{textDecoration: "underline"}}>here</a>.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I completed my last clinical rotation in the physical therapy clinic at the Veterans Affairs Medical Center in Memphis, Tennessee. In the mornings, I would shadow my mentor and eventually work semi-independently with patients with complex central nervous system injuries in an inpatient setting. In the afternoons, I would shadow my mentor and eventually work semi-independently with patients with orthopedic injuries in an outpatient setting. My mentor taught a weekly class to veterans on how to mitigate their back pain through therapy and in their activities of daily living; on one occasion I taught the class on the anatomy of the spine and the role of therapeutic exercises in the progress of treatment.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        During my summer and spring vacation periods, I volunteered in the physical therapy clinics at both the Jefferson Barracks and John Cochran branches of the St. Louis Veterans Affairs hospital system.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        Ultimately, my passion for computer science overshadowed my interest in physical therapy. So I created my own <a target="_blank" href="/computer-science" style={{textDecoration: "underline"}}>computer science education program</a>, left the physical therapy program, and took steps towards my ensuing software engineering career.
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
