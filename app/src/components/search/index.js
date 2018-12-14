import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import fetchAllJobs from '../../actions';

const styles = theme => ({
  button: {
    height: 10,
    fontFamily: ['Helvetica', 'Arial', 'sans-serif'],
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    background: '#869ca9',
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer'
},
  container: {
    backgroundColor: '#f8f8f8',
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  checkbox: {
    margin: theme.spacing.unit,
    fontSize: 13,
    padding: '35px 12px',
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

function CustomizedInputs(props) {
  const {
    classes,
    description,
    location,
    loading,
    checked,
    dispatch,
    changeInput,
    changeBox
  } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
          Job Description
        </InputLabel>
        <InputBase
          id="description"
          name="description"
          onChange={changeInput}
          defaultValue={description}
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
          Location
        </InputLabel>
        <InputBase
          id="location"
          name="location"
          onChange={changeInput}
          defaultValue={location}
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
      </FormControl>
      <div className={classes.checkbox}>
        <input type="checkbox" onChange={changeBox} value={checked} name="fullTime" /> Full Time Only
      </div>
      <div className={classes.checkbox}>
        <Button className={classes.button} onClick={() => {
          loading()
          dispatch(fetchAllJobs({description, location, fullTime: checked, loading}))}
        } >
          Search
        </Button>
      </div>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const Search = withStyles(styles)(CustomizedInputs);
