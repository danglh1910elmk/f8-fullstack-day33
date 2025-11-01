import { Route, BrowserRouter, Routes } from "react-router";

import "./App.css";
import routes from "@/routes";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) => {
                        const Layout = route.layout;

                        return (
                            <Route key={index.toString()} element={<Layout />}>
                                {route.children.map((child, index) => {
                                    const Component = child.component;

                                    return (
                                        <Route
                                            key={index.toString()}
                                            path={child.path}
                                            element={<Component />}
                                        />
                                    );
                                })}
                            </Route>
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
