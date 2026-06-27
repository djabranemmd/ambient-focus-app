import { lazy, Suspense } from "react";
import Loader from "./components/ui/Loader";
import ErrorBoundary from "./components/ui/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;