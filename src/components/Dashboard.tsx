import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import Navbar from './Navbar';
import { makeStyles } from "@mui/styles";
import DashboardTable from './DashboardTable';
import EditDialog from './EditDialog';
import { dataEntries } from '../common';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "85vh",
    marginTop: "10px",
    borderTopLeftRadius: "10px",
    background: "#fff",
    padding: "3rem 2rem",
    position: 'relative',
  },
  entityContainer: {
    color: 'gray',
    fontSize: "14px !important"
  },
}));

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const selectedEntity = 'Tesla India Corp';
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [updatedData, setUpdatedData] = useState<any[]>([]);

  const handleEditButtonClick = (entryId: number) => {
    const storedData = localStorage.getItem('dataEntries');
    const data = storedData ? JSON.parse(storedData) : [];

    const { Input, type, label, Head, changesCount } = data ? data[entryId] : dataEntries[entryId];
    setFormData({ Input, type, label, Head, changesCount });
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box className={classes.container}>
      <Navbar />
      <Typography className={classes.entityContainer}>{`All Entities > ${selectedEntity}`}</Typography>
      <h1>{selectedEntity}</h1>
      <DashboardTable handleEditButtonClick={handleEditButtonClick} updatedData={updatedData} />
      <EditDialog open={dialogOpen} onClose={handleCloseDialog} formData={formData} setUpdatedData={setUpdatedData} setFormData={setFormData} />
    </Box>
  );
};

export default Dashboard;
