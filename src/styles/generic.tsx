import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

export const useIconStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0.1),
        '& > * > * > *': {
          fontSize: '14px',
        },
      },
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0.2),
      },
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0.4),
      },
    },
  })
);

export const responsiveIcon = {
  xs: '16px',
  sm: '20px',
  md: '24px',
};
