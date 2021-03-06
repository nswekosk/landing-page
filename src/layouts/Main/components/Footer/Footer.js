import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: '#1b1642',
  },
  footerContainer: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  const education = pages.education;
  const engineering = pages.engineering;
  const entrepreneurship = pages.entrepreneurship;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const EducationPages = () => {
    const {
      physicaltherapy,
      engineering      
    } = education.children;
    return (
      <div className={classes.menu}>
         <div>
          <MenuGroup item={physicaltherapy} />
          <MenuGroup item={engineering} />
        </div>
      </div>
    );
  };
  const EngineeringPages = () => {
    const {
      healthcare,
      supplychain,
      economics,
      cloudcomputing,
      genomics
    } = engineering.children;
    return (
      <div className={classes.menu}>
         <div>
          <MenuGroup item={healthcare} />
          <MenuGroup item={supplychain} />
        </div>
        <div>
          <MenuGroup item={economics} />
          <MenuGroup item={genomics} />
          <MenuGroup item={cloudcomputing} />
        </div>
      </div>
    );
  };
  const EntrepreneurshipPages = () => {
    const {
      entertainment,
      marketing
    } = entrepreneurship.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={marketing} />
          <MenuGroup item={entertainment} />
        </div>
      </div>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              {/*<ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="thefront">
                    <Image
                      className={classes.logoImage}
                      src="/images/logos/logo-negative.svg"
                      alt="thefront"
                      lazy={false}
                    />
                  </a>
                </div>
  </ListItem>*/}
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon} href="https://www.linkedin.com/in/%F0%9F%93%88-nick-swekosky-4090155b/">
                  <LinkedInIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon} href="https://twitter.com/NickSwekosky">
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon} href="https://github.com/nswekosk/">
                  <GitHubIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
             {/*} <Grid item className={classes.listItem}>
                <EducationPages />
              </Grid>
              <Grid item className={classes.listItem}>
                <EngineeringPages />
              </Grid>
              <Grid item className={classes.listItem}>
                <EntrepreneurshipPages />
              </Grid>*/}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
