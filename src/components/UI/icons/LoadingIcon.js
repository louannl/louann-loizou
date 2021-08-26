import { AiOutlineReload } from 'react-icons/ai';

export const LoadingIcon = (props) => {
  return (
    <AiOutlineReload
      title="Loading"
      color={'#ffffff'}
      className={`inline ${props.size} animate-spin`}
    />
  );
};

export default LoadingIcon;
