import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
        <section className='dectobin'>
            <h2>
                Decimal to binary
            </h2>
            <p>
                Convert a decimal value to binary
            </p>
            <a href="https://waa.ai/f1nU" className='link'>Convert</a>
        </section>
        
        <section className='dectohex'>
            <h2>
                Decimal to hexadecimal
            </h2>
            <p>
                Convert a decimal value to hexad
            </p>
            <a href="https://codepen.io/Digitango/pen/eRRZaP" className='link'>Convert</a>
        </section>

      
            <section className='dectobin'>
                <h2>
                  Convert a Hex to binary 
                </h2>
                <p>
                   Convert a Hexadecimal value to binary  
                </p>
                <a href="https://www.rapidtables.com/convert/number/hex-to-binary.html" className='link'>Convert</a>
            </section>
            
            <section className="dectohex">
                <h2>
                    Binary to Decimal
                </h2>
                <p>
                    Convert a Binary value to Hexadecimal 
                </p>
                <a href="https://www.rapidtables.com/convert/number/binary-to-hex.html" className='link'>Convert</a>
            </section>
            <div className='container'>
                <section className='dectobin'>
                    <h2>
                      Hex to Decimal  
                    </h2>
                    <p>
                        Convert a Hexadecimal value to binary 
                    </p>
                    <a href="https://www.rapidtables.com/convert/number/hex-to-binary.html" className='link'>Convert</a>
                </section>
                
                <section className='dectohex'>
                    <h2>
                        Binary to Hex
                    </h2>
                    <p>
                        Convert a Binary value to decimal 
                    </p>
                    <a href="https://www.rapidtables.com/convert/number/binary-to-decimal.html" className='link'>Convert</a>
                </section>
                    
          </div> 
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
