import {
    BrowserRouter as Router,
    Link, Routes,
    Switch,
    Route
} from "react-router-dom";
import Main from "./component/main";
import Menu from "./component/menu"

export default function NavPage() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Main />}>
                        </Route>
                        <Route path="/menu" element={<Menu />}>
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}