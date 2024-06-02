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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const WritingPage = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const categories = [
    "science",
    "sports",
    "business",
    "politics",
    "entertainment",
    "technology",
    "world",
    "all",
  ];
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
              <Grid  sx={{display:"flex",flexWrap:"wrap", flexDirection:"row",padding:"10px", justifyContent:"space-between", gap:"15px 0"}} >
                <Grid item xs={12} sm={5} lg={6} md={5} order={{ xs: 1, sm: 'initial' }}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      fontWeight: 700,
                    }}
                  >
                    Title
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={5} lg={6} md={5} order={{ xs: 3, sm: 'initial' }}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      fontWeight: 700,
                    }}
                  >
                    Sub Title
                  </InputLabel>
                </Grid>
                

                <Grid item xs={12} sm={5} lg={5} md={5} order={{ xs: 2, sm: 'initial' }}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Title"
                    size="small"
                    fullWidth
                    autoComplete="off"
                    variant="outlined"
                    
                  />
                </Grid>

                <Grid item xs={12} sm={5} lg={6} md={5} order={{ xs: 4, sm: 'initial' }}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Sub Title"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={5} lg={6} md={5} order={{ xs: 5, sm: 'initial' }}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      fontWeight: 700,
                    }}
                  >
                    Button URL
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={5} lg={6} md={5} order={{ xs: 7, sm: 'initial' }}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      fontWeight: 700,
                    }}
                  >
                    Button Content
                  </InputLabel>
                </Grid>
                

                <Grid item xs={12} sm={5} lg={5} md={5} order={{ xs: 6, sm: 'initial' }}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Button URL"
                    size="small"
                    fullWidth
                    autoComplete="off"
                    variant="outlined"
                    
                  />
                </Grid>

                <Grid item xs={12} sm={5} lg={6} md={5} order={{ xs: 8, sm: 'initial' }}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Button Content"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Content
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  id="outlined-multiline-static"
                  label="Content"
                  multiline
                  fullWidth
                  rows={4}
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
                  URL
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="url"
                  name="url"
                  label="URL"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
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
                  Category
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    {categories.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Author
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="author"
                  name="author"
                  label="Author"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
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
              <Grid item xs={12} sm={4}>
                <Button>
                  <UploadFileIcon />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} />
              <Grid item xs={12} sm={5} />
              <Grid item xs={12} sm={4}>
                <Button variant="contained" sx={{ color: "#ff781f" }}>
                  Save
                </Button>
              </Grid>
              <Grid item xs={12} sm={5} />
            </Grid>
          </Box>
        </Paper>
      </React.Fragment>
    </Container>
  );
};

export default WritingPage;
