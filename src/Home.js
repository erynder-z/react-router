import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Hello from Home!</h1>
      {/* <a href="/">back</a> */}
      <Link to="/"> Toppage</Link> | <Link to="/profile">goto Profile</Link> |{' '}
      <Link to="/about">goto About</Link>
    </div>
  );
};

export default Home;
