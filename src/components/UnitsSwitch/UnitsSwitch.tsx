import { Switch } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { toggleUnits } from '../../features/unitsSlice';

const UnitsSwitch = () => {
  
    const dispatch = useAppDispatch();

    return (
        <Switch
            onClick={() => dispatch(toggleUnits())}
        />
    )
}

export default UnitsSwitch