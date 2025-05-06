import chainCoing from '@/chainConfig';
import useStyles from '@/components/ChainIcon/useStyles';
import Image, { type ImageProps } from 'next/image';

import baseIconLight from 'shared-utils/assets/icons/base-light.svg?url';

import baseLogoLight from 'shared-utils/assets/logos/base-light.svg?url';

import bridgelessIconLight from 'shared-utils/assets/icons/bridgeless-light.svg?url';
import bridgelessIconDark from 'shared-utils/assets/icons/bridgeless-dark.svg?url';

import bridgelessLogoLight from 'shared-utils/assets/logos/bridgeless-light.svg?url';
import bridgelessLogoDark from 'shared-utils/assets/logos/bridgeless-dark.svg?url';

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
    case 'base':
      [iconDark, iconLight] =
        type === 'icon'
          ? [bridgelessIconDark, bridgelessIconLight]
          : [bridgelessLogoDark, bridgelessLogoLight];
      break;
    default:
      throw new Error(`chain ${chainName} not supported`);
  }




  return (
    <span className={cx(className, classes.container)}>
     <span className={className}>
       <Image
         fill
         src={iconLight}
         {...props}
         className={classes.light}
         unoptimized
       />
       <Image fill className={classes.dark} src={iconDark} {...props} unoptimized />

    </span>
    </span>
  );
};

export default ChainIcon;
