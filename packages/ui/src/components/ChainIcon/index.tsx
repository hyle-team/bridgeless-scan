import chainCoing from '@/chainConfig';
import useStyles from '@/components/ChainIcon/useStyles';
import Image, { type ImageProps } from 'next/image';

import baseIconLight from 'shared-utils/assets/icons/base-light.svg?url';
import baseLogoLight from 'shared-utils/assets/logos/base-light.svg?url';
import bridgelessIconLight from 'shared-utils/assets/icons/bridgeless-light.svg';
import bridgelessLogoLight from 'shared-utils/assets/logos/bridgeless-light.svg';

interface IconProps extends Omit<ImageProps, 'id' | 'src'> {
  type: 'icon' | 'logo';
  chainName?: string;
}

const ChainIcon = ({
  className,
  type,
  chainName = chainCoing().chainName,
  ...props
}: IconProps) => {
  const { classes, cx } = useStyles();

  let [iconDark, iconLight] =
    type === 'icon' ? [baseIconLight, baseIconLight] : [baseLogoLight, baseLogoLight];
  switch (chainName) {
    case 'bridgeless':
      [iconDark, iconLight] =
        type === 'icon'
          ? [bridgelessIconLight, bridgelessIconLight]
          : [bridgelessLogoLight.src, bridgelessLogoLight.src];
      break;
    default:
      throw new Error(`chain ${chainName} not supported`);
  }
  return (
    <span className={cx(className, classes.container)}>
      <Image width={0} height={0} src={iconDark} {...props} className={classes.dark} unoptimized />
      <Image
        width={0}
        height={0}
        src={iconLight}
        {...props}
        className={classes.light}
        unoptimized
      />
    </span>
  );
};

export default ChainIcon;
