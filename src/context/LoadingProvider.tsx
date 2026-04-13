import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading, { setProgress } from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const alreadyLoaded = sessionStorage.getItem("portfolioLoaded") === "true";
  const [isLoading, setIsLoading] = useState(!alreadyLoaded);
  const [loading, setLoading] = useState(alreadyLoaded ? 100 : 0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  useEffect(() => {
    if (alreadyLoaded) {
      document.body.style.overflow = "";
      import("../components/utils/initialFX").then((mod) => {
        if (mod.initialFX) mod.initialFX();
      });
      return;
    }

    document.body.style.overflow = "hidden";

    const { loaded, clear } = setProgress(setLoading);

    const finish = () => {
      loaded().then(() => {
        sessionStorage.setItem("portfolioLoaded", "true");
      });
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      window.removeEventListener("load", finish);
      clear();
    };
  }, []);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
