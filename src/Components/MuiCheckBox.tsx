import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

export const MuiCheckBox = () => {
  const [accpeptTnC, setAccpeptTnC] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccpeptTnC(e.target.checked);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
        setSkills([...skills, e.target.value]);
    }
    else {
        setSkills(skills.filter((skills) => skills !== e.target.value));
    }
  };
  
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and  conditons"
          control={<Checkbox checked={accpeptTnC} onChange={handleChange} />}
        />

        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Html"
              value="html"
              control={
                <Checkbox checked={skills.includes('html')} onChange={handleSkillChange} />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="javascript"
              control={
                <Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
