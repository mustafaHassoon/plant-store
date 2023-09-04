import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: '"Fjalla One", sans-serif',
    },
    indicator: {
      backgroundColor: `${theme.palette.secondary.main} !important`,
    },
  })
);
