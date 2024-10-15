import React, { useState } from 'react';
import QRCode from 'qrcode';
import './App.css';

function App() {

  const [urlToSearch, seturlToSearch] = useState<string>("");
  const [showQRCode, setShowQRCode] = useState<boolean>(false);
  const [qrCodeUrl, setqrCodeUrl] = useState<string>("");

  const generateQRCode = async () => {
    const urlForQRCode = await QRCode.toDataURL(urlToSearch);
    setqrCodeUrl(urlForQRCode);
    setShowQRCode(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Use the below input field to generate QR code of any valid URL</div>
        <div style={{"border": "1px solid black", margin: '1%', padding: '1%', width: '50%'}}>
          <input type='search' value={urlToSearch} onChange={(e) => seturlToSearch(e.target.value)} style={{width:'100%'}}></input>
          <button onClick={generateQRCode}>Generate QR Code</button>
        </div>
        {showQRCode && (<div style={{"border": "1px solid black", margin: '1%', padding: '1%', width: '50%'}}>
          {qrCodeUrl && <img src={qrCodeUrl}/>}
        </div>)}
      </header>
    </div>
  );
}

export default App;
