// app/dashboard/user/page.jsx
"use client";
import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const addImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    console.log("Image added successfully", data);
  } catch (error) {
    console.error("Error uploading image:", error.message);
  }
};

const WritingPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    buttonURL: "",
    buttonContent: "",
    content: "",
  });
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      addImage(selectedFile);
    } else {
      alert("Please select a file first");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitFormData = async (formData) => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      const data = await response.json();
      console.log("Form data submitted successfully", data);
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmitClick = () => {
    submitFormData(formData);
    if (selectedFile) {
      addImage(selectedFile);
    } 
    setOpen(true);
    console.log(formData);
    console.log(selectedFile);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const subscriberSubmitClick = ()=>{

  }
  return (
    <Container>
      <React.Fragment>
        <Paper
          elevation={2}
          sx={{ marginRight: "2%", marginLeft: "2%" }}
          md={{ marginRight: "2%", marginLeft: "2%" }}
        >
          <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ paddingBottom: 3 }}>
              Post Settings
            </Typography>
            <Grid
              container
              spacing={3}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  padding: "10px",
                  justifyContent: "space-between",
                  gap: "15px 0",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={6}
                  md={5}
                  order={{ xs: 1, sm: "initial" }}
                >
                  <InputLabel
                    sx={{
                      display: "flex",
                      fontWeight: 700,
                    }}
                  >
                    Title
                  </InputLabel>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={6}
                  md={5}
                  order={{ xs: 3, sm: "initial" }}
                >
                  <InputLabel
                    sx={{
                      display: "flex",
                      fontWeight: 700,
                    }}
                  >
                    Sub Title
                  </InputLabel>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={5}
                  md={5}
                  order={{ xs: 2, sm: "initial" }}
                >
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Title"
                    size="small"
                    fullWidth
                    autoComplete="off"
                    variant="outlined"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={6}
                  md={5}
                  order={{ xs: 4, sm: "initial" }}
                >
                  <TextField
                    required
                    id="subTitle"
                    name="subTitle"
                    label="Sub Title"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    value={formData.subTitle}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={6}
                  md={5}
                  order={{ xs: 5, sm: "initial" }}
                >
                  <InputLabel
                    sx={{
                      display: "flex",
                      fontWeight: 700,
                    }}
                  >
                    Button URL
                  </InputLabel>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={6}
                  md={5}
                  order={{ xs: 7, sm: "initial" }}
                >
                  <InputLabel
                    sx={{
                      display: "flex",
                      fontWeight: 700,
                    }}
                  >
                    Button Content
                  </InputLabel>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={5}
                  md={5}
                  order={{ xs: 6, sm: "initial" }}
                >
                  <TextField
                    required
                    id="buttonURL"
                    name="buttonURL"
                    label="Button URL"
                    size="small"
                    fullWidth
                    autoComplete="off"
                    variant="outlined"
                    value={formData.buttonURL}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={6}
                  md={5}
                  order={{ xs: 8, sm: "initial" }}
                >
                  <TextField
                    required
                    id="buttonContent"
                    name="buttonContent"
                    label="Button Content"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    value={formData.buttonContent}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    fontWeight: 700,
                  }}
                >
                  Content
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10} lg={12}>
                <TextField
                  id="content"
                  name="content"
                  label="Content"
                  multiline
                  fullWidth
                  rows={6}
                  value={formData.content}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Img Upload
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <input type="file" onChange={handleFileChange} />
              </Grid>
              {/* <Grid item xs={12} sm={4}>
                <Button onClick={}>
                  <UploadFileIcon />
                </Button>
              </Grid> */}
              {/* <Grid item xs={12} sm={6} /> */}
              {/* <Grid item xs={12} sm={5} /> */}
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  sx={{ color: "#ff781f" }}
                  onClick={handleSubmitClick}
                >
                  Send
                </Button>
              </Grid>
              <Grid item xs={12} sm={5} />
              <Grid item xs={12} sm={5} />
            </Grid>
          </Box>
        </Paper>
        {/* Popup Modal */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>Send Newsletter</DialogTitle>
          <DialogContent>
          <Box
              sx={{
                width: { xs: '100%', sm: 700 },
                // height: { xs: 500, sm: 500 },
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="body1" paragraph>
                Thank you for using newsletter platform. Please select the subscribers.To send the newsletter
              </Typography>
              <FormControlLabel
                control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
                label="Send Newletter To All Subscribers"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Close
            </Button>
            <Button onClick={subscriberSubmitClick} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </Container>
  );
};

export default WritingPage;