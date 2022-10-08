import {
    BrowserRouter as Router,
    Link, Routes,
    Switch,
    Route
} from "react-router-dom";
import Main from "./component/main";
import Menu from "./component/menu/menu";
import BookTable from "./component/bookTable/bookTable";
import ScrollToTop from "./component/scrollTop";

export default function NavPage() {
    return (
        <div>
            <div>
                <Router>
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" element={<Main />}>
                            </Route>
                            <Route path="/menu" element={<Menu />}>
                            </Route>
                            <Route path="/bookatable" element={<BookTable/>}>
                            </Route>
                        </Routes>
                    </ScrollToTop>
                </Router>
            </div>
        </div>
    );
}