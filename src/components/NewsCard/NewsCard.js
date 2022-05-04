import React from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const NewsCard = ({articles:{ description, publishedAt, Source, tittle, url, urlToImages},i}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={urlToImages ||'https://opennews.org/media/img/opennews_logo_share.png'}/>
        <div>
             <Typography varient="body2" color="textSecondary" Component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
             <Typography varient="body2" color="textSecondary" Component="h2">{Source.name}</Typography>
        </div>
        <Typography gutterBottom varient="h5">{tittle}</Typography>
        <CardContent>
          <Typography varient="body2" color="textSecondary" Component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" Color="primary">Learn More</Button>
        <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard
