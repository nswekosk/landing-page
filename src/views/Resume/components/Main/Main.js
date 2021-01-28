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
                Education
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Work Experience
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Research Experience
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Open-Source & Side Projects
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Fellowships & Activities
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
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Wall Street Prep’s 6-Course Financial Modeling Program </b>
          </Typography>
          <ul style={{marginLeft: "2em"}}>            
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Duration: [Began December 7th, 2020; 91% Complete]
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color="textPrimary">
            <b>Work Experience</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b><a target="_blank" href="https://marketmetrics.io/" style={{textDecoration: "underline", color: "black"}}>Market Metrics</a>, CEO and Founder</b> [January 2020 to present]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Created a Software-as-a-Service tool that enables marketing agencies to reduce the time spent doing non-billable work by creating their client’s KPI’s, dashboards, and charts in seconds by clicking a button.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Completed 150+ Zoom interviews and 1500+ cold calls, emails, and LinkedIn messages to do market research on how marketing professionals do reporting and analysis.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Managed onboarding, retention, and revenue growth while moderating a Slack community & Mailchimp newsletter.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Served as a source for 12 journalists seeking consultation for article topics in marketing.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
              Implemented the frontend and backend code in GoLang, React.js, and Google Cloud Platform.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>Eventy, CEO and Founder</b> [August 2018 to January 2020]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Created and supported a marketplace of at most 2,589 weekly active users that connected people through entertainment events.
              </Typography>
            </li>  
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Built a data pipeline from Eventbrite to source iOS, Android, and web applications with 197,667 U.S.-based events using GoLang, ReactNative, React, and Google Cloud Platform.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Published a daily list of St. Louis-based entertainment events on Instagram, Facebook, and Twitter to grow a wait list for our mobile applications.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Nourished relationships with the top drivers of economic growth in the St. Louis tourism industry by partnering with the St. Louis Department of Tourism and the East-West Gateway Foundation with the goal of replacing the data pipeline with local marketing teams.
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
                Genomics Team, Core Contributor
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Conducted data analysis on 60,000+ variations of corn germplasm and built a service to submit the data for pedigree imputation to 5,000-node Google Kubernetes Engine clusters. [<a target="_blank" href="https://cloud.google.com/blog/products/containers-kubernetes/google-kubernetes-engine-clusters-can-have-up-to-15000-nodes" style={{textDecoration: "underline", color: "black"}}>article</a>]
              </Typography>
            </li> 
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Developed data pipelines, HTTP APIs, gRPC APIs, and genomics algorithms in GoLang to facilitate the company’s global breeding research efforts.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Composed Helm charts for deployments in a Google Kubernetes Engine cluster.
              </Typography>
            </li> 
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Completed code review for data scientist’s tools implemented in R and Python.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Initialized documentation to streamline the onboarding process for the engineering team.
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
                Distributed Systems ^ Application Development ^ Chrome Extension Development
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Architect, develop, and test new features for 2 applications using Go, Node.js, and Angular.js.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Provide 24/7 support to a multi-continental user base of over 10,000 on a biweekly basis.
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
                Distributed Systems ^ Application Development ^ Chrome Extension Development
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Implemented backend RESTful API’s, middleware components, scripts, notification pipeline, and business logic to scale for 10,000+ users in Go, Node.js, Bash, and Google Cloud Platform.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Collaborated with the UI/UX team to develop a public-facing user interface in Angular.js, Bootstrap, and Material Design.
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
            <b>Open-Source & Side Projects</b>
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
            <b>Fellowships & Activities</b>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            <b>GitCoin KERNEL Fellowship</b> [January 2021 - Present]
          </Typography>
          <ul style={{marginLeft: "2em"}}>
            <li>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Invited & accepted to complete the DeFi track of the KERNEL fellowship as designed by the <a target="_blank" style={{textDecoration: "underline", color: "black"}} href="https://defialliance.co/">DeFi Alliance</a> including topics on:
              </Typography>
              <ul style={{marginLeft: "3em"}}>
                <li>
                  The DeFi Landscape & Choosing an Idea 
                    <ul style={{marginLeft: "4em"}}>
                      <li>by Robert Leshner (Compound)</li>
                    </ul>
                </li>
                <li>
                  Forming a DeFi Company & Navigating the Regulatory Landscape 
                  <ul style={{marginLeft: "4em"}}>
                    <li>by Marc Boiron (Manatt)</li>
                  </ul>
                </li>
                <li>
                  Market Making and Liquidity Provision in DeFi 
                  <ul style={{marginLeft: "4em"}}>
                    <li>by Kanav Kariya (Jump Trading)</li>
                  </ul>
                </li>
                <li>
                  Token Economics, Distribution, & DAOs 
                  <ul style={{marginLeft: "4em"}}>
                    <li>by Arjun Balaji (Paradigm)</li>
                  </ul>
                </li>
                <li>
                  Fundraising in DeFi & Decentralizing Over Time 
                  <ul style={{marginLeft: "4em"}}>
                    <li>by Jake Chervisnky (Compound)</li>
                  </ul>
                </li>
                <li>
                  Smart Contracts: Auditing and Security / Parameterizing Risk in DeFi 
                  <ul style={{marginLeft: "4em"}}>
                    <li>by Quantstamp Tarun Chitra (Gauntlet Network)</li>
                  </ul>
                </li>
                <li>
                  Defining Success in DeFi: Key Growth Metrics
                  <ul style={{marginLeft: "4em"}}>
                    <li>by Jason Choi (Spartan)</li>
                    <li>by Kevin Yedid-Botton (ParaFi)</li>
                    <li>by Andrew Kang (Mechanism)</li>
                    <li>by Michael Anderson (Framework)</li>
                  </ul>
                </li>
                <li>
                  Marketing, Growth, and Building in Public
                  <ul style={{marginLeft: "4em"}}>
                    <li>by Kain Warwick (Synthetix)</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
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
