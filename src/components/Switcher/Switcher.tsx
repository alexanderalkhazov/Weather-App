import { Switch } from "@mui/material";
import { AnyAction } from "redux";
import { useAppDispatch } from "../../state/store/store";

interface Props {
    switchFunction : () => AnyAction;
}

const Switcher = ({ switchFunction }: Props) => {

    const dispatch = useAppDispatch();

    return (
        <Switch
            onClick={() => dispatch(switchFunction())}
        />
    )
}

export default Switcher