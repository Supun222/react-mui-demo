import { Stack, Button, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text" href="https://google.com">Text</Button>
            <Button variant="contained">Text</Button>
            <Button variant="outlined">Text</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant="contained" color="primary" >primary</Button>
            <Button variant="contained" color="secondary">secondary</Button>
            <Button variant="contained" color="error">error</Button>
            <Button variant="contained" color="warning" >warning</Button>
            <Button variant="contained" color="success" >success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant="contained" color="primary" size='small'>primary</Button>
            <Button variant="contained" color="secondary" size='medium'>secondary</Button>
            <Button variant="contained" color="error" size='large'>error</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant="contained" endIcon={<SendIcon />} size='small' disableRipple>primary</Button>
            <Button variant="contained" startIcon={<SendIcon />} size='medium' disableElevation>secondary</Button>
            <IconButton aria-label="send" color="success" size="small">
                <SendIcon />
            </IconButton>
        </Stack>
    </Stack>
  )
}
