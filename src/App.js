import React, { useState } from 'react';
import './App.css';
import Html5QrcodePlugin from './components/Html5QrcodePlugin';
import ResultContainerPlugin from './components/ResultContainerPlugin.jsx';

const App = (props) => {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
    };

    return (
        <div className="App">
            <section className="App-section">
                <br />
                <br />
                <br />
                <Html5QrcodePlugin
                    fps={50}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <ResultContainerPlugin results={decodedResults} />
            </section>
        </div>
    );
};

export default App;
