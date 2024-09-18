import { Box, Switch, FormControlLabel } from "@mui/material"
import React, { useState } from "react"

export const MuiSwitch = () => {
    const [mode, setMode] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMode(e.target.checked);
    }
  return (
    <Box>
        <FormControlLabel label='Dark mode' control={<Switch checked={mode} onChange={handleChange} />} />
    </Box>
  )
}
