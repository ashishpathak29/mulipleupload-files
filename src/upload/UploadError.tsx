import React from 'react';
import {
  createStyles,
  LinearProgress,
  Typography,
  withStyles
} from '@material-ui/core';

const ErrorLinearProgress = withStyles((theme) =>
  createStyles({
    bar: {
      backgroundColor: theme.palette.error.main,
    },
  })
)(LinearProgress);

export function UploadError({ file, onDelete, errors }) {
  return (
    <React.Fragment>
      <ErrorLinearProgress variant="determinate" value={100} />
      {errors.map((error) => (
        <div key={error.code}>
          <Typography color="error">{error.message}</Typography>
        </div>
      ))}
    </React.Fragment>
  );
}
