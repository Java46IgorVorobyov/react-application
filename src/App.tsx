import React from 'react';
import './App.css';
import Timer from "./components/Timer";
import Color from "./components/Color";
import timeZones from "./config/time-zones";
import InputData from "./components/InputData";

type ComponentName = 'input' | 'timer' | 'color';

function App() {
    const [timeZone, setTimeZone] = React.useState('Asia/Jerusalem');
    const [color, setColor] = React.useState('red');
    const [componentName, setComponentName] = React.useState<ComponentName>('input');

    const mapComponents: Map<ComponentName, React.ReactNode> = new Map();
    mapComponents.set('color', <Color color={color}></Color>);
    mapComponents.set('input', <InputData timeZones={timeZones} injectTimeZone={setTimeZone}></InputData>);
    mapComponents.set('timer', <Timer timeZone={timeZone}></Timer>);

    return (
        <div>
            {Array.from(mapComponents.keys()).map(k => <button onClick={() => setComponentName(k)}>{k}</button>)}
            {mapComponents.get(componentName)}
    </div>
    )
}

export default App;


