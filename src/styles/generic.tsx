import {Theme, createStyles, makeStyles, fade} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

export const useIconStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      backgroundColor: fade(grey[100], 0.1),
      transitionDuration: '0.15s',
      '&:hover': {
        backgroundColor: fade(grey[100], 0.3),
      },
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
  xl: '28px',
};
