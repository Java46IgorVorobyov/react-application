import React from "react";

type Props = {
    value: any[],
    injectValue: (timeZones: string) => void
}

let selectElement: any;

const InputData: React.FC<Props> = ({value, injectValue}) => {
    function onSelect() {
        injectValue(selectElement.value);
    }

    React.useEffect(() => {
        selectElement = document.getElementById("selectInputData")
    })

    return <div>
        <select id="selectInputData">
            {value.map(tz => <option value={tz.name}>{tz.name}</option>)}
        </select>
        <button onClick={onSelect}>GO</button>
    </div>
}

export default InputData;