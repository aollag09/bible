import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
    toggleContainer: {
        margin: theme.spacing(2, 0),
    },
}));


export default function TagFactory() {
    const [tagType, setTagType] = React.useState('tagType');


    const handleAlignment = (event: React.MouseEvent<HTMLElement, MouseEvent>, newTagType: string | null) => {
        if (newTagType !== null) {
            setTagType(newTagType);
        }
    };

    const classes = useStyles();

    return (
        <div className="tag-factory">
            <h2> Create Tag</h2>
            <Grid item sm={12} md={6}>
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup
                        className="tag-factory-toggle-button-group"
                        value={tagType}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="tag type">
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="what"
                            aria-label="tag type what">
                            <p>What</p>
                        </ToggleButton>
                        <ToggleButton className="tag-factory-toggle-button" value="who" aria-label="tag type who">
                            <p>Who</p>
                        </ToggleButton>
                        <ToggleButton className="tag-factory-toggle-button" value="where" aria-label="tag type where">
                            <p>Where</p>
                        </ToggleButton>
                        <ToggleButton className="tag-factory-toggle-button" value="when" aria-label="tag type when" >
                            <p>When</p>
                        </ToggleButton>
                        <ToggleButton className="tag-factory-toggle-button" value="how" aria-label="tag type how" >
                            <p>How</p>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
        </div>
    );
}