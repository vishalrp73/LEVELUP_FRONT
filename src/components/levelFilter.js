import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import './compCSS/levelFilter.css';

const LevelFilter = (props) => {
    return (
        <div className = 'level-filter-wrapper'>
            <ToggleButtonGroup
                size = 'small'
                value = {props.levelFilter}
                exclusive
                onChange = {props.handleLevelFilter}
                color = 'secondary'
            >
                <ToggleButton value = 'Beginner'>Beginner</ToggleButton>
                <ToggleButton value = 'Intermediate'>Intermediate</ToggleButton>
                <ToggleButton value = 'Advanced'>Advanced</ToggleButton>

            </ToggleButtonGroup>

        </div>
    )
}

export default LevelFilter;