import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="coolstuff" element={<Coolstuff />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="coolstuff">Cool Stuff</Link> |{' '}
        <Link to="dashboard">Dashboard</Link>
        <Link to="missing">Not yet implemented</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Coolstuff() {
  return <h1>Cool Stuff</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function NotFound() {
  return <h1>Nothing here</h1>;
}

export default App;
