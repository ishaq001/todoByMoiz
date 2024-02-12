import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
 
 import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';

export default function Navbar() {

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
        padding: theme.spacing(0, 32),
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
            paddingLeft: `calc(1em + ${theme.spacing(34)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '50ch',
            },
        },
    }));

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark  ">

                    <div className="collapse navbar-collapse mx-auto col-sm navbar-nav text-light">
                        <div className='w-25 p-3'>
                            <h2>BedBath &Beyonds</h2>
                        </div>
                        <div className="text-dark bg-white">
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="What product can we help you find?"
                                    inputProps={{ 'arial-label': 'search' }}
                                />
                            </Search>
                        </div>

                        <div className="mh-100 navbar " >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className='nav-item'>
                                    <a className="nav-link active text-white" aria-current="page" href="/">
                                        <h3>Sign In</h3>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <Box
                            sx={{
                                '& > :not(style)': {
                                    m: 2,
                                },
                            }}
                        >
                            < PersonOutlineOutlinedIcon fontSize="large" color="light" />
                            < LocalGroceryStoreOutlinedIcon fontSize="large" color="light" />
                        </Box> </div> </nav>




                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0 text-light">
                        <div className="dropdown">
                            <button className="btn btn-grey-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Deals
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button className="btn btn-grey-dark dropdown-toggle text-white " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop by room
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button className="btn btn-grey-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Registry
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>


                        <div className="dropdown">
                            <button className="btn btn- grey-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                College
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>


                        <div className="dropdown">
                            <button className="btn btn- grey-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Inspiration
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>

                        </div>
                    </div>

               

                    <nav className="navbar navbar-expand-lg navbar-light bg-primary.dark">
                        <div className="  navbar-nav   text-light">
                            <div class="dropdown">
                                <div>
                                <Box
                            sx={{
                                '& > :not(style)': {
                                    m: 0,
                                },
                            }}
                        >
                                            <  CasesOutlinedIcon fontSize="medium" color="light" />
                                            <Button class="btn btn- grey-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Same day delivery
                                            </Button>
                                         </Box>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/">Action</a></li>
                                        <li><a class="dropdown-item" href="/">Another action</a></li>
                                        <li><a class="dropdown-item" href="/">Something else here</a></li>
                                    </ul>  </div>
                            </div>



                            <div class="dropdown">
                                <div>
                                <Box
                            sx={{
                                '& > :not(style)': {
                                    m: 0,
                                },
                            }}
                        >
                                            <  ShoppingBagOutlinedIcon fontSize="medium" color="default" />
                                            <Button class="btn btn- grey-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Store and curbside pickup
                                            </Button>

                                        </Box> 
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/">Action</a></li>
                                        <li><a class="dropdown-item" href="/">Another action</a></li>
                                        <li><a class="dropdown-item" href="/">Something else here</a></li>
                                    </ul></div>
                            </div>
                        </div>
                    </nav>



                </nav>

                        <nav className="navbar container-fluid navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">

                                <div className="collapse navbar-collapse bg-light" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">bedding</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">bath</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">kitchen</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">dining</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">storage & cleaning</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">curtain & window</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">home decor</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">baby & kids</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">outdoor</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">furniture</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">luggage pet & more</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">health & beauty</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">gift</a>
                                        </li>
                                        <li className='nav-item'>
                                            <a className="nav-link active" aria-current="page" href="#">shop by brand</a>
                                        </li>




                                    </ul>
                                </div>
                            </div>
                        </nav>
                     
            </div>
        </>

    );
}



  