import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Hello from Profile!</h1>
      {/* <a href="/">back</a> */}
      <Link to="/"> Toppage</Link> | <Link to="/home">goto Home</Link> |{' '}
      <Link to="/about">goto About</Link>
    </div>
  );
};

export default Profile;
