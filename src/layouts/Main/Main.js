import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    pages: {
      title: 'Projects',
      id: 'supported-pages',
      children: {
        healthcare: {
          groupTitle: 'Healthcare',
          pages: [
            {
              title: 'Infection Prevention',
              href: '/career-listing-minimal',
            },
            {
              title: 'Doctorate Candidate',
              href: '/career-listing',
            }
          ],
        },
        supplychain: {
          groupTitle: 'Supply Chain',
          pages: [
            {
              title: 'Infoplus Commerce',
              href: '/career-listing',
            }
          ],
        },
        economics: {
          groupTitle: 'Economics',
          pages: [
            {
              title: 'Federal Reserve Economic Dataset',
              href: '/career-listing',
            }
          ],
        },
        cloudcomputing: {
          groupTitle: 'Cloud Computing',
          pages: [
            {
              title: 'CenturyLink Status',
              href: '/career-listing',
            }
          ],
        },
        genomics: {
          groupTitle: 'Genomics',
          pages: [
            {
              title: 'Pedigree Imputation',
              href: '/career-listing',
            },
            {
              title: 'Breeding Diversity',
              href: '/career-listing',
            }
          ],
        },
        entertainment: {
          groupTitle: 'Entertainment',
          pages: [
            {
              title: 'Eventy',
              href: '/career-listing',
            }
          ],
        },
        marketing: {
          groupTitle: 'Marketing',
          pages: [
            {
              title: 'Market Metrics',
              href: '/career-listing',
            }
          ],
        }
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>{children}</main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
