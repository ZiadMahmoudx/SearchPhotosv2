import { MdImageSearch } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="bg-sky-800 text-white px-4 py-2 flex  items-center mb-4">
      <a className="flex px-4 " href="/">
        <h1 className="text-xl font-bold">SnapHunt</h1>
        <MdImageSearch className="scale-150 ml-1.5 mt-1.5" />
      </a>
    </nav>
  );
};

export default Navbar;
