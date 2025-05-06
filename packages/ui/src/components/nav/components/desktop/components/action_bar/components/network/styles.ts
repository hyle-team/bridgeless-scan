import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(0.8, 2),
    background: theme.palette.background.paper,
    color: theme.palette.custom.fonts.fontTwo,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
      cursor: 'pointer',
    },
    '& .MuiSvgIcon-root': {
      marginLeft: '0.1rem',
    },
  },
  icon: {
    display: 'flex',
    flex: '0 1 auto',
    height: 'auto',
    aspectRatio: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
