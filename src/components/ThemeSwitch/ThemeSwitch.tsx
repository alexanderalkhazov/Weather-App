import { Switch } from "@mui/material";
import { toggleTheme } from "../../features/themeSlice";
import { useDispatch } from "react-redux";

const ThemeSwitch = () => {

    const dispatch = useDispatch();
    return (
        <Switch
            onClick={() => dispatch(toggleTheme())}
        />
    )
};

export default ThemeSwitch;