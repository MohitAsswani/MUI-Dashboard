import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, TablePagination } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import EditIcon from '@mui/icons-material/Edit';
import { dataEntries } from '../common';
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme:Theme) => ({

    tableContainer: {
      maxWidth: "100vw",
      margin: 'auto',
      marginTop: 20,
      height: "60vh",
      overflow: 'auto', 
      "& .MuiTableCell-root": {
          border: "none",
          fontSize: 13,
          padding: '7px 16px',
        },
    },
    tableBody: {
      "& .MuiTableCell-root": {
          borderBottom: "1px solid #F9F3FB",
          fontSize: 14,
          padding: '16px',
        },
    },
    tableHead: {
      backgroundColor: '#F5FAFA', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1, 
    },
    tableFooter: {
      position: 'relative',
      width: 'auto',
      backgroundColor: '#f5fafa',
      border: '1px solid #eeeeee',
      PaperShadow: "2px 2px 6px -3px #e0e0e0",
      padding: '5px',
      borderTop: `0px solid gray`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingInline:15
    },
    textField:{
      margin:"20px 15px 0 0 !important"
    },
    selectedRow: {
      backgroundColor: '#FEF4F5',
    },
    flagIcon: {
      color: 'red',
    },
    highlightedText:{
      color:`${theme.palette.primary.main} !important`,
      fontWeight:"600 !important",
      textDecoration:"underline"
    },
    tooltip:{
        background:"#F5FAFD",
        padding:5,
        marginLeft:5,
        borderRadius:8,
        color:`${theme.palette.primary.main} !important`,
    }
  }));

interface Props {
    handleEditButtonClick: (entryId: number) => void;
    updatedData:any
  }
  
  const DashboardTable: React.FC<Props> = ({ handleEditButtonClick,updatedData }) => {
    const classes = useStyles();
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [page, setPage] = useState(0);
    const rowsPerPage = 7;
    const [tableEntries, setTableEntries] = useState<any[]>([]);

    useEffect(() => {
      const storedDataEntries = localStorage.getItem('dataEntries');
      if (storedDataEntries) {
        const updatedVal = JSON.parse(storedDataEntries)
        setTableEntries(updatedVal);
      } else {
        setTableEntries(dataEntries);
      }
    }, [updatedData]);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };

    const handleRowClick = (entryId: number) => {
      setSelectedRow(entryId);
    };

  return (
    <Paper >
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Head</TableCell>
              <TableCell>Input</TableCell>
              <TableCell>Recent Editor</TableCell>
              <TableCell>Updated On</TableCell>
              <TableCell>Previous Changes</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {tableEntries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((entry, index) => (
              <TableRow
                key={index}
                className={selectedRow === index ? 'selectedRow' : ''}
                onClick={() => handleRowClick(index)}
              >
                <TableCell>
                <FlagIcon className={selectedRow === index ? classes.flagIcon : ''} fontSize='small'/>
                </TableCell>
                <TableCell className={classes.highlightedText}>{entry['Head']}</TableCell>
                <TableCell>
                    <>
                    {entry['Input'] && entry['Input'].length>0 && entry['Input'][0]} 
                    {entry['Input'].length>1 && <span className={classes.tooltip}>{ `+ ${entry['Input'].length-1}`} </span>}
                    </>
                </TableCell>
                <TableCell>{entry['Recent Editor']}</TableCell>
                <TableCell>{entry['Updated On']}</TableCell>
                <TableCell>{entry['changesCount']}</TableCell>
                <TableCell><EditIcon onClick={() => handleEditButtonClick(index)} color='primary'/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.tableFooter}>
        <Typography variant="body2">{`Page ${page + 1} of ${Math.ceil(tableEntries.length / rowsPerPage)}`}</Typography>
        <TablePagination
          rowsPerPageOptions={[]}
          count={tableEntries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          component="div"
        />
      </div>
    </Paper>
  );
};

export default DashboardTable;
