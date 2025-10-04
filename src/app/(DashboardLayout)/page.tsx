'use client'
import {Grid, Box} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import RawEcharts from "@/app/(DashboardLayout)/components/charts/RawEcharts";

const Dashboard = () => {
    return (
        <PageContainer title="Dashboard" description="Water Quality Monitoring Dashboard">
            <Box>
                <Grid container spacing={3}>
                    {/* Main Chart — Temperature */}
                    <Grid size={6}>
                        <RawEcharts
                            option={{
                                title: {text: "Water Temperature (°C)"},
                                tooltip: {trigger: "axis"},
                                xAxis: {
                                    type: "category",
                                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                                },
                                yAxis: {
                                    type: "value",
                                    name: "°C",
                                },
                                series: [
                                    {
                                        name: "Temperature",
                                        data: [27.5, 28.2, 29.1, 30.3, 29.7, 28.4, 27.9],
                                        type: "line",
                                        smooth: true,
                                        areaStyle: {},
                                    },
                                ],
                            }}
                        />
                    </Grid>

                    {/* Side Charts */}
                    <Grid size={6}>
                        <RawEcharts
                            option={{
                                title: {text: "Chlorophyll Concentration (µg/L)"},
                                tooltip: {trigger: "axis"},
                                xAxis: {
                                    type: "category",
                                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                                },
                                yAxis: {
                                    type: "value",
                                    name: "µg/L",
                                },
                                series: [
                                    {
                                        name: "Chlorophyll",
                                        data: [5.2, 5.5, 6.1, 5.8, 6.4, 6.0, 5.6],
                                        type: "bar",
                                        itemStyle: {borderRadius: 6},
                                    },
                                ],
                            }}
                        />
                    </Grid>

                    <Grid size={6}>
                        <RawEcharts
                            option={{
                                title: {text: "Dissolved Oxygen (mg/L)"},
                                tooltip: {trigger: "axis"},
                                xAxis: {
                                    type: "category",
                                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                                },
                                yAxis: {
                                    type: "value",
                                    name: "mg/L",
                                },
                                series: [
                                    {
                                        name: "Oxygen",
                                        data: [7.8, 8.1, 8.3, 8.5, 8.2, 8.0, 7.9],
                                        type: "line",
                                        smooth: true,
                                        symbol: "circle",
                                        symbolSize: 8,
                                    },
                                ],
                            }}
                        />
                    </Grid>

                    <Grid size={6}>
                        <RawEcharts
                            option={{
                                title: {text: "Flow Rate (m³/s)"},
                                tooltip: {trigger: "axis"},
                                xAxis: {
                                    type: "category",
                                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                                },
                                yAxis: {
                                    type: "value",
                                    name: "m³/s",
                                },
                                series: [
                                    {
                                        name: "Flow Rate",
                                        data: [2.1, 2.3, 2.5, 2.7, 2.6, 2.4, 2.2],
                                        type: "line",
                                        smooth: true,
                                        areaStyle: {
                                            opacity: 0.3,
                                        },
                                    },
                                ],
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    );
};

export default Dashboard;
