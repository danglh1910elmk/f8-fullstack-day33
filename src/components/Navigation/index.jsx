import paths from "@/configs/paths";
import { NavLink } from "react-router";

function getNavLinkClass({ isActive }) {
    return isActive ? "current" : "";
}

const items = [
    { path: paths.home, title: "Home" },
    { path: paths.news, title: "News" },
    { path: paths.about, title: "About" },
    { path: paths.login, title: "Login" },
    { path: paths.register, title: "Register" },
];

export default function Navigation() {
    return (
        <nav>
            <ul className="row">
                {items.map((item, index) => (
                    <li key={index.toString()}>
                        <NavLink className={getNavLinkClass} to={item.path}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
