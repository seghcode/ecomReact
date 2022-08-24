import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: '10px', flexDirection: 'column'})}

`;
const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    ${mobile({ height: '40vh'})}

`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: '10px'})}

`;
const Title = styled.h1`
    font-weight: 300;
    ${mobile({ textAlign: 'center'})}

`;
const Desc = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
font-weight: 100;
font-size: 35px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: '100%'})}

`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: '100%'})};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;

const Button = styled.button`
    padding: 15px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #5ecece;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background: teal;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Lorem.</Title>
                    <Desc>Lorem ipsum dolor sit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur voluptatibus consectetur rem optio ipsum debitis explicabo? Saepe pariatur perferendis nemo consectetur recusandae, ullam fugit repellat. In, nulla! Earum, voluptatum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam esse alias, aspernatur quibusdam, iure libero nulla rerum eveniet repellat officia ducimus ab sequi molestias cum tempora a, ea saepe.
                    </Desc>
                    <Price> $ 20 </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="red"/>
                            <FilterColor color="yellow"/>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                            <FilterSizeOption>Xs</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>Xl</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
