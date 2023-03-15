import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

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
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`hover:border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(
  PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3  bg-primary-600`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-6 h-6 block`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywriterNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

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
        <SixColumns>
          <Column>
            <ColumnHeading>Accueil </ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Blog
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  FAQs
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Support
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  About Us
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>À propos de nous</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  A propos de Be{" "}
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Notre vision
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Notre cellules{" "}
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Notre equipe
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading href="">Les activités</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Logos
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Events
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Stories
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Office
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading to="/contact">Contact nous</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Contact nous
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  formullaire
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to ">
                  Emplacement
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" aria-label="link to "></Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading> ABONNEZ-VOUS À NOTRE NEWSLETTER</ColumnHeading>
              <SubscribeText>
                Nous livrons des articles de blog de haute qualité rédigés par
                notre professionnelle équipe de contenu
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Votre adresse e-mail" />
                <SubscribeButton type="submit">S'abonner</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg alt="Bougeons ensemble logo" src={LogoImage} />
            <LogoText>Bougeons ensemble.</LogoText>
          </LogoContainer>
          <CopywriterNotice>
            &copy; 2018 Be create by S.I . All Rights Reserved.
          </CopywriterNotice>
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
