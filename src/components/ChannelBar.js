import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus, FaUserPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const ChannelBar = (props) => {

  return (
    <div className='channel-bar shadow-lg'>
      <ChannelBlock />
      <div className='channel-container'>
        <Dropdown header='Topics' selections={topics} />
        <Dropdown header='Questions' selections={questions} />
        <Dropdown header='Random' selections={random} />
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className='dropdown'>
    <div className='flex flex-row'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5
          className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
        >
          {header}
        </h5>
      </div>
        <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto mr-4 text-gray-500 hover:text-white transition duration-200 ease-in-out' />
    </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection group'>
    <BsHash size='24' className='text-gray-600' />
    <h5 className='dropdown-selection-text group-hover:text-blue-500'>{selection}</h5>
    <div className='text-gray-800 group-hover:text-gray-400'>
      <FaUserPlus className='hover:text-white transition duration-300 '/>
    </div>
  </div>
);

const ChannelBlock = () => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>Channels</h5>
    <Divider />
  </div>
);

const Divider = () => {
  return (
    <hr className="channel-hr"/>
  )
}

export default ChannelBar;
