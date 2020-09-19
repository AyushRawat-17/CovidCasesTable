import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import CovidTable from './CovidTable'
function App() {

  const [data, setData] = useState([]);
  
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://coronavirus-19-api.herokuapp.com/countries',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

  
 
  return (
    <div>
    <h1>Covid-19 Cases</h1>
    <CovidTable 
      data={data}
    />
    </div>
  );
}

export default App;
