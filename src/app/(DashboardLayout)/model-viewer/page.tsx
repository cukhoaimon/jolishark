'use client';
import {Box, FormControl, InputLabel, MenuItem, Select, Stack} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

import ModelViewer from '../components/majik/ModelViewer';
import React from "react";


const ModelMapper: Record<string, string> = {
    cute: 'shark.glb'
};

const Shadow = () => {
    const [model, setModel] = React.useState('cute');

    const handleChange = (event: any) => {
        setModel(event.target.value as string);
    };

    return (
        <PageContainer title="Shark Visuallizer" description="this is Shark Visuallizer">
            <DashboardCard title="Shark Visuallizer" action={
                <Box px={2} width={200}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={model}
                            label="Model"
                            onChange={handleChange}
                        >
                            <MenuItem value={"cute"}>Cute</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            }>
                <Stack
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ModelViewer
                        url={`https://raw.githubusercontent.com/cukhoaimon/jolishark/main/public/models/${ModelMapper[model]}`}
                        width={1000}
                        height={500} placeholderSrc={undefined} onModelLoaded={undefined}
                        modelYOffset={-0.4}
                    />
                </Stack>

            </DashboardCard>
        </PageContainer>
    );
};

export default Shadow;
