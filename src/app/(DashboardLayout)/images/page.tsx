'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from "../components/shared/DashboardCard";
import { Grid, Paper, styled } from "@mui/material";
import { Masonry } from "@mui/lab";

const heights = [150,90, 70, 110, 150, 130, 100, 150];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: (theme.vars || theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Shadow = () => {
  return (

    <PageContainer title="Shadow" description="this is Shadow">

        <DashboardCard title="Shadow">
            <Grid container spacing={2}>
                <Masonry columns={4} spacing={2}>
                    {heights.map((height, index) => (
                        <Item key={index} sx={{ height }}>
                            {index + 1}
                        </Item>
                    ))}
                </Masonry>
            </Grid>
        </DashboardCard>
    </PageContainer>
  );
};

export default Shadow;
