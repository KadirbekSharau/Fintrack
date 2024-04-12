import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem, TextField, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ImportDocumentForm: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <Box sx={{
      position: 'absolute', 
      top: '40%',         
      left: '50%',        
      transform: 'translate(-50%, -50%)', 
      width: '90%',       
      height: '50%',
      maxWidth: '500px',   
      bgcolor: 'background.paper', 
      p: 3,               
      borderRadius: 2,    
      boxShadow: 3,      
      zIndex: 2,          
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Typography align='center'>Import Document</Typography>
      <Box component="form" noValidate autoComplete="off" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70%', marginTop: 5}}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="name-select-label">Name</InputLabel>
          <Select
            labelId="name-select-label"
            id="name-select"
            value={name}
            label="Name"
            onChange={(event) => setName(event.target.value)}
          >
            <MenuItem value={'Netflix'}>Netflix</MenuItem>
            {/* Add more menu items here */}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 3, marginBottom: 2, borderColor: "#243A72" }}>
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />} sx={{ flexGrow: 1, color: "#243A72" }}>
            Add Invoice
          </Button>
        </Box>
        <Button variant="contained" fullWidth sx={{ mt: 3, backgroundColor: "#243A72" }}>
          Import
        </Button>
      </Box>
    </Box>
  );
};

export default ImportDocumentForm;
