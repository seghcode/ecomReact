import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s ease ;
    cursor: pointer;
    border-radius: 10px;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f3fc;
  position: relative;
  border-radius: 10px;


  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
 


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
