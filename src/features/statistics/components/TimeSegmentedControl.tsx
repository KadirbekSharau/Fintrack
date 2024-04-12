import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, styled } from '@mui/material';

// Styled version of the ToggleButton to apply custom spacing and styling
const StyledToggleButton = styled(ToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: '#283D72', // Adjust the color to match the selected state
  },
  '&:hover': {
    backgroundColor: 'rgba(40, 61, 114, 0.04)', // Light hover for buttons, adjust as needed
  },
  // Spacing between buttons, adjust as needed
  margin: '10px 10px',
  width: '25%',
});

const TimeSegmentedControl: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('day');

  const handleTimeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTime: string,
  ) => {
    if (newTime !== null) {
      setSelectedTime(newTime);
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedTime}
      exclusive
      onChange={handleTimeChange}
      aria-label="time selection"
      sx={{ 
        width: '100%',
        justifyContent: 'center', 
        display: 'flex', 
        backgroundColor: 'transparent', // Ensures the background of the group is transparent
      }}
    >
      <StyledToggleButton value="day" aria-label="day">
        Day
      </StyledToggleButton>
      <StyledToggleButton value="week" aria-label="week">
        Week
      </StyledToggleButton>
      <StyledToggleButton value="month" aria-label="month">
        Month
      </StyledToggleButton>
      <StyledToggleButton value="year" aria-label="year">
        Year
      </StyledToggleButton>
    </ToggleButtonGroup>
  );
};

export default TimeSegmentedControl;


