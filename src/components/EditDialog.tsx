import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import PlInput from './common/PlInput';
import { dataEntries } from '../common';

const EditDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  formData: any;
  setUpdatedData:any;
  setFormData: (updatedFormData: any) => void;
}> = ({ open, onClose, formData, setFormData, setUpdatedData }) => {
  const [errors, setErrors] = useState<Array<boolean>>(Array.isArray(formData.Input) ? Array(formData.Input.length).fill(false) : []);

  useEffect(() => {
    // Retrieve initial dataEntries from localStorage
    const storedData = localStorage.getItem('dataEntries');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const fieldType = formData.type;
    
    let isValid = true;
    if (fieldType === 'number') {
      isValid = /^\d+$/.test(value); 
    } else if (fieldType === 'email') {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); 
    }
    
    setFormData((prevData: any) => ({
      ...prevData,
      Input: Array.isArray(prevData.Input)
        ? prevData.Input.map((prevValue: string, i: number) => (i === index ? value : prevValue))
        : value
    }));

    setErrors((prevErrors: Array<boolean>) => prevErrors.map((error: boolean, i: number) => (i === index ? !isValid : error)));
  };

  const handleSubmitForm = () => {
    const entry = localStorage.getItem('dataEntries') || JSON.stringify(dataEntries);
    const updatedDataEntries = (JSON.parse(entry) as any[]).map((entry: any) => {

      if (entry.Head === formData.Head) {
        return {
          ...entry,
          Input: formData.Input,
          type: formData.type,
          label: formData.label,
          changesCount: formData.changesCount+1
        };
      }
      return entry;
    });
  
    // Update dataEntries array in local storage
    localStorage.setItem('dataEntries', JSON.stringify(updatedDataEntries));
    const updatedInput = JSON.stringify(updatedDataEntries)
    setUpdatedData(updatedInput);
  
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Details</DialogTitle>
      <DialogContent>
        {Array.isArray(formData.Input) && formData.Input.length > 1 ? (
          formData.Input.map((value: string, index: number) => (
            <React.Fragment key={index}>
              {index === 0 && (
                <>
                  <h5 style={{ marginBottom: 0 }}>email-id</h5>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: "gray" }}>Values in email</span>
                </>
              )}
              <PlInput
                label={formData.label ? formData.label[index] : `Field ${index + 1}`}
                value={value}
                name={`field${index}`} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event, index)}
                id={''}
                error={errors[index]}
                helperText={errors[index] ? 'Invalid input' : ''}
                disabled={true}
              />
            </React.Fragment>
          ))
        ) : (
          <>
            <PlInput
              label={formData.label || formData.Input}
              value={formData.Input}
              name="field"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event, 0)}
              id={''}
              error={errors[0]}
              helperText={errors[0] ? 'Invalid input' : ''}
              type={formData.type}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmitForm} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
