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
          <b>CryptoSearch</b>
        </Typography>
        <Divider />
        <Typography variant="h6" gutterBottom color="textPrimary">
          <i>A search engine of crypto projects based on market research of 6,689 projects.</i>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Role</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
        Builder and maintainer
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Website</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
          <a target="_blank" href="https://cryptosearch.info/" style={{textDecoration: "none", color: "black"}}>https://cryptosearch.info</a>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography component="p" variant="h6" color="textPrimary">
          <span style={{textDecoration: "underline"}}>Overview</span>
        </Typography>
        <Typography component="p" variant="h6" color="textPrimary">
          In December of 2020, I began seeking opportunities for entrepreneurship ventures in the crypto industry. I completed all videos and recommended readings provided by Andreeson-Horowitz’s Startup School and began reading 3rd-party reports provided by Messari, The Block, and other media or research-based organizations. These reports can be up to 150 pages long and reference many projects, none of which I had context. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
          So I conducted market research on 6,689 crypto projects to define their function, project-type classification, blockchain ecosystem, outreach channels, and financial performance if available to the public. In order to make it easier to evaluate these projects, I built a search engine for crypto assets based on these projects and uniquely validated each one to be active and up to date. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
          A user can search anything and find a relevant result or they can click on an industry sector tag or blockchain ecosystem tag to augment their search. Each entity has:
        </Typography>
        <ul style={{marginLeft: "2em"}}>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
              A name
            </Typography>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
              An industry tag
            </Typography>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
              A brief description
            </Typography>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
            A blockchain ecosystem classification
            </Typography>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
              Links to their:
            </Typography>
            <ul style={{marginLeft: "3em"}}>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                  Website
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Whitepaper
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Messari profile
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Twitter-related content
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                subReddit-related content
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Github open-source code repository
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Medium blog for outreach content
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Coindesk profile for industry related news
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                CoinMarketCap profile financial performance reports
                </Typography>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <a target="_blank" href="https://cryptosearch.info/" style={{textDecoration: "none", color: "black"}}>
          <Image
            src='/images/photos/blog/cryptosearch.png'
            srcSet='/images/photos/blog/cryptosearch.png 2x'
            className={classes.image}
            lazyProps={{ width: '100%', height: '100%' }}
          />
        </a>
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
