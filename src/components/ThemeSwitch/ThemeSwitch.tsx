import { Switch } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../slices/themeSlice";

const ThemeSwitch = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Switch aria-label='switch' onClick={() => dispatch(toggleTheme())}/>
        </>
    )
}

export default ThemeSwitch