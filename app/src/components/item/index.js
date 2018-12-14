import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default ({title, enterprise, type, location, since, link}) => (
    <div>
      <Card>
        <CardContent>
          <div style={{float: 'left', maxWidth: '50%', textAlign: 'left'}}>
            <Typography variant="subtitle1" >
              {title}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
              {enterprise} - {type} <Button onClick={() => window.location = link}>More...</Button>
            </Typography>
          </div>
          <div style={{float: 'right', textAlign: 'right'}}>
            <Typography  color="textSecondary" gutterBottom>
              {location}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
              {since}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <br />
    </div>
  )
