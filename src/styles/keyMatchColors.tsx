import {
  Theme,
  createStyles,
  makeStyles,
  fade,
} from '@material-ui/core/styles';
import { red, yellow, blue, green } from '@material-ui/core/colors';

export const useKeyMatchStyles = makeStyles((theme: Theme) =>
  createStyles({
    UnrecommendedFontColor: {
      color: red[400],
    },
    TrickyFontColor: {
      color: yellow[400],
    },
    NoticeableFontColor: {
      color: blue[300],
    },
    SmoothFontColor: {
      color: green[400],
    },
    UnrecommendedBackgroundColor: {
      backgroundColor: fade(red[500], 0.2),
    },
    TrickyBackgroundColor: {
      backgroundColor: fade(yellow[400], 0.2),
    },
    NoticeableBackgroundColor: {
      backgroundColor: fade(blue[400], 0.2),
    },
    SmoothBackgroundColor: {
      backgroundColor: fade(green[300], 0.2),
    },
    DisplayUnrecommendedBackgroundColor: {
      backgroundColor: fade(red[500], 0.25),
    },
    DisplayTrickyBackgroundColor: {
      backgroundColor: fade(yellow[400], 0.25),
    },
    DisplayNoticeableBackgroundColor: {
      backgroundColor: fade(blue[400], 0.25),
    },
    DisplaySmoothBackgroundColor: {
      backgroundColor: fade(green[300], 0.25),
    },
  })
);
