import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImpactDataRepository from '../repositories/ImpactDataRepository';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        marginTop: "50px"
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    }
}));

export default function Impact() {
    const classes = useStyles();
    var impactDataRepository = new ImpactDataRepository();
    const impactData = impactDataRepository.getImpactDataStatistics();
    const impactSummary = impactDataRepository.getImpactSummary();
    
    return (
        <React.Fragment>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography variant="h3" align="center">{impactSummary.title}</Typography>
                        <Typography variant="h5" align="center" color="textSecondary" style={{ marginTop: 30, marginBottom: 20, color: "#3f51b5" }}>
                            {impactSummary.content}
                        </Typography>
                        <Typography variant="h4" align="center" color="textPrimary">
                            {impactSummary.hashTags}
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {impactData.map(({ id, image, mediaTitle, content, contentTitle }) => (
                            <Grid item key={id} xs={12} sm={2} md={6}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={image}
                                        title={mediaTitle}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h4">{contentTitle}</Typography>
                                        <Typography>
                                            {content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share Story
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}