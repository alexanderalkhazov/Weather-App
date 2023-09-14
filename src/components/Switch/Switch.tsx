import { Switch } from "@mui/material";
import { AnyAction } from "redux";
import { useAppDispatch } from "../../state/store/store";

interface SwitcherProps {
    switchFunction : () => AnyAction;
}

const Switcher = ({ switchFunction }: SwitcherProps) => {

    const dispatch = useAppDispatch();

    return (
        <Switch
            onClick={() => dispatch(switchFunction())}
        />
    )
}

export default Switcher