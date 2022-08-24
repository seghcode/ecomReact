import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: 'center'})}

`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: '80%'})}

`;
const Input = styled.input`
    border: none;
    outline: none;
    flex: 5;
    padding-left: 20px;

    &:focus{
        border-bottom: 1px solid #278f8f;
    }
`;
const Button = styled.button`
    flex: 2;
    border: none;
    background: teal;
    color: #fff;
    cursor: pointer;
    margin-left: 1rem;

    &:hover{
        background: #278f8f;
    }
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing </Desc>
            <InputContainer>
                <Input placeholder="Your Email" type="email" required />
                <Button type="submit">
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
