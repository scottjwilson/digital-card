import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { styled } from "twin.macro";
const BackgroundPic = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: strapiProfile {
          background {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 2000
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                  quality: 50
                )
              }
            }
          }
        }
      }
    `
  );
  // const { placeholderImage } = useStaticQuery(
  //   graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "bg.jpeg" }) {
  //         childImageSharp {
  //           gatsbyImageData(
  //             width: 2000
  //             placeholder: DOMINANT_COLOR
  //             formats: [AUTO, WEBP, AVIF]
  //             quality: 50
  //           )
  //         }
  //       }
  //     }
  //   `
  // );
  const pluginImage = getImage(
    placeholderImage.background.localFile.childImageSharp.gatsbyImageData
  );

  console.log(placeholderImage);

  return (
    <StyledBgImage
      image={pluginImage}
      style={{ minWidth: 200, minHeight: 200 }}
    >
      {children}
    </StyledBgImage>
  );
};

const StyledBgImage = styled(BgImage)`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export default BackgroundPic;
