import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentResolution: 'desktop',
            orientation: 'landscape'
        };
    }
    handleScroll(resolution, orientation) {
        let tmpo = this.defineResClassname(resolution, orientation);
        this.setState({
            currentResolution:tmpo[0],
            orientation: tmpo[1]
        })
    }
    defineResClassname(res,orientation) {
        let device, orient;
        switch (res) {
        case 'd':
            device = "desktop";
            break;
        case 't':
            device = "tablet";
            break;
        case 'm':
            device = "mobile";
            break;
        }
        switch (orientation) {
            case 'l':
                orient = "landscape";
                break;
            case 'p':
                orient = "portrait";
                break;
        }
        return [device,orient];
    }
    render() {

        return (
            <div className="App">
                <header className="header">
                    <div className="header__title">menu here</div>
                    <nav className="mq-navigation">
                        <ul className="mq-navigation__list">
                            <li className="mq-navigation__item">
                                <button className="mq-navigation__item" onClick={()=>this.handleScroll('d','p')}>Desktop</button>
                            </li>
                            <li className="mq-navigation__item">
                                <button className="mq-navigation__item" onClick={()=>this.handleScroll('t','l')}>Tablet l</button>
                            </li>
                            <li className="mq-navigation__item">
                                <button className="mq-navigation__item" onClick={()=>this.handleScroll('t','p')}>Tablet p</button>
                            </li>
                            <li className="mq-navigation__item">
                                <button className="mq-navigation__item" onClick={()=>this.handleScroll('m','l')}>Mobile l</button>
                            </li>
                            <li className="mq-navigation__item">
                                <button className="mq-navigation__item" onClick={()=>this.handleScroll('m','p')}>Mobile p</button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="bkg-crop">
                    <div className={`stage stage-device--${this.state.currentResolution} stage-orientation--${this.state.orientation}`}></div>
                </main>
            </div>
        );
    }
}

export default App;
