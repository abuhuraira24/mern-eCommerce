import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 65px;
  background: transparent;
  width: 100%;
  height: 100%;
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;
export const H5 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Cart = styled.div`
  padding: 25px;
  background: #fff;
  margin-top: 1.5rem;
  border-radius: 10px;
  //  border: 1px solid #ddd;
`;

export const Hr = styled.hr``;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  border-top: 1px solid #ededed;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: #eaf7ff;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
`;

export const Span = styled.span`
  color: #868aa5;
  margin-left: 1rem;
`;

export const Button = styled.div`
  color: #fff;
  background: #116dff;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
`;