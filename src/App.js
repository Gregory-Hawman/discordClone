import Sidebar from './components/Sidebar';
import ChannelBar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import './index.css';


const channels = [
  {
    section: 'topics',
    list: ['tailwind-css', 'react']
  },
  {
    section: 'questions',
    list: ['jit-compilation', 'purge-files', 'dark-mode']
  },
  {
    section: 'random',
    list: ['variants', 'plugins']
  },
  {
    section: 'voice channels',
    list: ['Hangout','Stream Room']
  },
]

function App() {
  return (
    <div className="flex">
      <div className="flex flex-row">
        <Sidebar />
        <ChannelBar channels={channels} />
      </div>
      <ContentContainer channels={channels} />
    </div>
  );
}

export default App;
