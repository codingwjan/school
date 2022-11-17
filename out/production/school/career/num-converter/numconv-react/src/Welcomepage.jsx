import * as React from 'react';
import lock from "./img/lock.png"
import cloud from "./img/cloud.png"
import widget from "./img/widget.png"
import graphic from './img/undraw_calculator_re_alsc_1.svg'
import './WelcomePage.css';


const WelcomePage = () => {
    return (
        <>
        <div className="content" width="100%">
            <div className='welcome_message'>
                <h1 className='welcome_title'>Welcome to </h1>
                <h1 className='welcome_name'>Converter</h1>
            </div>

            <div className="calc_graphic">
                <img src={graphic} alt="calc_graphic" className="calc" />
            </div>

            <div className='secure'>
                <img src={lock} alt='lock' className='lock_icon' height={89} width={89} />
                <div className='secure_text'>
                    <h3 className='secure_title'>Secure</h3>
                    <h4 className='secure_p'>No use of Cookies or Trackers so your Data is Safe</h4>
                </div>
            </div>

            <div className='web_based'>
                <img src={cloud} alt='cloud' className='cloud_icon' height={89} width={89} />
                <div className='web_based_text'>
                    <h3 className='web_based_title'>Web Based</h3>
                    <h4 className='web_based_p'>Fully Web Based Application With Easy To Navigate Design</h4>
                </div>
            </div>

            <div className='design_focused'>
                <img src={widget} alt='widget' className='widget_icon' height={89} width={89} />
                <div className='design_focused_text'>
                    <h3 className='design_focused_title'>Design Focused</h3>
                    <h4 className='design_focused_p'>Use Easy and Interactive Elements to Convert your Numbers</h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default WelcomePage;