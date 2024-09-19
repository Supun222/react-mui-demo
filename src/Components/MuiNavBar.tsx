import { AppBar, Toolbar,IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon  from "@mui/icons-material/CatchingPokemon";
import { MuiDrawers } from "./MuiDrawers";

export const MuiNavBar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <Stack direction='row' sx={{ flexGrow: 1, alignItems: "center" }}>
                <MuiDrawers />
                <IconButton size="small" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" >
                    POKEMONAPP
                </Typography>
            </Stack>
            <Stack direction='row' spacing={2}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">About Us</Button>
            </Stack>
            {/* Menu button is used for add sub categories */}
        </Toolbar>
    </AppBar>
  )
}
