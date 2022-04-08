import React from "react";

type Props = {
    timeZones: any[],
    injectTimeZone: (timeZones: string) => void
}

let selectElement: any;

const InputData: React.FC<Props> = ({timeZones, injectTimeZone}) => {
    function onSelect() {
        injectTimeZone(selectElement.value);
    }

    React.useEffect(() => {
        selectElement = document.getElementById("selectInputData")
    })

    return <div>
        <select id="selectInputData">
            {timeZones.map(tz => <option value={tz.name}>{tz.name}</option>)}
        </select>
        <button onClick={onSelect}>GO</button>
    </div>
}

export default InputData;