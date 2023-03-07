import { Box } from "@mui/system";
import React from "react";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import MoneyIcon from '@mui/icons-material/Money';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button, Grid } from "@mui/material";
 

export default function Help() {

    return (
        <Box
            sx={{
                '& > :not(style)': {
                    m: 8, height: 300, width: 100,
                },
            }}
        >   <h2>HELP</h2>

          
            <Button>
                < BusinessCenterIcon sx={{ fontSize: 50 }} />SHOP AT ZARA</Button>

            <Button>
                < ApartmentIcon sx={{ fontSize: 50 }} />SHIPPING</Button>

            <Button>
                < MoneyIcon sx={{ fontSize: 50 }} />PAYMENT</Button>

            <Button>
                < ProductionQuantityLimitsIcon sx={{ fontSize: 50 }} />PRODUCT</Button>

            <Button>
                < LocalShippingIcon sx={{ fontSize: 50 }} />SHOP & COMPANY</Button>

            {/* <Button>
                < DataUsageIcon sx={{ fontSize: 50 }} />RETURN </Button> */}
        </Box>


    );
}



