import { LoginPage } from "./pages/LoginPage.tsx";
import { Route, Routes } from "react-router-dom";
import { RouteList } from "./constants/routeList.ts";
import { BasePage } from "./pages/BasePage.tsx";

function App() {
  return (
    <div className={"h-full  w-full  min-h-screen"}>
      <Routes>
        {RouteList.map((item, i) => {
          const Element = item.element;
          return (
            <Route
              path={item.path}
              key={i}
              element={
                <BasePage type={item.type}>
                  <Element />
                </BasePage>
              }
            />
          );
        })}
      </Routes>
      <LoginPage />
    </div>
  );
}

export default App;
