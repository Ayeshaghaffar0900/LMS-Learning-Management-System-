import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import StudentListDashboard from "../components/StudentListDashboard";
import TeacherListDashboard from "../components/TeacherListDashboard";
import CourseListDashboard from "../components/CourseListDashboard";

const Dashboard = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4">LMS Dashboard</Typography>
                {/* <DarkModeToggle /> */}
            </Box>
        </Box>
    );
};

export default Dashboard;