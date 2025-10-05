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
                  <Typography
                      variant="h6"
                      sx={{
                          fontWeight: 600,
                          letterSpacing: "0.5px",
                          textShadow: "0px 0px 8px rgba(68,89,116,0.5)",
                          cursor: 'pointer'
                      }}
                      onClick={() => window.open("https://cesium-rust.vercel.app")}
                  >
                      Click here to navigate
                  </Typography>
              </Typography>
          </DashboardCard>
      </PageContainer>
  );
};

export default Component;
