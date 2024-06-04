"use client";
import React, { useState } from "react";
import {useRouter} from "next/navigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
// const subscribers = [
//   { email: "alonzo.kuhic@example.com" },
//   { email: "antoinette.bruen@example.com" },
//   { email: "carl.turner@example.com" },
//   { email: "clark.thompson@example.com" },
//   { email: "crystal.jones@example.com" },
// ];

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));

const SubscribersPage = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [newSubscriberEmail, setNewSubscriberEmail] = useState('');
  const [newUsers, setNewUsers] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewSubscriberEmail('');
  };

  const handleAddSubscriber = () => {
   
    
    if (!validateEmail(newSubscriberEmail)) {
      setEmailError(true);
      return;
    }
    else{
      console.log('New Subscriber Email:', newSubscriberEmail);
      const newSubscriber = { email: newSubscriberEmail };
      setNewUsers([...newUsers, newSubscriber]);
      handleCloseDialog();
    }
   
    
  };

  const handleImportSubscribers = () => {
    router.push("./subscribers/import-subscribers")
  };

  const validateEmail = (email) => {
    // Regular expression to validate email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  return (
    <Container>
      <Box display="flex" justifyContent="flex-end" mb={2} mt={2}>
        <Button variant="contained" color="secondary" sx={{ mr: 1 }} onClick={handleOpenDialog}>
          Add Subscriber
        </Button>
        <Button variant="contained" color="primary" onClick={handleImportSubscribers}>
          Import Subscriber
        </Button>
      </Box>
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        Email
      </Typography>
      <List >
        {newUsers.map((subscriber, index) => (
          <ListItemStyled key={index} divider >
            <Checkbox />

            <ListItemText primary={subscriber.email} />
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%',
              flexWrap: 'wrap',
              }}>
              <IconButton aria-label="delete" sx={{ color: 'red' }}>
                <DeleteIcon />
              </IconButton>
              
              
            </Box>
          </ListItemStyled>
        ))}
      </List>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Subscriber</DialogTitle>
        <DialogContent >
          <TextField label="Email" fullWidth  value={newSubscriberEmail}
            onChange={(e) => {
              setNewSubscriberEmail(e.target.value);
              setEmailError(false); // Reset error state when typing
            }}
            error={emailError}
            helperText={emailError ? 'Invalid email address' : ''} mt={1} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleAddSubscriber}>Add</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SubscribersPage;

{
  /* <>
      <title> Subscribers Page </title>

      <SubscriberView />
    </> */
}
