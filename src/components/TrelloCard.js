import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

function TrelloCard({ text }) {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
            <Typography gutterBottom>
                {text}
            </Typography>
            </CardContent>
        </Card>
    )
}
const styles = {
    cardContainer : {
        marginBottom: 13,
        width:"99%",
        
    }
}
export default TrelloCard
