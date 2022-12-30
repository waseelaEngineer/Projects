import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useEffect, useState } from 'react';
import QRCode from 'qrcode'

function App() {

  const [url, setUrl] = useState('');
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (url){
      QRCode.toDataURL(url).then((setSrc));
    }
  }, [url]);

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Waseela QR Generator</h1>

      <div className='row mt-5 p-3'>
        <label>Enter URL:</label>
        <div className='col'>
          <input className='form-control' value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
      </div>

      {url && (
        <div className='d-flex justify-content-center text-center mt-3'>
          <a className='decoration-none' href={src} download>
            <img src={src} alt='QR' />
            <p>Download</p>
          </a>
        </div>
      )}

    </div>
  );
}

export default App;
