import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import TransitionChip from './TransitionChip';
import {Typography} from '@material-ui/core';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      '& > div': {
        flex: 1,
      },
    },
  })
);

const TransitionDetails = (props: any) => {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    props.handleDetailClose();
  };

  return (
    <div>
      <Dialog
        /* fullScreen={fullScreen} */ open={props.open}
        onClose={handleClose}
      >
        <DialogContent>
          <div className={classes.titleSection}>
            <div>
              <Typography variant="h5">Transition from C - B</Typography>
            </div>
            <div>
              <TransitionChip match={props.match} detailView={true} />
            </div>
          </div>
          <DialogContentText>
            The transition is good because ... And its important to note that.
          </DialogContentText>

          <DialogContentText>Suggestion for transition:</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TransitionDetails;
