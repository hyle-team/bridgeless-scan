// import ConnectWallet from '@/components/nav/components/connect_wallet';
import Network from '@/components/nav/components/desktop/components/action_bar/components/network';
import SettingsList from '@/components/nav/components/desktop/components/action_bar/components/settings_list';
import useStyles from '@/components/nav/components/desktop/components/action_bar/styles';
import SearchBar from '@/components/nav/components/search_bar';
// import WalletDetails from '@/components/nav/components/wallet_details';
import ThemeToggle from '@/components/nav/components/theme_toggle';
import { useGetComponentDimension } from '@/hooks/use_get_component_dimension';
import { FC } from 'react';

type ActionBarProps = {
  isNetwork: boolean;
  className?: string;
};

const ActionBar: FC<ActionBarProps> = ({className, isNetwork }) => {
  const { ref: heightRef } = useGetComponentDimension();
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className)} ref={heightRef}>
      <div className={classes.actions}>
        <SearchBar className={cx(classes.searchBar, { open: isNetwork })} />
        <Network
          className={cx(classes.network, { open: isNetwork })}
        />
        {/* <WalletDetails /> */}
        <ThemeToggle className={classes.toggle} />
        <SettingsList />
        {/* <ConnectWallet /> */}
      </div>
    </div>
  );
};

export default ActionBar;
