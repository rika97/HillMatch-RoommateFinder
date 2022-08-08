import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

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
            <Typography>
               1. Are you a morning person?
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
               2. Do you go to bed early?
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
               3. Are you loud?
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
               4. Is your room often clean?
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
               5. Do you have a good hygiene?
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
               6. Are you social?
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
               7. Are you religious?
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
               8. Are you open to guests?
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
               9. Are you open to sharing possessions?
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
               10. Are you a partier?
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
               11. Are you a smoker?
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
               12. Do you consume alcohol frequently?
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
               13. Are you studious?
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
               14. Do you enjoy cooking?
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
               15. Are you a passive person?
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
               16. Are you agreeable?
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
               17. Are you open minded?
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
               18. Are you planning to go home on weekends?
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
               19. Do you feel okay about things on the floor?
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
               20. How willing are you to clean the bathroom?
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
               21. Are you organized?
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
            Do you smoke often?
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
            Do you drink often?
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
            Do you plan on working during school?
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
            Do you have a car you will be keeping on campus?
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
            Do you want to share groceries together?
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
            Do you smoke?
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
            Do you plan on having friends over often?
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