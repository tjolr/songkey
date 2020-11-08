import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

import OnlyShowRecommended from './Switch.OnlyShowRecommended';
import GroupBy from './DropDown.GroupBy';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#515353b7',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(0.4),
        paddingBottom: theme.spacing(0.4),
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        paddingTop: theme.spacing(0.8),
        paddingBottom: theme.spacing(0.8),
      },
    },
  })
);

const FilterSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OnlyShowRecommended />
      <GroupBy />
    </div>
  );
};

export default FilterSection;
