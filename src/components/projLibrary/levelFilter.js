import './compCSS/levelFilter.css';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const LevelFilter = (props) => {
    return (
        <div className = 'level-filter-wrapper'>
            <ToggleButtonGroup
                size = 'small'
                value = {props.levelFilter}
                onChange = {props.handleLevelFilter}
                color = 'secondary' exclusive >

                    <ToggleButton value = 'Beginner'>Beginner</ToggleButton>
                    <ToggleButton value = 'Intermediate'>Intermediate</ToggleButton>
                    <ToggleButton value = 'Advanced'>Advanced</ToggleButton>

                </ToggleButtonGroup>
        </div>
    )
}

export default LevelFilter;