import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const RenderRow = (props) => {
  const keys = Object.keys(props.data);
  return keys.map((key, index) => {
    return (
      <StyledTableCell align="center" key={index}>
        {props.data[key]}
      </StyledTableCell>
    );
  });
};

export default function CustomizedTables(props) {
  const { rows, headers, buttonRequired, buttonText } = props;
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <StyledTableCell key={header} align="center">
                {header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <RenderRow data={row} />
              {buttonRequired && (
                <StyledTableCell align="center">
                  <Button
                    onClick={() => {
                      console.log("Click for ", index);
                    }}
                    variant="outlined"
                    color="primary"
                    disableElevation
                  >
                    {buttonText}
                  </Button>
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CustomizedTables.propTypes = {
  headers: PropTypes.any.isRequired,
  rows: PropTypes.any.isRequired,
  buttonRequired: PropTypes.any.isRequired,
};
