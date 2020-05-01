import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { TagFactory } from './TagFactory';

const useStyles = makeStyles((theme) => ({
    toggleContainer: {
        margin: theme.spacing(2, 0),
    },
}));


type TagToggleProp = {
    book: number,
    chapter: number,
    start: string | null,
    end: string | null,
    cleanSelection: () => void
}


export const TagToggle: React.FunctionComponent<TagToggleProp> = props => {

    const [tagType, setTagType] = React.useState<string | null>(null);

    const handleTagType = (event: React.MouseEvent<HTMLElement, MouseEvent>, newTagType: string | null) => {
        if (newTagType !== null) {
            setTagType(newTagType);
        }
    };

    const classes = useStyles();

    return (
        <div className="tag-factory">
            <Grid item sm={12} md={12}>
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup
                        className="tag-factory-toggle-button-group"
                        value={tagType}
                        exclusive
                        onChange={handleTagType}
                        aria-label="tag type">
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="what"
                            aria-label="tag type what">
                            <p>What</p>
                        </ToggleButton>
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="who"
                            aria-label="tag type who">
                            <p>Who</p>
                        </ToggleButton>
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="where"
                            aria-label="tag type where">
                            <p>Where</p>
                        </ToggleButton>
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="when"
                            aria-label="tag type when" >
                            <p>When</p>
                        </ToggleButton>
                        <ToggleButton
                            className="tag-factory-toggle-button"
                            value="how"
                            aria-label="tag type how" >
                            <p>How</p>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
            <TagFactory
                tagType={tagType}
                book={props.book}
                chapter={props.chapter}
                start={props.start}
                end={props.end}
                cleanSelection={props.cleanSelection}/>
        </div>
    );
}