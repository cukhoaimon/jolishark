'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from "../components/shared/DashboardCard";
import { Grid } from "@mui/material";

const Shadow = () => {
  return (

    <PageContainer title="Shadow" description="this is Shadow">

        <DashboardCard title="Shadow">
            <Grid container spacing={2}>
            </Grid>
        </DashboardCard>
    </PageContainer>
  );
};

export default Shadow;
