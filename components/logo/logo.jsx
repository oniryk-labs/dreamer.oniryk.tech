import { useTheme } from 'next-themes';
import Neko from '../../assets/svg/moon-and-stars-in-a-cloud-svgrepo-com.svg';

export default function Logo({ width = 32, height = 32, alt = 'dreamer logo' }) {
  const { theme } = useTheme();

  return (
    <Neko
      width={width}
      height={height}
      alt={alt}
      fill={theme === 'dark' ? 'white' : 'black'}
    />
  );
}
