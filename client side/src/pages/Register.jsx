import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
    ${mobile({ width: '80%'})}

`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    // border: 2px solid;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    outline: none;
    padding: 15px 20px;
    color: #fff;
    background-color: teal;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 5px;

    &:hover{
        background-color: #1ccaca;
    }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type="text" required placeholder="Full Name" />
          <Input type="email" required placeholder="Email" />
          <Input type="password" required placeholder="Password" />
          <Input type="password" required placeholder="Confirm Password" />

          <Agreement>
            By creating an account you accepting all our  <b>terms condition. and privacy policies</b>
            <p>Already Have An Account <Link to="/login">LOGIN</Link> </p>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
