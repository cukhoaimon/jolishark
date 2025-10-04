'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from "../components/shared/DashboardCard";
import { Grid, Paper, styled } from "@mui/material";
import { Masonry } from "@mui/lab";
import Image from "next/image";

const heights = [150,90, 70, 110, 150, 130, 100, 150, 200, 300, 120, 123, 132,536];


const Shadow = () => {
  return (

    <PageContainer title="Ocean Watch" description="this is Ocean Watch">

        <DashboardCard title="Ocean Watch">
            <Grid container spacing={2}>
                <Masonry columns={4} spacing={1}>
                    {heights.map((height, index) => (
                        <Image src="https://picsum.photos/seed/picsum/200/300" alt="logo" height={height + 70} width={174} priority />
                    ))}
                </Masonry>
            </Grid>
        </DashboardCard>
    </PageContainer>
  );
};

export default Shadow;
