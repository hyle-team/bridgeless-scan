import chainCoing from '@/chainConfig';
import useStyles from '@/components/ChainIcon/useStyles';
import Image, { type ImageProps } from 'next/image';

import baseIconLight from 'shared-utils/assets/icons/bridgeless-light.svg?url';
import baseIconDark from 'shared-utils/assets/icons/bridgeless-dark.svg?url';

import baseLogoLight from 'shared-utils/assets/logos/bridgeless-light.svg?url';
import baseLogoDark from 'shared-utils/assets/logos/bridgeless-dark.svg?url';

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
  const [iconDark, iconLight] =
    type === 'icon' ? [baseIconDark, baseIconLight] : [baseLogoDark, baseLogoLight];

  return (
    <span className={cx(className, classes.container)}>
     <span className={className}>
       <Image
         unoptimized
         fill
         className={classes.light}
         src={iconLight}
         {...props}
       />
       <Image fill unoptimized className={classes.dark} src={iconDark} {...props}  />

    </span>
    </span>
  );
};

export default ChainIcon;
