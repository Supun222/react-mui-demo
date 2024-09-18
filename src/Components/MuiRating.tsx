import { Stack, Rating } from "@mui/material"
import { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

export const MuiRating = () => {
    const [rate, setRate] = useState<number | null>(null);
    console.log(rate);

    const handleChange = (e: React.ChangeEvent<{}>, newRate: number | null) => {
        setRate(newRate);
    }
  return (
    <Stack spacing={2}>
        <Rating 
        value={rate} 
        onChange={handleChange} 
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
      />
    </Stack>
  )
}
