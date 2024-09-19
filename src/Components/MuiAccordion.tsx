import { Accordion, AccordionSummary, AccordionDetails, Stack } from "@mui/material"
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange = (IsExpanded: boolean, panel: string) => {
        setExpanded(IsExpanded ? panel : false);
    }
  return (
    <Stack spacing={1} padding={4}>
        <Accordion expanded={expanded === "panel1"} onChange={(_, IsExpanded) => handleChange(IsExpanded, "panel1")}>
            <AccordionSummary id='panel1-header' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>Panel 01</AccordionSummary>
            <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis tempore minima veniam id eligendi maiores, voluptas magni ad possimus? Dolores voluptatem maxime itaque est omnis veritatis officiis consectetur suscipit corrupti?</AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"} onChange={(_, IsExpanded) => handleChange(IsExpanded, "panel2")}>
            <AccordionSummary id='panel2-header' aria-controls="panel2-content" expandIcon={<ExpandMoreIcon />}>Panel 02</AccordionSummary>
            <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis tempore minima veniam id eligendi maiores, voluptas magni ad possimus? Dolores voluptatem maxime itaque est omnis veritatis officiis consectetur suscipit corrupti?</AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"} onChange={(_, IsExpanded) => handleChange(IsExpanded, "panel3")}>
            <AccordionSummary id='panel3-header' aria-controls="panel3-content" expandIcon={<ExpandMoreIcon />}>Panel 03</AccordionSummary>
            <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis tempore minima veniam id eligendi maiores, voluptas magni ad possimus? Dolores voluptatem maxime itaque est omnis veritatis officiis consectetur suscipit corrupti?</AccordionDetails>
        </Accordion>
    </Stack>
  )
}
