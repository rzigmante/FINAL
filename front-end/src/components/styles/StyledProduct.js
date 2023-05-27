import styled from "styled-components";

export const Card = styled.div`
  height: 370px;
  width: 270px;
  background-color: #f0efef;
  border-radius: 5px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: grid;
  max-width: 900px;
  margin: 10px auto 40px;
  padding: 0 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;

export const CardImage = styled.img`
  width: 270px;
  height: 170px;
  margin-top: 40px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  padding-right: 25px;
  padding-bottom: 11px;
  margin-top: 10px;
  margin-left: ${(props) => (props.withDiscount ? "100px" : "150px")};
  background-color: white;
`;

export const DiscountedPrice = styled.s`
  padding-right: 15px;
  color: #ded9d9;
`;

export const Title = styled.p`
  text-align: start;
  margin-left: 15px;
  margin-bottom: 0px;
  font-size: 13px;
  font-weight: 600;
`;

export const BrandTitle = styled(Title)`
  color: darkgrey;
`;

export const TitleContainer = styled.div`
  margin-top: 10px;
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 190px 70px;
  gap: 10px;
`;

const CornerItem = styled.div`
  text-align: center;
  padding: 12px 10px;
  font-size: 15px;
  font-weight: 700;
  height: 49px;
  width: 70px;
`;

export const Discount = styled(CornerItem)`
  background-color: #fbb89f;
`;

export const New = styled(CornerItem)`
  border-radius: 50%;
  background-color: #c2f4ee;
`;
