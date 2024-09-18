import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react";

type Skill = {
    id: number,
    label: string
}

const skills = ['HTML', "CSS", "JavaScript", "Java", "C#"];

const skillOptions = skills.map((skill, index: number) => ({
    id: index + 1,
    label: skill,
}))

export const MuiAutoComplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);

    console.log(skill);



  return (
    <Stack spacing={4} width='250px'>
        <Autocomplete 
            options={skills}
            renderInput={(params) => <TextField {...params} label="Skills"/>}
            onChange={(e: any, newValue: string | null) => setValue(newValue)}
            value={value}
            
        />
        <Autocomplete 
            options={skillOptions}
            renderInput={(params) => <TextField {...params} label="Skills"/>}
            onChange={(e: any, newSkill: Skill | null) => setSkill(newSkill)}
            value={skill}
            
        />
    </Stack>
  )
}
