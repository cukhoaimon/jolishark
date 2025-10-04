'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from "../components/shared/DashboardCard";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

const Component = () => {
  return (

      <PageContainer
          title="Live View"
          description="This is Live view"
      >
          <DashboardCard title="Live view">
              <Typography>
                  <Link href="https://cesium-rust.vercel.app" rel="noopener noreferrer">
                      Click here to navigate
                  </Link>
              </Typography>
          </DashboardCard>
      </PageContainer>
  );
};

export default Component;
