import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

export const MuiTextField = () => {
  const [value, setvalue] = useState<string>("");

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' placeholder="enter your name" variant="outlined" />
        <TextField label='Name' placeholder="enter your name" variant="filled" />
        <TextField label='Name' placeholder="enter your name" variant="standard" />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField 
          label='Small secondary' 
          placeholder="enter your name" 
          size="small" color="primary" 
          required 
          onChange={(e) => setvalue(e.target.value)} 
          error={!value}
          helperText={!value ? 'Required' : "Do not share our passwrod"}
        />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField 
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField 
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  )
}
