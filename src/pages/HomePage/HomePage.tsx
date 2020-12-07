import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../animations/animations';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, useTheme } from '@material-ui/core';
import MatchingKeyItemDisplay from '../../components/MainContent/TransitionKeySection/MatchingKeysSection/MatchingKeyItemSection/MatchingKeyItem.display';
import {
  TransitionMatch,
  SongKey,
  TransitionMatchIndex,
} from '../../services/SongKey.service';
import TransitionKeyFigure3D from './TransitionKeyFigure.3D';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
    rootItem: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '68vh',
      perspective: '400px',
    },
  })
);

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={classes.root}>
        <div className={classes.rootItem}>
          <Typography variant="h2">Welcome to Songkey</Typography>
          <Typography variant="subtitle1">
            Song transitions made easy!
          </Typography>

          <Typography variant="body2" style={{ marginTop: theme.spacing(2) }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna
            justo, pulvinar eget lacus sit amet, eleifend vehicula erat.
            Suspendisse rhoncus placerat enim a faucibus. Ut blandit dapibus
            cursus. Mauris vehicula augue at tortor ultricies ultricies. Donec
            consectetur volutpat diam, vel pulvinar arcu tempor in. Nunc id
            purus vel sapien accumsan pretium id nec nisl. Quisque eget tortor
            pretium, efficitur quam nec, dictum odio. Mauris tincidunt tempor
            turpis, vitae euismod tellus aliquet in. Pellentesque purus turpis,
            laoreet quis velit at, pharetra sodales mauris. In sem urna, feugiat
            et augue eget, luctus pellentesque leo.
          </Typography>
        </div>
        <div className={classes.rootItem}>
          <TransitionKeyFigure3D />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
