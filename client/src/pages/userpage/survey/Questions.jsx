import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography, Autocomplete, TextField } from '@mui/material';
import listOfDepartments from '../../../components/Resources/majors';
import listOfHousings from '../../../components/Resources/housings';
import listOfLlc from '../../../components/Resources/llc';

const Questions = () => {
  const marks = [
    {
        value: 0,
        label: 'Not at all',
      },
      {
        value: 5,
        label: 'Somewhat',
      },
      {
        value: 10,
        label: 'Very',
      },
  ]
  return (
    <div>
        <Box>
            <Typography align="center" variant='h6' color="primary" sx={{mt: 3}} >Background Info</Typography>
            <Typography>
               1. Department
            </Typography>
            <Autocomplete
                disablePortal
                fullWidth
                loading
                options={listOfDepartments}
                // onChange={(event, newMajor) => {
                //     setFormData({ ...formData, gender: newMajor})
                // }}
                renderInput={(params) => <TextField {...params} label="Department" />}
            />

            <Typography>
               2. Level of Studies
            </Typography>
            <Autocomplete
                disablePortal
                fullWidth
                loading
                options={["Freshman", "Sophomore", "Junior", "Senior", "MS", "PhD", "PostDoc"]}
                // onChange={(event, newMajor) => {
                //     setFormData({ ...formData, gender: newMajor})
                // }}
                renderInput={(params) => <TextField {...params} label="Level of Studies" />}
            />

            <Typography>
               3. Selected/Planned Housing
            </Typography>
            <Autocomplete
                disablePortal
                fullWidth
                loading
                options={listOfHousings}
                // onChange={(event, newMajor) => {
                //     setFormData({ ...formData, gender: newMajor})
                // }}
                renderInput={(params) => <TextField {...params} label="Housing" />}
            />

            <Typography>
               4. Home location
            </Typography>
            <Autocomplete
                disablePortal
                fullWidth
                loading
                options={["NorCal", "SoCal", "Out of State", "International"]}
                // onChange={(event, newMajor) => {
                //     setFormData({ ...formData, gender: newMajor})
                // }}
                renderInput={(params) => <TextField {...params} label="Home" />}
            />

            <Typography>
               5. Are you in a LLC?
            </Typography>
            <Autocomplete
                disablePortal
                fullWidth
                loading
                options={listOfLlc}
                // onChange={(event, newMajor) => {
                //     setFormData({ ...formData, gender: newMajor})
                // }}
                renderInput={(params) => <TextField {...params} label="Living Learning Community" />}
            />
            <Typography>
               6. Are you in a student organization?
            </Typography>
            <Autocomplete
                disablePortal
                fullWidth
                loading
                options={["None", "Sorrority", "Fraternity", "Career Related", "Creative", "Culture & Identity", "Environment", "Faith", "Service", "Sports & Outdoors"]}
                // onChange={(event, newMajor) => {
                //     setFormData({ ...formData, gender: newMajor})
                // }}
                renderInput={(params) => <TextField {...params} label="Student Organizations" />}
            />

             <Typography>
               7. Gender
            </Typography>
            <Autocomplete
                disablePortal
                fullWidth
                loading
                options={["Female", "Male", "Other"]}
                // onChange={(event, newMajor) => {
                //     setFormData({ ...formData, gender: newMajor})
                // }}
                renderInput={(params) => <TextField {...params} label="Gender" />}
            />



            
        </Box>
        <Typography align="center" variant='h6' color="primary" sx={{mt: 3}} >Living Lifestyle</Typography>
        <Box>
            <Typography>
               8. Do you go to bed early?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               9. Are you a morning person?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               10. Are you loud?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               11. Do you have a good hygiene?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               12. Are you religious?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               13. Are you open to guests?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               14. Are you open to sharing possessions?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               15. Are you a smoker?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               16. Do you consume alcohol frequently?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               17. Are you studious?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               18. Do you enjoy cooking?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               19. Are you planning to go home on weekends?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               20. Do you feel okay about things on the floor?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               21. How willing are you to clean the bathroom?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
              22. Is your room often clean?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            23. Do you smoke often?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            24. Do you drink often?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            25. Do you mind if others drink?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            26. Do you mind if others smoke cigarettes?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            27. Do you mind if others smoke weed?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            28. Do you plan on working during school?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            29. Do you have a car you will be keeping on campus?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            30. Do you want to share groceries together?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            31. Are you sensitive to noise?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            32. Are you sensitive to heat?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            33. Do you tend to eat with your mouth open?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>





        <Typography align="center" variant='h6' color="primary" sx={{mt: 3}} >Social Lifestyle</Typography>
        <Box>
            <Typography>
               34. Are you social?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            35. Do you plan on having friends over often?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            36. Do you plan on bringing a S/O or a special person to the apartment?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            37. Would you rather hang out with your current friend group than make new friends?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            38. Would you hang out with your roommate if you vibe rather than keep to yourself?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            39. If a roommate tries to keep talking to you when you want some alone time, would you pretend you can't hear them instead of being honest with them?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               40. Are you a partier?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               41. Are you a passive person?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
               42. Are you agreeable?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
                43. Are you open minded?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>

        <Box>
            <Typography>
            44. Do you consider yourself frugal?
            </Typography>
            <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            />
        </Box>




    </div>
  )
}

export default Questions;