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

export default function TagPage(props: PageProps) {

    const searchParams = useSearchParams();
    const name = searchParams.get("name");

    return (
        <PageContainer title={name ?? "Unknown"} description="This is tag details page">
            <DashboardCard title={name ?? "Unknown"}>
                <Grid container spacing={3}>
                    {/* Shark Image */}
                    <Grid size={6}>
                        <ImageCarouselCard items={[
                            { src: "/images/sharks/selfie.png", takenAt: "2025-09-30T10:12:00Z", alt: "Whale shark selfie" },
                            { src: "/images/sharks/tiger.png",  takenAt: "2025-09-30T12:45:00Z", alt: "Tiger shark" },
                            { src: "/images/sharks/reef.png",   takenAt: "2025-10-01T08:03:00Z", alt: "Reef scene" },
                        ]} />
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