import React from 'react';
import { render } from 'react-dom';
import Menu from "./components/Menu"

class App extends React.Component {
    render() {
        return < Menu />;
    }
}

render(<App />, document.getElementById('root'));
