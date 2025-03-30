import LinkPreviewer from './LinkPreviewer';

function App() {
  return (
    <div className="container">
      
      <LinkPreviewer url="https://en.wikipedia.org/wiki/Main_Page">
      <span className='link'>wikipedia</span>
      </LinkPreviewer>
  
      <LinkPreviewer url="https://mayankmehta.vercel.app/">
      <span className='link'>portfolio</span>
      </LinkPreviewer>
      
      <LinkPreviewer url="https://github.com/mayankmehta19032003/Postify">
      <span className='link'>Github</span>
      </LinkPreviewer>
     
    </div>
  );
}

export default App;
