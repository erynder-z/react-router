import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Hello from About!</h1>
      {/*  <a href="/">back</a> */}
      <Link to="/"> Toppage</Link> | <Link to="/profile">goto Profile</Link> |{' '}
      <Link to="/home">goto Home</Link>
    </div>
  );
};

export default About;
