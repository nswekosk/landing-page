import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  articleDate: {
    margin: theme.spacing(2, 0),
  },
  card: {
    boxShadow: 'none',
    border: 0,
    maxWidth: 300,
  },
  cardMedia: {
    height: 185,
  },
  swiperSlide: {
    width: 'auto',
  },
}));

const Articles = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  React.useEffect(() => {
    new Swiper('.article-swiper.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: isMd ? 30 : 12,
      pagination: {
        el: '.article-swiper.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        label=""
        title="As featured in..."
        align="left"
      />
      <div
        className={clsx(
          'article-swiper',
          'swiper-container',
          classes.swiperContainer,
        )}
      >
        <div className={clsx('swiper-wrapper', classes.swiperWrapper)}>
          {data.map((item, index) => (
            <div
              className={clsx('swiper-slide', classes.swiperSlide)}
              key={index}
            >
              <Card className={classes.card}>
              <CardActionArea>
                  <a target="_blank" href={`${item.url}?utm_source=NickSwekosky.com`}>
                    <CardMedia className={classes.cardMedia}>
                      <Image
                        {...item.cover}
                        lazyProps={{ width: '100%', height: '100%' }}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography
                        variant="body1"
                        color="primary"
                        component="p"
                        className={classes.articleDate}
                      >
                        <i>{item.author}</i>&nbsp;|&nbsp;
                        <i>{item.date}</i>
                      </Typography>
                      <Typography variant="h6" color="textPrimary" component="p">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </a>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

Articles.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Articles;
