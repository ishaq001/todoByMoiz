 import * as React from "react";
 import { Box } from "@mui/system";
 import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { pink } from "@mui/material/colors";
import { Button, Stack } from "@mui/material";


 export default function Checkedbox() {
   const [checked, setChecked] = React.useState(true);

   const handleChange = (event) => {
     setChecked(event.target.checked);
   };

   return (
     <Box
       sx={{
         display: "flow",
         justifyContent: "center",
         margin: "50px",
         border: "5px ",
         textAlign: "center",
       }}
     >
       <Box
         sx={{
           display: "flex",
           justifyContent: "center",
           justifyContent: "space-evenly",
           border: "2px  ",
         }}
       >
         <Box>
           <p>LEARN REACT </p>
         </Box>

         <Box>
           <Checkbox
             checked={checked}
             onChange={handleChange}
             inputProps={{ "aria-label": "controlled" }}
           />
           <EditIcon color="action" />
           <DeleteIcon sx={{ color: pink[500] }} />
         </Box>
       </Box>

       <Box
         sx={{
           display: "flex",
           justifyContent: "center",
           justifyContent: "space-evenly",
           border: "2px ",
         }}
       >
         <Box>
           <p>LEARN REACT </p>
         </Box>

         <Box>
           <Checkbox
             checked={checked}
             onChange={handleChange}
             inputProps={{ "aria-label": "controlled" }}
           />
           <EditIcon color="action" />
           <DeleteIcon sx={{ color: pink[500] }} />
         </Box>
       </Box>

       <Box
         sx={{
           display: "flex",
           justifyContent: "center",
           justifyContent: "space-evenly",
           border: "2px ",
         }}
       >
         <Box>
           <p>LEARN REDUX</p>
         </Box>

         <Box>
           <Checkbox
             checked={checked}
             onChange={handleChange}
             inputProps={{ "aria-label": "controlled" }}
           />
           <EditIcon color="action" />
           <DeleteIcon sx={{ color: pink[500] }} />
         </Box>
       </Box>

       {/* <Box
         sx={{
           display: "flex",
           justifyContent: "center",
           justifyContent: "space-evenly",
           border: "2px  ",
         }}
       >
         <Box>
           <p>PORTFOLIO REACT</p>
         </Box>

         <Box>
           <Checkbox
             checked={checked}
             onChange={handleChange}
             inputProps={{ "aria-label": "controlled" }}
           />
           <EditIcon color="action" />
           <DeleteIcon sx={{ color: pink[500] }} />
         </Box>
       </Box> */}

       <Box
         sx={{
           display: "flex",
           justifyContent: "center",
           justifyContent: "space-evenly",
           border: "2px  ",
         }}
       >
         <Box>
           <p>LEARN REACT</p>
         </Box>

         <Box>
           <Checkbox
             checked={checked}
             onChange={handleChange}
             inputProps={{ "aria-label": "controlled" }}
           />
           <EditIcon color="action" />
           <DeleteIcon sx={{ color: pink[500] }} />
         </Box>
       </Box>

       <Box
         sx={{
           display: "flex",
           justifyContent: "center",
         }}
       >
         <Stack spacing={2} direction="row">
           <Button
             style={{ width: "250px", height: "40px" }}
             variant="contained"
             color="success"
           >
             DELETE DONE TASK
           </Button>

           <Button
             style={{ width: "300px", height: "40px", color: "success" }}
             variant="contained"
             color="success"
           >
             DELETE ALL TASK
           </Button>
         </Stack>
       </Box>
     </Box>
   );
 }