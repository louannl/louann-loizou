import SocialLinks from '../UI/Links/SocialLinks';

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-300 flex items-center">
      <div class="sm:w-2/3 text-center py-6">
        <p class="text-sm text-blue-700 font-bold">
          © 2021 by Louann Loizou Designed using React and Tailwind
        </p>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
