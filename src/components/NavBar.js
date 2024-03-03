import { MdImageSearch } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="bg-sky-800 text-white px-4 py-2 flex  items-center mb-4">
      <a className="flex px-4 " href="/">
        <MdImageSearch className="scale-150 mr-2 mt-1" />
        <h1 className="text-xl font-bold">Search Photos</h1>
      </a>
    </nav>
  );
};

export default Navbar;
