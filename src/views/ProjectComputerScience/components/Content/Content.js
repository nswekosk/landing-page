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
        When I was working on my doctorate in physical therapy at Saint Louis University (SLU), I became interested in transferring over to the computer science program to work towards an undergraduate degree. But after speaking to admissions, I calculated the amount it would cost for 2 more years of school and I was turned off by additional amounts of private school undergraduate tuition debt I would have to add to my existing loan amount.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        My friend Mark was a computer science student at the time and I told him I was interested in transitioning and was looking for a mentor. He pointed me in the direction of his mentor, Dr. Kevin Scannel, and I found his office hours on his door. I read up on his professional research and went into his officer hours one day to introduce myself. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        While there, I asked him if people were able to work at companies like Google without a degree. He told me it was possible.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        One day while Google-searching for computer science programs, I noticed that Stanford, Harvard, and MIT published the same open-courseware courses required for SLU’s computer science program, except open source. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        They published lectures with videos, powerpoints, and text documents. They provided homework assignments, tests, and quizzes for 3 years with the answers and explanations. They provided a course’s syllabus and I was able to find each course’s textbook online, many times for free as a PDF document.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        While working full time on my doctorate, I began completing the introductory and mathematics courses. After a year of working on these courses, my grades began to lag and I found myself spending more time learning the computer science subjects instead of the physical therapy content.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        When asked by my professor if I would like to continue in the program, I declined and dropped out with a year and a half to finish. I began a job as a part-time physical therapy technician at Depaul Hospital’s rehabilitation clinic (St. Louis, MO) and spent all of my personal time working through the curriculum.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        In an effort to conserve money, I began going to local startup meetups where I could meet new people, learn about modern-day computer science concepts, and eat dinner for free that was paid for by the corporate sponsors. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        One meetup I frequented was called Code Until Dawn. This was a meetup of St. Louis-based developers that would meet on Fridays at a local incubator and hangout or code until they closed the venue on Saturday.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        One night at a Code Until Dawn meetup, I was working on a homework assignment in C++ that focused on implementing a library for LinkedILists. I was struggling with the concept of computational complexity and was not having luck from any present to help me.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        At around 2:00AM and with only a few of us remaining, Francis Schmitz stumbled in to hangout. At the time, Francis was a Senior Engineer at Exegy and extremely enthusiastic at improving his engineering career into the world of high frequency trading. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        He sat down with me and helped me through my homework while showing me how to edit my code using VIM. I asked him if he would be open to meeting every Wednesday to serve as my tutor and he accepted without payment.
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        From then on, Francis and I met every Wednesday at a local public library or a Starbucks and he would help me understand how to implement new algorithms and data structures and how to define algorithmic complexity. 
        </Typography>
        <Typography style={{marginTop: "1em"}} component="p" variant="h6" color="textPrimary">
        When I was preparing for my first interview at Infoplus, Francis clarified what questions I should prepare for and what concepts I should understand.
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
