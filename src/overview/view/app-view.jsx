"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import AppWidgetSummary from "../app-widget-summary";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// ----------------------------------------------------------------------
const data = [
  { name: "Jan", subscribers: 10000 },
  { name: "Feb", subscribers: 20000 },
  { name: "Mar", subscribers: 30000 },
  { name: "Apr", subscribers: 40000 },
  { name: "May", subscribers: 50000 },
  { name: "Jun", subscribers: 70000 },
  { name: "Jul", subscribers: 80000 },
];

export default function AppView() {
  return (
    <Container maxWidth="xl" >
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total Subscribers"
            total={714000}
            color="success"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total Clicks"
            total={1352831}
            color="info"
            icon={
              <img alt="icon" src="/assets/icons/glass/icons8-click-72.png" />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total Mails Send"
            total={1723315}
            color="warning"
            icon={
              <img alt="icon" src="/assets/icons/glass/icons8-mail-70.png" />
            }
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TotalSubscribersGraph />
        </Grid> */}
      </Grid>
      <Grid style={{ marginTop: '20px' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="subscribers"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Container>
  );
}
