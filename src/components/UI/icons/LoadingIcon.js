import { ReloadCircleOutline } from 'react-ionicons';

export const LoadingIcon = (props) => {
  const iconSize = props.size;

  return (
    <ReloadCircleOutline
      title="loading icon"
      rotate
      color={'#ffffff'}
      height={iconSize}
      width={iconSize}
      cssClasses="inline"
    />
  );
};

export default LoadingIcon;
