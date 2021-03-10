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
    education: {
      title: 'Education',
      id: 'education',
      children: {
        physicaltherapy: {
          groupTitle: 'Physical Therapy',
          pages: [
            {
              title: 'Doctorate Candidate',
              href: '/physical-therapy',
            }
          ],
        },
        engineering: {
          groupTitle: 'Engineering',
          pages: [
            {
              title: 'Self-Taught',
              href: '/computer-science',
            }
          ],
        }
      },
    },
    engineering: {
      title: 'Engineering',
      id: 'engineering',
      children: {
        economics: {
          groupTitle: 'Economics',
          pages: [
            {
              title: 'Federal Reserve Economic Dataset',
              href: '/fred',
            }
          ],
        },
        cloudcomputing: {
          groupTitle: 'Cloud Computing',
          pages: [
            {
              title: 'CenturyLink Status',
              href: '/ctl-status',
            }
          ],
        },
        genomics: {
          groupTitle: 'Genomics',
          pages: [
            {
              title: 'Pedigree Imputation',
              href: '/imputation',
            },
            {
              title: 'Breeding Diversity',
              href: '/diversity-coefficient',
            }
          ],
        }
      },
    },
    product: {
      title: 'Product',
      id: 'product',
      children: {
        entertainment: {
          groupTitle: 'Entertainment',
          pages: [
            {
              title: 'Eventy',
              href: '/eventy',
            }
          ],
        },
        marketing: {
          groupTitle: 'Marketing',
          pages: [
            {
              title: 'Market Metrics',
              href: '/market-metrics',
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
