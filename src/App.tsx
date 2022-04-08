import React from 'react';
import './App.css';
import Timer from "./components/Timer";
import Color from "./components/Color";
import timeZones from "./config/time-zones";
import InputData from "./components/InputData";
import colors from "./config/colors";

type ComponentName = 'input' | 'timer' | 'color'| 'Choose of color';

function App() {
    const [timeZone, setTimeZone] = React.useState('Asia/Jerusalem');
    const [color, setColor] = React.useState('cornflowerblue');
    const [componentName, setComponentName] = React.useState<ComponentName>('Choose of color');

    const mapComponents: Map<ComponentName, React.ReactNode> = new Map();
    mapComponents.set('Choose of color', <InputData value={colors} injectValue={setColor}/>);
    mapComponents.set('color', <Color color={color}/>);
    mapComponents.set('input', <InputData value={timeZones} injectValue={setTimeZone}/>);
    mapComponents.set('timer', <Timer timeZone={timeZone}/>);

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            {Array.from(mapComponents.keys()).map(k => <button onClick={() => setComponentName(k)}>{k}</button>)}
            {mapComponents.get(componentName)}
        </div>
    )
}

export default App;


