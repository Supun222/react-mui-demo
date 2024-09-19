import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

export const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumbs"
            maxItems={2}
            itemsAfterCollapse={2}
        >
            <Link underline="hover" href="#">
                Home
            </Link>
            <Link underline="hover" href="#">
                Catelog
            </Link>
            <Link underline="hover" href="#">
                Accessories
            </Link>
            <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}
