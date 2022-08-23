import { useState } from 'react';
import UrlInput from './Components/UrlInput';
import UrlOutputs from './Components/UrlOutputs';
import './App.css';

function App() {

  const [shortUrls, setShortUrls] = useState([])
  const handleUrls = (url) => {
    let newUrls = [...shortUrls];
    newUrls.push(url);
    setShortUrls(newUrls);
  }
  return (
    <div className="App">
      <UrlInput handleUrls={handleUrls} />
      <UrlOutputs shortUrls={shortUrls} />
    </div>
  );
}

export default App;
