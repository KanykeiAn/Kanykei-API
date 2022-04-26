import Header from "./components/Navbar/Header";

import TodoContextProvider from "./contexts/TodoContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <TodoContextProvider>
        <Header />
        <MainRoutes />
      </TodoContextProvider>
    </>
  );
}

export default App;
