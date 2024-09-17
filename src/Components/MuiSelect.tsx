import { Box, TextField, MenuItem } from "@mui/material"
import React, { useState } from "react"

export const MuiSelect = () => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<string[]>([]);
  console.log({countries})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setCountry(e.target.value as string);
    const value = e.target.value;
    
    setCountries( typeof value === 'string' ? value.split(',') : value);
  }

  return (
    <Box width='200px'>
        <TextField 
            label='Select country' 
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
                multiple: true
            }}
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}
