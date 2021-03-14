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
          <b>Computer Science Educational Program</b>
        </Typography>
        <Divider />
        <Typography variant="h6" gutterBottom color="textPrimary">
          <i>A computer science program with a mentor, a tutor, and a self-designed curriculum.</i>
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography  variant="h5" gutterBottom color="textPrimary">
          <span style={{textDecoration: "underline"}}>Role</span> 
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
          Creator of education program
        </Typography>
        <Typography  variant="h6" gutterBottom color="textPrimary">
          Student of education program
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
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        While working on my <a target="_blank" href="/physical-therapy" style={{textDecoration: "underline"}}>docatorate in physical therapy</a> at Saint Louis University (SLU), I became interested in transferring to SLU's computer science program to work towards an undergraduate degree. But after speaking to admissions, I calculated the amount in tuition 2 more years of private school would cost and I was turned off by adding to my existing loan amount.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I talked to my friend Mark, who was a computer science student at the time, and told him about my interest in transitioning. I told him I was looking for a mentor and he pointed me towards his, Dr. Kevin Scannel. I found Dr. Scannel's office hours on his door, read up on his professional research, and went into his office one day to introduce myself. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        While there, I asked him if people were able to work at companies like Google without a degree. He told me it was possible.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        One day not long after, I was Google-searching computer science programs and noticed Stanford, Harvard, and MIT published the same open-courseware courses required for SLU’s computer science program, except as open-source courses. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        These open-source courses contained lectures with videos, powerpoints, and text documents. They provided homework assignments, tests, and quizzes for 3 years with the answers and explanations. Each course had syllabus and I was able to find the relevant textbook at my local library or online for free as a PDF document.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        While continuing my doctorate program, I began completing the introductory and mathematics courses in my personal time. After a year, I found myself spending more time learning the computer science subjects instead of the physical therapy content.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        Half way through my second year, the head of our doctorate program asked if I would like to continue in the program. I declined and left the program the next week to begin a job as a part-time physical therapy technician at DePaul Hospital’s rehabilitation clinic (in St. Louis, MO) and spend my personal time working through the computer science curriculum.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        In an effort to conserve money, I began going to local technology meetups where I could meet new people, learn about modern-day technology concepts, and eat the free dinners paid for by the corporate sponsors. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        One meetup I frequented was called Code Until Dawn. This was a meetup of St. Louis-based software developers that met on Fridays at a local startup incubator and hangout or code until they closed the venue on Saturday morning.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        One night at a Code Until Dawn meetup, I was working on a homework assignment in C++ that focused on implementing a library for LinkedLists. I was struggling and nobody present could help me.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        At around 2:00AM and with only a few of us remaining, <a target="_blank" href="https://www.linkedin.com/in/francis-s-806a6712" style={{textDecoration: "underline"}}>Francis Schmitz</a> stumbled into the meetup to hangout. At the time, Francis was a Senior Engineer at Exegy and extremely enthusiastic at improving his engineering career in the world of high-frequency trading. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        He sat down with me and helped me through my homework while showing me how to edit my code using VIM. I asked if he would be open to serving as my tutor. He gladly accepted and refused to take payment.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        From then on, Francis and I met every Wednesday evening at a local public library or a local Starbucks. He would help me understand algorithms and data structures, the tradeoffs in memory management, and how to evaluate algorithmic efficiency. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        When I began preparing for my interview at Infoplus, Francis clarified the questions I should practice and the concepts I should understand.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        I continued to meet with Francis on a weekly basis for short term feedback on software engineering concepts. In addition, I continued to go into Dr. Kevin Scannel’s office hours on a biannual basis for long-term feedback on computer science in the technology industry.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        The courses I completed are as follows: 
        <ul style={{marginLeft: "2em"}}>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
            Introduction:
            </Typography>
            <ul style={{marginLeft: "3em"}}>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://cs50.harvard.edu/college/2021/spring/" style={{textDecoration: "underline"}}>CS50</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://see.stanford.edu/Course/CS106A" style={{textDecoration: "underline"}}>Programming Methodology</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://see.stanford.edu/Course/CS106b" style={{textDecoration: "underline"}}>Programming Abstractions</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://see.stanford.edu/Course/CS107" style={{textDecoration: "underline"}}>Programming Paradigms</a>
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
            Mathematics & Statistics:
            </Typography>
            <ul style={{marginLeft: "3em"}}>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/" style={{textDecoration: "underline"}}>Mathematics for Computer Science</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Calculus Made Easy (Book)
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Matrix Algebra, Calculus 1, 2 and 3 (Completed at local community college)
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Applied Statistics (Completed at Washington University of St. Louis)
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
            Data Structures and Algorithms:
            </Typography>
            <ul style={{marginLeft: "3em"}}>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/algorithmic-toolbox" style={{textDecoration: "underline"}}>Algorithmic Toolbox</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/data-structures" style={{textDecoration: "underline"}}>Data Structures</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/algorithms-on-graphs" style={{textDecoration: "underline"}}>Algorithms on Graphs</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/algorithms-on-strings" style={{textDecoration: "underline"}}>Algorithms on Strings</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/advanced-algorithms-and-complexity" style={{textDecoration: "underline"}}>Advanced Algorithms and Complexity</a>
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
            Programming Languages:
            </Typography>
            <ul style={{marginLeft: "3em"}}>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/programming-languages" style={{textDecoration: "underline"}}>Programming Languages, Part A</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/programming-languages-part-b" style={{textDecoration: "underline"}}>Programming Languages, Part B</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/programming-languages-part-c" style={{textDecoration: "underline"}}>Programming Languages, Part C</a>
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
            Operating Systems:
            </Typography>
            <ul style={{marginLeft: "3em"}}>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.udacity.com/course/introduction-to-operating-systems--ud923" style={{textDecoration: "underline"}}>Introduction To Operating Systems</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                Linux Kernel Architecture (Book)
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
            Distributed Operating Systems:
            </Typography>
            <ul style={{marginLeft: "3em"}}>
            <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/cloud-computing" style={{textDecoration: "underline"}}>Cloud Computing Concepts, Part 1</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/cloud-computing-2" style={{textDecoration: "underline"}}>Cloud Computing Concepts, Part 2</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/cloud-applications-part1" style={{textDecoration: "underline"}}>Cloud Computing Applications, Part 1: Cloud Systems and Architecture</a>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" gutterBottom color="textPrimary">
                <a target="_blank" href="https://www.coursera.org/learn/cloud-applications-part2" style={{textDecoration: "underline"}}>Cloud Computing Applications, Part 2: Big Data and Applications in the Cloud</a>
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="h6" gutterBottom color="textPrimary">
              NOTE: There are many individual books and articles I read that are not included that touched on concepts such as computer architecture and language-specific syntax and semantics. In addition, it’s worth noting that I began taking introductory courses with the intention of someday going back to graduate school to work towards a Master’s degree in Computer Science.
            </Typography>
          </li>
        </ul>       
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
