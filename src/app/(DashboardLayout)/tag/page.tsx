'use client';
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Stack,
    Typography,
    CardActions
} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import Link from "next/link";


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
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <CardItem
                        id="whale-shark"
                        name="Whale Shark"
                        position="Ningaloo Reef, Australia"
                        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    />
                    <CardItem
                        id="great-white"
                        name="Great White Shark"
                        position="Guadalupe Island, Mexico"
                        image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
                    />
                    <CardItem
                        id="hammerhead"
                        name="Hammerhead Shark"
                        position="Bimini, Bahamas"
                        image="https://images.unsplash.com/photo-1521207418485-99c705420785"
                    />
                    <CardItem
                        id="lemon-shark"
                        name="Lemon Shark"
                        position="Florida Keys, USA"
                        image="https://images.unsplash.com/photo-1518837695005-2083093ee35b"
                    />
                    <CardItem
                        id="tiger-shark"
                        name="Tiger Shark"
                        position="Coral Sea, Australia"
                        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    /> </Stack>
            </DashboardCard>
        </PageContainer>
    );
};

export default Shadow;


const CardItem = ({id, image, name, position}: any) => {

    return (
        <Card sx={{minWidth: 300}}>
            <CardMedia
                sx={{height: 140}}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    {position}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "flex-end"}}>
                <Button
                    component={Link}
                    href={`/tag/${id}?name=${name}`}
                    variant="contained"
                    color="primary"
                >
                    View Details
                </Button>
            </CardActions>
        </Card>
    )
}