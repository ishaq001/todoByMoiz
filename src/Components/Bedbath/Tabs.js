import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import PrimarySearchAppBar from './practice';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, bgcolor: 'info' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor:'primary.light', borderBottom: 1, borderColor: 'light' , width: 1400 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary.dark"
          textColor="primary.dark"
          
        >
          <Tab label="Bed bath&Beyond" {...a11yProps(0)} />
          <Tab label="buybuy baby" {...a11yProps(1)} />
          <Tab label="harmon" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      
        <TabPanel value={value} index={0} dir={theme.direction}>
          {PrimarySearchAppBar()}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {Navbar2()}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
           {Navbar3()}
        </TabPanel>
  </Box>
  );
}
