import satData from "./satData"

const Buttons = ({ filterByType, setSat, displaySats }) => {
    const satData = []; 

  return (
  <div>
    
    <div>
  {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}  
    </div>
    

    <button onClick={() =>setSat(satData)}> All orbits
    </button>
    
  
  </div>
  
  )};

export default Buttons;