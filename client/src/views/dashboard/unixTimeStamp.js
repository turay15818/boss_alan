/* eslint-disable prettier/prettier */
// import React, { useState } from 'react';
// import axios from 'axios';

// function UnixTimeStamp() {
//   const [time1, setTime1] = useState('');
//   const [time2, setTime2] = useState('');
//   const [unixTime1, setUnixTime1] = useState(null);
//   const [unixTime2, setUnixTime2] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data } = await axios.post('http://localhost:4433/convert', { time1, time2 });
//     setUnixTime1(data.unixTime1);
//     setUnixTime2(data.unixTime2);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input 
//         type="text" 
//         placeholder="Enter time 1" 
//         value={time1} 
//         onChange={(e) => setTime1(e.target.value)} /> <br /> <br />
//         <input 
//         type="text" 
//         placeholder="Enter time 2" 
//         value={time2} 
//         onChange={(e) => setTime2(e.target.value)} /> <br /> <br />
//         <button type="submit">Convert</button>
//       </form>
//       {unixTime1 && (
//         <div>
//           <p>Time 1 Unix timestamp: {unixTime1}</p>
//           <p>Time 2 Unix timestamp: {unixTime2}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UnixTimeStamp;

import React, { useState, useEffect } from 'react';

function App() {
  const [firstSearch, setFirstSearch] = useState('');
  const [secondSearch, setSecondSearch] = useState('');
  const [result, setResult] = useState({});

  useEffect(() => {
    async function convert() {
      const res = await fetch(`http://localhost:4433/convert?start=${firstSearch}&end=${secondSearch}`);
      const data = await res.json();
      setResult(data);
    }

    if (firstSearch && secondSearch) {
      convert();
    }
  }, [firstSearch, secondSearch]);

  return (
    <>

      {result.start && <p>First Search: {result.start}</p>}
      {result.end && <p>Second Search: {result.end}</p>}

      <input 
      value={firstSearch} 
      type="datetime-local"
      onChange={e => setFirstSearch(e.target.value)} 
      placeholder="First Search" /> <br /> <br />
      <input 
      type="datetime-local"
      value={secondSearch} 
      onChange={e => setSecondSearch(e.target.value)} 
      placeholder="Second Search" />

    </>
  );
}

export default App;
