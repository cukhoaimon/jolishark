"use client"
import {useSearchParams} from "next/navigation";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import TravelRoutesMap from "@/app/(DashboardLayout)/components/charts/TravelRoutesMap";
import React from "react";
import Image from "next/image";
import DynamicTimeSeriesChart from "@/app/(DashboardLayout)/components/charts/DynamicTimeSeriesMap";
import ImageCarouselCard from "@/app/(DashboardLayout)/components/container/ImageCarouselCard";


type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

const data = [
    {src : "/images/sharks/100533.png", takenAt: "2025-10-05T10:05:33Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.35.png", takenAt: "2025-10-05T10:05:35Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.36.png", takenAt: "2025-10-05T10:05:36Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.38.png", takenAt: "2025-10-05T10:05:38Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.40.png", takenAt: "2025-10-05T10:05:40Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.41.png", takenAt: "2025-10-05T10:05:41Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.42.png", takenAt: "2025-10-05T10:05:42Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.43.png", takenAt: "2025-10-05T10:05:43Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.44.png", takenAt: "2025-10-05T10:05:44Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.45.png", takenAt: "2025-10-05T10:05:45Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.46.png", takenAt: "2025-10-05T10:05:46Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.05.47.png", takenAt: "2025-10-05T10:05:47Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.04.png", takenAt: "2025-10-05T10:06:04Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.06.png", takenAt: "2025-10-05T10:06:06Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.07.png", takenAt: "2025-10-05T10:06:07Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.08.png", takenAt: "2025-10-05T10:06:08Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.10.png", takenAt: "2025-10-05T10:06:10Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.11.png", takenAt: "2025-10-05T10:06:11Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.13.png", takenAt: "2025-10-05T10:06:13Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.14.png", takenAt: "2025-10-05T10:06:14Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.16.png", takenAt: "2025-10-05T10:06:16Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.17.png", takenAt: "2025-10-05T10:06:17Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.18.png", takenAt: "2025-10-05T10:06:18Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.19.png", takenAt: "2025-10-05T10:06:19Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.21.png", takenAt: "2025-10-05T10:06:21Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.22.png", takenAt: "2025-10-05T10:06:22Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.24.png", takenAt: "2025-10-05T10:06:24Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.25.png", takenAt: "2025-10-05T10:06:25Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.27.png", takenAt: "2025-10-05T10:06:27Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.28.png", takenAt: "2025-10-05T10:06:28Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.29.png", takenAt: "2025-10-05T10:06:29Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.31.png", takenAt: "2025-10-05T10:06:31Z"},
    {src : "/images/sharks/Screenshot 2025-10-05 at 10.06.32.png", takenAt: "2025-10-05T10.06.32"}
]

export default function TagPage(props: PageProps) {

    const searchParams = useSearchParams();
    const name = searchParams.get("name");

    return (
        <PageContainer title={name ?? "Unknown"} description="This is tag details page">
            <DashboardCard title={name ?? "Unknown"}>
                <Grid container spacing={3}>
                    {/* Shark Image */}
                    <Grid size={6}>
                        <ImageCarouselCard items={data} />
                    </Grid>

                    {/* Travel Routes Map */}
                    <Grid size={6}>
                        <Card
                            sx={{
                                boxShadow: 3,
                                borderRadius: 3,
                                overflow: "hidden",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <TravelRoutesMap/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={4}>
                        <Card
                            sx={{
                                boxShadow: 3,
                                borderRadius: 3,
                                overflow: "hidden",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <DynamicTimeSeriesChart title="Water Temperature (°C)" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={4}>
                        <Card
                            sx={{
                                boxShadow: 3,
                                borderRadius: 3,
                                overflow: "hidden",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <DynamicTimeSeriesChart
                                    title="Oxygen Level Simulation (%)"
                                    days={200}
                                    updateIntervalMs={500}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={4}>
                        <Card
                            sx={{
                                boxShadow: 3,
                                borderRadius: 3,
                                overflow: "hidden",
                                height: "100%",
                            }}
                        >
                            <CardContent>
                                <DynamicTimeSeriesChart
                                    title="pH Level"
                                    days={90}
                                    updateIntervalMs={2000}
                                    initialValue={7}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </DashboardCard>
        </PageContainer>
    );
}