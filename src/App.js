import './App.css';
import LinkPreviewer from './LinkPreviewer';

function App() {
  return (
    <div className="container">
      
      <LinkPreviewer url="https://www.naukri.com/mnjuser/profile">
      <span className='link'>Naukari.com</span>
      </LinkPreviewer>
  
      <LinkPreviewer url="https://mayankmehta.vercel.app/">
      <span className='link'>Linkeldn</span>
      </LinkPreviewer>
      
      <LinkPreviewer url="https://github.com/mayankmehta19032003/Postify">
      <span className='link'>Github</span>
      </LinkPreviewer>
     
    </div>
  );
}

export default App;
