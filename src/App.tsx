import React from 'react';
import './App.css';
import Timer from "./components/Timer";
import {Card, CardActionArea, CardContent, Typography, CardMedia, Grid} from "@mui/material";

function App() {
    return (
        <>
            <Grid container spacing={4} paddingLeft={20} paddingTop={5}>
                <Grid item xs={3}>
                    <Card sx={{maxWidth: 245}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/01/210910570-4.jpg?fit=805%2C405&ssl=1"
                                alt="Jerusalem"
                            />
                            <CardContent>
                                <Typography align={"center"} noWrap gutterBottom variant="h5" component="div">
                                    Jerusalem
                                </Typography>
                                <Typography align={"center"} variant="body2" color="text.secondary">
                                    <Timer timezone={'Asia/Jerusalem'}/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{maxWidth: 245}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://a.cdn-hotels.com/gdcs/production0/d1645/0c67ff64-cf54-4886-91dd-89aa601463af.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                                alt="Australia"
                            />
                            <CardContent>
                                <Typography align={"center"} gutterBottom variant="h5" component="div">
                                    Australia
                                </Typography>
                                <Typography align={"center"} variant="body2" color="text.secondary">
                                    <Timer timezone={'Australia/Sydney'}/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{maxWidth: 245}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://travelfoot.com/wp-content/uploads/2020/06/how-to-go-from-copenhagen-to-amsterdam.jpg"
                                alt="Amsterdam"
                            />
                            <CardContent>
                                <Typography align={"center"} gutterBottom variant="h5" component="div">
                                    Amsterdam
                                </Typography>
                                <Typography align={"center"} variant="body2" color="text.secondary">
                                    <Timer timezone={'Europe/Amsterdam'}/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{maxWidth: 245}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg"
                                alt="New_York"
                            />
                            <CardContent>
                                <Typography align={"center"} gutterBottom variant="h5" component="div">
                                    New-York
                                </Typography>
                                <Typography align={"center"} variant="body2" color="text.secondary">
                                    <Timer timezone={'America/New_York'}/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default App;


