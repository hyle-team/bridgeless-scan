import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/components/nav/components/desktop/components/action_bar/components/network/styles';
import useBigDipperNetworks from '@/hooks/useBigDipperNetworks';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

type NetworkProps = {
  className?: string;
};

const Network: FC<NetworkProps> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { selectedName } = useBigDipperNetworks();

  return (
    <div
      className={cx(classes.root, className)}
      role="button"
      tabIndex={0}
      aria-label={selectedName}
    >
      <ChainIcon type="icon" alt="icon" className={classes.icon} />

      <Typography variant="body1">{selectedName}</Typography>
    </div>
  );
};

export default Network;
