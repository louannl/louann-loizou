import SocialLinks from '../UI/Links/SocialLinks';

const Footer = () => {
  return (
    <footer className="flex items-center bg-themeDarkGrey text-white">
      <div className="sm:w-2/3 text-center py-6 mx-2">
        <p className="text-sm text-blue-700 font-bold">
          © 2021 Designed by Louann Robbins
        </p>
      </div>
      <SocialLinks color="white" />
    </footer>
  );
};

export default Footer;
