import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import TransitionChip from './TransitionChip';
import {Typography, fade} from '@material-ui/core';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {grey} from '@material-ui/core/colors';
import ForwardIcon from '@material-ui/icons/Forward';
import {useKeyMatchStyles} from '../../../../../styles/keyMatchColors';
import clsx from 'clsx';
import {TransitionMatch} from '../../../../../services/SongKey.service';
import {useflexBoxStyles} from '../../../../../styles/generic';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogRoot: {
      margin: '5px',
    },
    titleSection: {
      flexDirection: 'row',
      borderRadius: '5px',

      marginBottom: theme.spacing(2),
      '& > div:first-child': {
        flex: 1,
      },
      '& > div:last-child': {
        flex: 1,
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.5),
      },
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2),
      },
    },
    keyBox: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: fade(grey[500], 0.5),
      borderRadius: '8px',
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0.6),
      },
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(1),
      },
    },
    keyBoxNumber: {
      fontSize: '50%',
      backgroundColor: fade(grey[700], 0.7),

      borderBottomRightRadius: '8px',
      borderBottomLeftRadius: '8px',
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(4.5),
      },
      [theme.breakpoints.up('md')]: {
        width: theme.spacing(8),
      },
    },
    forwardIcon: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  })
);

const TransitionDetails = (props: any) => {
  const theme = useTheme();
  const classes = useStyles();
  const keyMatchClasses = useKeyMatchStyles();
  const flexBoxClasses = useflexBoxStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentKeyRedux = useSelector(
    state => state.transitionKeyReducer.currentKey
  );
  const handleClose = () => {
    props.handleDetailClose();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogContent
          style={{
            padding: isMobile ? '0.6rem' : theme.spacing(2),
          }}
        >
          <div
            className={clsx(
              classes.titleSection,
              flexBoxClasses.parentVerAlignCenterChildren,
              props.songKey.match === TransitionMatch.Smooth
                ? keyMatchClasses.SmoothBackgroundColor
                : props.songKey.match === TransitionMatch.Noticeable
                ? keyMatchClasses.NoticeableBackgroundColor
                : props.songKey.match === TransitionMatch.Tricky
                ? keyMatchClasses.TrickyBackgroundColor
                : keyMatchClasses.UnrecommendedBackgroundColor
            )}
          >
            <div>
              <Typography variant={isMobile ? 'h6' : 'h4'}>
                <div className={flexBoxClasses.parentVerAlignCenterChildren}>
                  <div className={classes.keyBox}>
                    <div>{currentKeyRedux}</div>
                    <div
                      className={clsx(
                        classes.keyBoxNumber,
                        flexBoxClasses.parentHorVerAlignCenterChilren
                      )}
                    >
                      I
                    </div>
                  </div>
                  <ForwardIcon className={classes.forwardIcon} />
                  <div className={classes.keyBox}>
                    <div>{props.songKey.songKey}</div>
                    <div
                      className={clsx(
                        classes.keyBoxNumber,
                        flexBoxClasses.parentHorVerAlignCenterChilren
                      )}
                    >
                      {props.songKey.number}
                    </div>
                  </div>
                </div>
              </Typography>
            </div>
            <div>
              <TransitionChip match={props.songKey.match} detailView={true} />
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
