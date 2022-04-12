import React from 'react';
import lifeGameConfig from "./config/lifeGameConfig.json";
import Life from "./components/Life";



function App() {
   return (<div>
      <Life dimension={lifeGameConfig.dimension} ticInterval={lifeGameConfig.tic}/>
   </div>)
}

export default App;


