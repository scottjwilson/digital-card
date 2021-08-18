import { GatsbyImage } from "gatsby-plugin-image";

import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  ${tw`max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0`}
`;

const Profile = styled.div`
  ${tw`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0`}
`;

const Column = styled.div`
  ${tw`p-4 md:p-12 text-center lg:text-left`}
`;

const ProImageWrapper = styled.div`
  ${tw`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center`}
`;

const Title = styled.h1`
  ${tw`text-3xl font-bold pt-8 lg:pt-0`}
`;

const Bar = styled.div`
  ${tw`mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25`}
`;

const Info = styled.p`
  ${tw`pt-4 text-base font-bold flex items-center justify-center lg:justify-start`}
`;
const Location = styled.p`
  ${tw`pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start`}
`;
const Description = styled.p`
  ${tw`pt-8 text-sm`}
`;

const SocialWrapper = styled.div`
  ${tw`mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between`}
`;

const LinkWrapper = styled.div`
  ${tw` p-2 flex flex-col md:space-y-3 space-y-2 py-4`}
`;
const Lin = styled.a`
  ${tw`bg-green-700 hover:bg-green-600 text-sm text-white font-bold py-2 px-4 rounded-full text-center hover:shadow-2xl transform motion-safe:hover:scale-110 transition-all duration-200`}
`;

const BigImage = styled(GatsbyImage)`
  ${tw`rounded-none lg:rounded-lg shadow-2xl hidden lg:block`}
`;
const SmallImage = styled(GatsbyImage)`
  border-radius: 50%;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0)
    ${tw`block rounded-full lg:hidden shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center`};
`;

export {
  Wrapper,
  Profile,
  Column,
  ProImageWrapper,
  Title,
  Bar,
  Info,
  Location,
  Description,
  SocialWrapper,
  LinkWrapper,
  Lin,
  BigImage,
  SmallImage,
};
