import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    height: 'auto',
    '& .card-base__content': {
      padding: 0,
      height: 'auto',
    },
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderTop: `1px solid ${colors.grey[50]}`,
  },
  title: {
    fontWeight: 'bold',
  },
}));

export default props => {
  return (
    <Grid container spacing={4}>
        <Grid item align="center" xs={12}>
            <div>
                <div dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://nickswekosky.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>`
                }} />
            </div>
        </Grid>
    </Grid>
  );
};