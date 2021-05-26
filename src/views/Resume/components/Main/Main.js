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
                Summary
              </Typography>
            </li>
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
                Research Experience
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
            <b>Summary</b>
          </Typography>
          <Divider />
          <Typography variant="h6" gutterBottom color="textPrimary">
          I have been building web, mobile, and API-driven products as a Product Manager or Engineer for over six years. Most recently, I created Market Metrics which I took from an idea to a revenue-generating product. I am an expert in product, marketing, operations, and agile and waterfall mobile and web development. I am a highly organized team-player who can fill any role as a generalist and can dive deep to formulate innovative solutions to specific challenges. I am a self-taught engineer with graduate school experience.
          </Typography>
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
            <b><a target="_blank" href="https://marketmetrics.io/" style={{textDecoration: "underline", color: "black"}}>Market Metrics</a>, CEO and Founder</b> [January 2020 to March 2021]
          </Typography>
          <Typography variant="h6" gutterBottom color="textPrimary">
                <i>A SaaS-based web application that enables marketing agencies to reduce the time spent doing non-billable work.</i>
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Owned the product strategy, roadmap, feature definition, go-to-market, and sales.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Built a sales force to grow acquisitions, revenue, and retention using Zoom, Slack, and HubSpot.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Led brainstorming sessions with prospective users to define business objectives and specifications.
             </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Grew referrals by sourcing for 14 reporters and publishing content on our company sub-Reddit.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Implemented code in GoLang and React.js and made deployments using Google Cloud Platform.
              </Typography>
            </li>
          </ul>
          <Typography variant="h6" gutterBottom color="textPrimary">
                <b><a target="_blank" href="/market-metrics" style={{textDecoration: "underline"}}>Learn More About Market Metrics</a></b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Eventy, CEO and Founder</b> [August 2018 to January 2020]
          </Typography>
          <Typography variant="h6" gutterBottom color="textPrimary">
              <i>A marketplace, known as 'Tinder for Events' that connects people through entertainment events using mobile and web applications.</i>
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Acquired 2.6K+ WAU by social media marketing and partnering with the St. Louis Department of Tourism.
              </Typography>
            </li>  
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Created a global geolocation algorithm and data pipeline to source with 198K entertainment events.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Implemented web and mobile apps in ReactNative, GoLang, React, and Google Cloud Platform.
              </Typography>
            </li>          
          </ul>
          <Typography variant="h6" gutterBottom color="textPrimary">
                <b><a target="_blank" href="/eventy" style={{textDecoration: "underline"}}>Learn More About Eventy</a></b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Bayer Crop Sciences, Data Engineer</b> [November 2017 to February 2019]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Architected a pedigree classification algorithm by analyzing 60K variations of corn germplasm.
              </Typography>
            </li> 
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Built a service to facilitate imputation to Google Kubernetes Engine clusters of up to 5K nodes.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Implemented data science logic, data pipelines, and HTTP and gRPC APIs in GoLang.
              </Typography>
            </li>       
          </ul>
          <Typography variant="h6" gutterBottom color="textPrimary">
                <b><a target="_blank" href="/diversity-coefficient" style={{textDecoration: "underline"}}>Learn More About The Diversity Coefficient Service</a></b>
          </Typography>
          <Typography variant="h6" gutterBottom color="textPrimary">
                <b><a target="_blank" href="/imputation" style={{textDecoration: "underline"}}>Learn More About The Pedigree Imputation Service</a></b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b><a target="_blank" href="http://status.ctl.io/" style={{textDecoration: "underline", color: "black"}}>CenturyLink Cloud</a>, Promoted From Software Developer To Senior Software Developer</b> [February 2016 – October 2017]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Built APIs, middleware, notification pipeline, and logic to scale for 10K+ users.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Designed and built Chrome Extension to increase engagement to the cloud platform status page.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Collaborated with the UI/UX team to build 2 web apps in GoLang, JavaScript, and Google Cloud.
              </Typography>
            </li>
          </ul>
          <Typography variant="h6" gutterBottom color="textPrimary">
            <b><a target="_blank" href="/ctl-status" style={{textDecoration: "underline"}}>Learn More About CenturyLink Cloud Status</a></b>
          </Typography>
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
          <Typography variant="h6" gutterBottom color="textPrimary">
            <b><a target="_blank" href="/physical-therapy" style={{textDecoration: "underline"}}>Learn More About My Doctorate Candidacy</a></b>
          </Typography>
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
          <Typography variant="h6" gutterBottom color="textPrimary">
            <b><a target="_blank" href="/computer-science" style={{textDecoration: "underline"}}>Learn More About My Computer Science Education Program</a></b>
          </Typography>
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
          <Typography variant="h6" gutterBottom color="textPrimary">
            <b><a target="_blank" href="/fred" style={{textDecoration: "underline"}}>Learn More About The Federal Reserve Open-Source Toolkit</a></b>
          </Typography>
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
          <Typography variant="h6" gutterBottom color="textPrimary">
            <b><a target="_blank" href="/cryptosearch" style={{textDecoration: "underline"}}>Learn More About CryptoSearch</a></b>
          </Typography>
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
