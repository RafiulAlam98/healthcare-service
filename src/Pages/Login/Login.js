import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth/useAuth';

const Login = () => {
  const {
    user,
    googleSignIn,
    handleEmail,
    handlePassword,
    error,
    signInWithEmailPassword,
  } = useAuth();

  return (
    <>
      <Container className="mt-5">
        <h1>Please Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form>

        <Button
          onClick={signInWithEmailPassword}
          variant="primary"
          type="submit"
        >
          LOGIN
        </Button>
        <br />
        <br />
        <Button onClick={googleSignIn} variant="info" type="submit">
          Google Sign In
        </Button>
        <div>
          <Link to="/register">Not Yet Register?</Link>
        </div>
        {!user?.displayName && <p className="text-danger">{error}</p>}
      </Container>
    </>
  );
};

export default Login;
