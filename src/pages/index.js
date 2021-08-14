import React from "react";
import Layout from "./../components/Layout";
import tw, { styled } from "twin.macro";

const BigAssTitle = styled.h1`
  ${tw`text-6xl`}
`;

const NotSoBigTitlte = tw.h1`
  text-4xl font-bold
`;
const IndexPage = () => (
  <Layout>
    <BigAssTitle>hey there i'm cool and shit</BigAssTitle>
    <NotSoBigTitlte>Realshit</NotSoBigTitlte>
  </Layout>
);

export default IndexPage;
