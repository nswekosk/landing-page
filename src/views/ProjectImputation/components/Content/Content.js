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
          <b>Pedigree Imputation Service</b>
        </Typography>
        <Divider />
        <Typography variant="h6" gutterBottom color="textPrimary">
          <i>Analyzed 60K variations of corn germplasm and 17M related inventory operations to create a pedigree classification algorithm.</i>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Role</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
        Data Engineer
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Website</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
          N/A
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h6" color="textPrimary">
          <span style={{textDecoration: "underline"}}>Overview</span>
        </Typography>
        <Typography component="p" variant="h6" color="textPrimary">
        As a data engineer at Bayer Crop Science, I built data asset services with a focus on genomics. Our services were accessible through HTTP and gRPC-based API’s.   
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        Data assets were created by data-ingestion-pipelines or by automated jobs implementing algorithms defined by research from Bayer's data scientists. All services were deployed on Google Kubernetes Engine Clusters on Google Cloud Platform while building Helm chart templates for each service.
       </Typography>
       <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        As a member of the pedigree imputation project, I analyzed 60K variations of corn germplasm to create a pedigree classification algorithm. I then turned that algorithm into a service to submit pedigrees to an imputation service that ultimately scaled up to Google Kubernetes Engine Cluster of at most 5K nodes. This required completing biweekly engineering sprints while collaborating with data scientists to create solutions to optimize Bayer’s global breeding research efforts. 
       </Typography>
       <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
       Our team was awarded internally for the achievement to complete this never-before-done project. In addition, Google Cloud Platform published a blog article describing the scale of the project; it can be found <a target="_blank" href="https://cloud.google.com/blog/products/containers-kubernetes/google-kubernetes-engine-clusters-can-have-up-to-15000-nodes?utm_source=nickswekosky.com" style={{textDecoration: "underline"}}>here</a>.
       </Typography>
       <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
       Furthermore, I initialized the documentation process to streamline the onboarding process for the engineering team.
       </Typography>
      </div>
      <div className={classes.section}>
        <a target="_blank" href="https://cloud.google.com/blog/products/containers-kubernetes/google-kubernetes-engine-clusters-can-have-up-to-15000-nodes?utm_source=nickswekosky.com" style={{textDecoration: "underline"}}>
          <Image
            src='/images/photos/blog/galaxy.png'
            srcSet='/images/photos/blog/galaxy.png 2x'
            className={classes.image}
            lazyProps={{ width: '50%', height: '50%' }}
          />
        </a>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        Photo Credit: <a target="_blank" href="https://twitter.com/timwilliate" style={{textDecoration: "underline"}}>Tim Williamson</a>
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
