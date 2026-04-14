import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const Certificates = lazy(() => import("./components/Certificates"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <LoadingProvider>
            <Suspense>
              <MainContainer>
                <Suspense>
                  <CharacterModel />
                </Suspense>
              </MainContainer>
            </Suspense>
          </LoadingProvider>
        }
      />
      <Route
        path="/certificates"
        element={
          <Suspense>
            <Certificates />
          </Suspense>
        }
      />
    </Routes>
    <Analytics />
    </>
  );
};

export default App;
