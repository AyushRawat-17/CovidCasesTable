import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Body from './Body'
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

  function tableElements(item){
    return (
      
      <TableRow>
          <TableCell>{item.country}</TableCell>
          <TableCell>{item.cases}</TableCell>
          <TableCell>{item.todayCases}</TableCell>
          <TableCell>{item.deaths}</TableCell>
          <TableCell>{item.todayDeaths}</TableCell>
          <TableCell>{item.recovered}</TableCell>
          <TableCell>{item.active}</TableCell>
      </TableRow>
    );
  }
  


  return (
    <div>
    <h1>Covid-19 Cases</h1>
     <Paper elevation={3} >
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell >Country</TableCell>
              <TableCell>Total Cases</TableCell>
              <TableCell>New Cases</TableCell>
              <TableCell>Total Deaths</TableCell>
              <TableCell>New Deaths</TableCell>
              <TableCell>Recovered</TableCell>
              <TableCell>Active Cases</TableCell>
            </TableRow>
          </TableHead> 
          <TableBody>
            {data.map(tableElements)}
          </TableBody>     
        </Table>
      </TableContainer>
      </Paper>
    </div>
  );
}

export default App;
