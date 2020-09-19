import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import HeadingElement from "./HeadingElements";
import TableBody from '@material-ui/core/TableBody';
import Body from './Body'
function CovidTable(props) {

  function tableCell(headingitem){
        return <TableCell >{headingitem}</TableCell>;
  }    

  function bodyElement(item){
    return(
      <Body
        country={item.country}
        cases={item.cases}
        todayCases={item.todayCases}
        deaths={item.deaths}
        todayDeaths={item.todayDeaths}
        recovered={item.recovered}
        active={item.active}
      />
    );
  }

  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>{HeadingElement.map(tableCell)}</TableRow>
          </TableHead>
          <TableBody>
          {props.data.map(bodyElement)}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default CovidTable;
