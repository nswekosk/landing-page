import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Divider } from '@material-ui/core';

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
            <b>Résumé Contents</b>
          </Typography>
          <Divider />
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Professional Experience
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Education
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Awards
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Continuing Education
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Research Experience
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Open-Source Projects
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Notable Side Projects
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Extra-Curricular Activities
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Professional Experience</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b><a target="_blank" href="https://marketmetrics.io/" style={{textDecoration: "underline", color: "black"}}>Market Metrics</a>, CEO and Founder</b> [January 2020 to February 2021]
          </Typography>
          <Typography variant="h6" gutterBottom color="textPrimary">
                <i>A Software-as-a-Service tool to enable marketing agencies to reduce the time spent doing non-billable work.</i>
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Secured 202 signups, 11 monthly and annual subscription sales, and generated $1K+ in revenue.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Validated the business use case and defined the product roadmap by doing 150+ interviews.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Acquired customers by doing 1.2K+ calls, emails, and LinkedIn private messages.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Increased referrals by 30.2% over 3 months by serving as a source for 14 reporters.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Moderated a Slack workspace, subReddit, and email newsletter to grow retention and activation.              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Implemented all code in GoLang, React.js, and Google Cloud Platform.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Eventy, CEO and Founder</b> [August 2018 to January 2020]
          </Typography>
          <Typography variant="h6" gutterBottom color="textPrimary">
              <i>A marketplace that connects people through entertainment events using mobile and web applications.</i>
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Acquired 2.6K+ weekly active users by promoting on Instagram, Facebook, and Twitter.
              </Typography>
            </li>  
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Onboarded 7 businesses through partnerships, including the St. Louis Department of Tourism.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Built a data pipeline to source geolocation algorithms with 198K+ events.
              </Typography>
            </li> 
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Implemented web and mobile apps in GoLang, ReactNative, React, and Google Cloud Platform.
              </Typography>
            </li>         
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Bayer Crop Sciences, Data Engineer</b> [November 2017 to February 2019]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Analyzed 60K variations of corn germplasm to create a pedigree classification algorithm.
              </Typography>
            </li> 
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Built service to facilitate imputation to Google Kubernetes Engine clusters with up to 5K nodes.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Created service to define seed diversity sold in any market given a line item and breeding year.
              </Typography>
            </li>  
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Coded data science logic, data pipelines, HTTP and gRPC APIs, and Helm charts in GoLang.
              </Typography>
            </li>  
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Initialized documentation process to streamline the onboarding process for the engineering team.
              </Typography>
            </li>        
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b><a target="_blank" href="http://status.ctl.io/" style={{textDecoration: "underline", color: "black"}}>CenturyLink Cloud</a>, Senior Software Developer</b> [May 2017 – October 2017]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Designed and built Chrome Extension to increase engagement to the cloud platform status page.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Architected, developed, and tested new features for 2 applications using GoLang and Javascript.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Provided 24/7 support to a multi-continental user base of over 10k+ on a biweekly basis.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b><a target="_blank" href="http://status.ctl.io/" style={{textDecoration: "underline", color: "black"}}>CenturyLink Cloud</a>, Software Developer</b> [February 2016 – May 2017]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Built APIs, middleware, scripts, notification pipeline, and business logic to scale for 10K+ users.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Collaborated with the UI/UX team to build public-facing a user interface.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Coded frontend and backend in GoLang, Node.js, AngularJS, and Google Cloud Platform.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Initiated team process to optimize code versioning.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b><a target="_blank" href="https://www.bjc.org/" style={{textDecoration: "underline", color: "black"}}>BJC Healthcare</a>, Healthcare Informaticist</b> [June 2015 - February 2016]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Collaborated with the clinical and informatics team to build applications that provide clinical decision support for physicians and nurses leveraging Java and SQL.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b><a target="_blank" href="https://www.infopluscommerce.com/" style={{textDecoration: "underline", color: "black"}}>Infoplus Commerce</a>, Junior Software Engineer</b> [December 2014 - May 2015]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Implemented supply chain management business logic in Java, SQL, Swift with a MySQL & Informix database management system.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Education</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Saint Louis University</b>
          </Typography>
          <ul style={{marginLeft: "2em"}}>   
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Duration: [August 2008 – May 2014]
              </Typography>
            </li>         
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                <b>Doctorate in Physical Therapy</b> [2012 - 2014]; did not complete due to pursuing my passion for computer science.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                <b>Bachelor’s Degree</b>, Exercise Science [2008-2012]
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Awards</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b><a target="_blank" href="https://www.notion.so/What-is-KERNEL-b9520eb29d954f5fb709150cae3975b1" style={{textDecoration: "underline", color: "black"}}>KERNEL Fellowship by Gitcoin and the DeFi Alliance</a></b> [January 2021]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Chosen as 1 of 50 out of 3,000+ applicants to complete a decentralized finance curriculum with industry experts as mentors.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Achievement Award at Bayer Crop Sciences For Building Imputation Engine</b> [November 2018]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Built a program to format the pedigrees of 60,000+ unique maize germplasm and 17,000,000+ inventory to be imputed by Google Kubernetes Engine clusters of at most 5,000 nodes.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Continuing Education</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Wall Street Prep’s 6-Course Financial Modeling Program </b>
          </Typography>
          <ul style={{marginLeft: "2em"}}>            
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Duration: [Began December 7th, 2020; 99% Complete]
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>MIT OpenCourseWare, Stanford Engineering Everywhere, and Harvard Extension School </b>
          </Typography>
          <ul style={{marginLeft: "2em"}}>            
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Duration: [January 2014 – June 2015]
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Audited open source mathematics and computer science courses under the tutelage of <a style={{textDecoration: "underline"}} target="blank" href="https://www.linkedin.com/in/francis-s-806a6712">Francis Schmitz</a> and mentorship of <a style={{textDecoration: "underline"}} target="blank" href="https://cs.slu.edu/~scannell/">Dr. Kevin Scannell</a>
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Research Experience</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Journal of Student Physical Therapy, Manuscript Reviewer</b> [2012 - 2015]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Appraised the writing and overall importance of research manuscripts with regard to physical therapy [<a target="_blank" href="https://blogs.elon.edu/jsptr/acknowledgments/" style={{textDecoration: "underline", color: "black"}}>reference</a>].
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Saint Louis University, Principal Investigator Assistant</b> [August 2012 - December 2012]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Assisted in study which determined <b>risk factors for the development of lower extremity overuse bone injury in athletes</b>. [<a target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4387723/" style={{textDecoration: "underline", color: "black"}}>paper</a>]
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Open-Source Projects</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Federal Reserve Economic Data Go Toolkit</b> [January 2017 - Present]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Create and maintain a toolkit that enables developers and data scientists to use the programming language Go to work with the data provided by the Federal Reserve Economic Dataset.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://fred.stlouisfed.org/docs/api/fred" style={{textDecoration: "underline"}}>Application Link</a>
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://github.com/nswekosk/fred_go_toolkit" style={{textDecoration: "underline"}}>Code Repository Link</a>
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Notable Side Projects</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Crypto Search</b> [December 2020 - Present]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Conducted market research on 6,689 crypto projects to define their function, project-type classification, and blockchain ecosystem.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Build and maintain a query tool defined as ‘Google Search for Cryptocurrency/Blockchain’ to discover any crypto project given some text input.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://cryptosearch.info/" style={{textDecoration: "underline"}}>Application Link</a>
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Extra-Curricular Activities</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Y Combinator’s Startup School</b> [August 2018 - Present]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Participate in weekly online discussions to provide and receive feedback with startup founders of all industries from around the world.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Class Representative of Physical Therapy Program</b> [Spring 2011 – Fall 2012]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Discuss and vote on program changes in the Physical Therapy Student Council.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Contribute to discussions and decisions of the program advisory board.
              </Typography>
            </li>
          </ul>
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
