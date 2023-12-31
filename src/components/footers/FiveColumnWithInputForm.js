import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/logo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as Instgrameicon } from "images/instagram-icon.svg";
import { ReactComponent as LinkdinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as TiktokIcon } from "images/tiktok-icon.svg";
// import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
// import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
// import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between `;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-6 h-6 block`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

// const CopywriterNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <ThreeColRow>
          <LogoContainer>
            <LogoImg alt="Bougeons ensemble logo" src={LogoImage} />
            <LogoText>Bougeons ensemble.</LogoText>
          </LogoContainer>
         
       
           
          <LogoContainer>
            <p>Bougeons ensemble pour aider les autres.</p>
            
          </LogoContainer>
          {/* <CopywriterNotice>
            &copy;Pour contribuer à ce projet{" "}
            <a
              style={{ color: "#333" }}
              href="https://github.com/Bougeons-ensemble/Bougeons-ensemble"
              alt="link to github"
            >
              Github repo
            </a>
          </CopywriterNotice> */}
          <SocialLinksContainer>
            <SocialLink
              aria-label="link to facebook"
              href="https://www.facebook.com/bougeons.ensemble28"
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink aria-label="link to twitter" href="https://twitter.com">
              <TiktokIcon />
            </SocialLink>
            <SocialLink
              aria-label="link to linkedin"
              href="https://www.linkedin.com/in/bougeons-ensemble-505370255/"
            >
              <LinkdinIcon />
            </SocialLink>
            <SocialLink
              aria-label="link to instagram"
              href="https://instagram.com/bougeons_ensemble?igshid=OTJlNzQ0NWM="
            >
              <Instgrameicon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
