import { Grid, Typography, Divider, FormControlLabel, Checkbox } from '@material-ui/core';

const Filter = (props) => {
    return (
        <>
            <Grid item container direction = 'column' style = {{ marginLeft: '20px', marginBottom: '2em'}} key = {props.filterTitle} >

                <Typography variant = 'overline' align = 'left'>{props.filterTitle}</Typography>
                <Divider />
                {
                    props.filterArray.map(option => (
                        <FormControlLabel
                            key = {option}
                            control = {<Checkbox checked ={props.filterState.map(item => "--" + item).toString().includes("--" + option)} onChange = {props.filterHandler}
                            name = {option} value = {option} color = 'primary' />}
                            label = {props.filterTitle === 'Year Level' ? option[0] + "-" + option[option.length - 1] : option } />
                    ))
                }


            </Grid>
        </>
    )
}

export default Filter;