'use client';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Paper,
    Stack,
    Typography
} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Shadow = () => {
    return (
        <PageContainer title="Tag Manager" description="this is tag">
            <DashboardCard title="Tag Manager">
                <Stack
                    spacing={{xs: 1, sm: 2}}
                    direction="row"
                    useFlexGap
                    sx={{
                        flexWrap: 'wrap',
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                >
                    <CardItem name={"Whale Shark"} position={"Haiwaii"} image={"https://picsum.photos/200/300"}/>
                    <CardItem name={"Cute Shark"} position={"Haiwaii"} image={"https://picsum.photos/200/300"}/>
                    <CardItem name={"Dump Shark"} position={"Haiwaii"} image={"https://picsum.photos/200/300"}/>
                </Stack>
            </DashboardCard>
        </PageContainer>
    );
};

export default Shadow;


const CardItem = ({image, name, position}: any) => {
    return (
        <Card sx={{minWidth: 300}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {position}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}