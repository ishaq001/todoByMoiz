 import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { pink } from "@mui/material/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField"; 
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
  

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div> 
      <br/>
    <ol>
      {todos.map((t) => (
        <li className="singleTodo">
          <span   key={t.id}>
            {t.todo}
          </span> 
        
           <Box sx={{ display: "flex", justifyContent: "center", Width:'100%' }}>
            <EditIcon color="action" onClick={() => handleEdit(t.id)}/>
            <DeleteIcon
              sx={{ color: pink[500] }}
               onClick={() => handleDelete(t.id)}
            /></Box>
           
        </li>
      ))}
    </ol> 

     <Box
         sx={{
           display: "flow",
           justifyContent: "center",
         }}
       >
         <Stack spacing={7} direction="row">
           <Button
             style={{ width: "315px", height: "40px" }}
             variant="contained"
             color="success"
           >
             DELETE DONE TASK
           </Button>
 
           <Button 
             style={{ width: "315px", height: "40px", color: "success" }}
             variant="contained"
             color="success"
           >
             DELETE ALL TASK
           </Button>
         </Stack>
       </Box> 
       </div> 
  );
}; 

export default TodoList;