import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import FormGroup from '@mui/material/FormGroup';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 30),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(32)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70ch',
    },
  },
}));

export default function PrimarySearchAppBar() {


  const [state, setState] = React.useState({
    age: '',
    name: 'MMM',
  });



  const handleChange = (event) =>{
    console.log(event.target.value);
  }
   

  return (

    <Stack spacing={1} sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary"  >
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            BedBath &Beyond
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon   />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="what product can we help you to find?"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography sx={{ minWidth: 60 }}>
            <Button size="large">SIGN IN</Button>
            <IconButton
              size="medium"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onChange={handleChange} 
            >
              <AccountCircle  />
            </IconButton>
              
          </Typography>


          <Typography sx={{ minWidth: 50 }}>
            <IconButton
              color="inherit"
            >
              <Badge color="error">
                <LocalGroceryStoreOutlinedIcon size="large" />
              </Badge>
            </IconButton></Typography>

        </Toolbar>

        <Toolbar>
          
            <FormGroup row>
              <FormControl>
                <NativeSelect
                
                onChange={handleChange}
                >
                  <option value="">Deals</option>
                  <option value={10}>steal</option>
                  <option value={20}>beding</option>
                  <option value={30}>bath</option>
                  <option value={40}>kitchen</option>
                  <option value={50}>outdoor</option>
                  <option value={60}>kitchen</option>
                  <option value={70}>home</option>
                  <option value={80}>dining</option>
                  <option value={90}>health</option>
                  <option value={100}></option>
                  <option value={101}> shop all sale </option>
                  <option value={102}> shop al clearance</option>

                </NativeSelect></FormControl>

              <FormControl>
                <NativeSelect
                
                onChange={handleChange} 
                >
                  <option value="">registery</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
 


              <Typography sx={{ minWidth: 600 }}>
                <NativeSelect 
                
                onChange={handleChange}
                >
                  <option value="">college</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </Typography>



              <Typography sx={{ minWidth: 30 }}>
                <IconButton
                  color="inherit"
                >
                  <  ShoppingBagOutlinedIcon fontSize="medium" color="default" />
                  <NativeSelect 
                  onChange={handleChange}
                  >
                    <option value=""> Store and curbside pickup</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>  </IconButton>
              </Typography>


              <Typography sx={{ minWidth: 30 }}><FormControl>
                <IconButton
                  color="inherit"
                >
                  <  CasesOutlinedIcon fontSize="medium" color="light" />
                  <NativeSelect 
                  onChange={handleChange}
                  >
                    <option value=" ">Same day delivery</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect> </IconButton>

              </FormControl> </Typography>

            </FormGroup>
           
        </Toolbar>

        
        <Toolbar>

          <Button size="small"  color="error">Beding</Button>
          <Button size="small" color="error">Bath </Button>
          <Button size="small" color="error">Kitchen</Button>
          <Button size="small" color="error">Dinning </Button>
          <Button size="small" color="error">Storage </Button>
          <Button size="small" color="error">Curtain</Button>
          <Button size="small" color="error">Home decor</Button>
          <Button size="small" color="error">Baby</Button>
          <Button size="small" color="error">Outdoor</Button>
          <Button size="small" color="error">Furniture</Button>
          <Button size="small" color="error">Luggage</Button>
          <Button size="small" color="error">health</Button>
          <Button size="small" color="error">Gift</Button>
          <Button size="small" color="error">shop</Button>

        </Toolbar>
      </AppBar>

    </Stack >



  );
}


