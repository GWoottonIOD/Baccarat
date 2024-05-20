import React, { useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { readQuery } from '../../axios/AxiosFunctions';

export default function DropDown(props) {
  useEffect(() => {
    // console.log('options',props.options)
  },[])

  const dropDownOptions = props.options.map((option) => ({
    label: option.name.toString(), // Convert the ID to a string
    value: option.id, // Keep the ID as a number
  }));

  return (
    <>
    <Autocomplete
        disablePortal
        id={props.name}
        onChange={(e, selectedOption) => {
          props.setOption(selectedOption.label);
        }}
        options={dropDownOptions}
        getOptionLabel={(option) => option.label}
        sx={{ width: 195, margin: '0 auto', textAlign: 'center' }}
        renderInput={(params) => <TextField {...params} sx={{ textAlign: 'center' }}  label={props.name} />}
      />
    </>
  );
}