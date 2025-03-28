import { Outlet, Link } from "react-router-dom";
import { useTheme } from "../themes/ThemeContext";

const Button = () => {
    const {theme, changeTheme } = useTheme();
    return (
        <section className={`App ${theme}`}>
            <Outlet />
            <form>
                <button type="button" value={theme} onClick={() => changeTheme(theme)}>Cambiar Tema</button>
            </form>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/myjob'>My Job</Link>
                <Link to='/profile'>Profile</Link>
            </nav>
        </section>
    )
}

export default Button