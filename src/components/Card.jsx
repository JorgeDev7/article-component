import { useState } from 'react';
import drawers from '../assets/drawers.jpg';
import michelle from '../assets/avatar-michelle.jpg';
import shareIcon from '../assets/icon-share.svg';
import shareIconWhite from '../assets/icon-share-white.svg';
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import pinterest from '../assets/icon-pinterest.svg';

import styled from '@emotion/styled';

const CardContainer = styled.div`
    background-color: #FFF;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin: 0 1.5rem;
    overflow: hidden;

    @media (min-width: 768px) { 
        display: grid;   
        grid-template-columns: 1fr 2fr;
        align-items: center;
        overflow: visible;
    }
`;

const Flex = styled.div`
    position: relative;

    @media (min-width: 768px) { 
        flex: 2;
    }
`;

const Drawer = styled.div`
    background-image: url(${drawers});
    height: 20rem;
    width: 100%;
    background-size: cover;
    background-position: center center;

    @media (min-width: 768px) { 
        height: 100%;
        background-position: left center;
        flex: 1;
        border-bottom-left-radius: 1rem;
        border-top-left-radius: 1rem;
    }
`

const Section1 = styled.div`
    padding: 3rem 3rem 1rem 3rem;
`;

const Title = styled.h1`
    color: rgb(72, 85, 106);
    font-size: 1.7rem;
    padding-bottom: 1.2rem;
    font-weight: 700;

    @media (min-width: 768px) { 
        font-size: 2.5rem;
    }
`;

const Paragraph = styled.p`
    color: rgb(109, 127, 151);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6;

    @media (min-width: 768px) { 
        font-size: 1.8rem;
    }
`;

const Section2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.5rem 3rem;

    &.off {
        animation-name: shareOff;
        animation-duration: 300ms;
        animation-timing-function: ease-in;
    }

    @media (min-width: 768px) { 
        &.off {
            animation: none;
        }

    }

    @keyframes shareOff {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) { 
        gap: 2rem;
    }
`;

const Avatar = styled.img`
    width: 5rem;
    border-radius: 100%;

    @media (min-width: 768px) { 
        width: 5.5rem;
    }
`;

const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
`

const AvatarName = styled.h3`
    color: rgb(72, 85, 106);
    font-weight: 700;
    font-size: 1.3rem;

    @media (min-width: 768px) { 
        font-size: 1.5rem;
    }
`;

const AvatarDate = styled.p`
    color: rgb(158, 175, 194);
    font-weight: 500;
    font-size: 1.3rem;
    @media (min-width: 768px) { 
        font-size: 1.5rem;
    }
`;

const ShareContainer = styled.div`
    background-color: rgb(236, 242, 248);
    padding: 1rem;
    border-radius: 100%;
    cursor: pointer;    

    &.activeShare {
        background-color: rgb(72, 85, 106);
    }
`;

const ShareIcon = styled.img``;

const SocialContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgb(72, 85, 106);
    padding: 1.5rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) { 
        width: auto;
        bottom: 9rem;
        right: -8rem;
        overflow: visible;
        z-index: 100;
        border-radius: 1rem;
        padding: 2rem 4rem;

        &::after {
            content: '';
            width: 0; 
            height: 0; 
            border-top: 20px solid rgb(72, 85, 106);
            border-right: 20px solid transparent;
            border-left: 20px solid transparent;
            position: absolute;
            bottom: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &.on {
        animation-name: shareOn;
        animation-duration: 300ms;
        animation-timing-function: ease-in;
    }

    @keyframes shareOn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const SocialFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 1.8rem;
`;

const SocialText = styled.p`
    text-transform: uppercase;
    color: rgb(109, 127, 151);
    letter-spacing: .5rem;
    font-weight: 500;
    cursor: pointer;
`;

const IconsFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const Icon = styled.img`
    cursor: pointer;
`;

const SocialShareContainer = styled.div`
    background-color: rgb(109, 127, 151);
    padding: 1rem;
    border-radius: 100%;
    cursor: pointer;    

    @media (min-width: 768px) { 
        display: none;
    }
`;

export default function Card() {

    const [share, setShare] = useState(false);

    const isShareOn = () => {
        setShare(!share);
    }

    return (
        <CardContainer>

            <Drawer></Drawer>

            <Flex>

                <Section1>
                    <Title>Shift the overall look and feel by adding these wonderful
                        touches to furniture in your home</Title>

                    <Paragraph>Ever been in a room and felt like something was missing? Perhaps
                        it felt slightly bare and uninviting. I’ve got some simple tips
                        to help you make any room feel complete.</Paragraph>
                </Section1>

                <Section2
                    className={`${!share ? 'off' : ''}`}
                >
                    <AvatarContainer>
                        <Avatar
                            src={michelle}
                            alt="Woman, brown hair, green coat"
                        />
                        <AvatarInfo>
                            <AvatarName>Michelle Appleton</AvatarName>
                            <AvatarDate>28 Jun 2020</AvatarDate>
                        </AvatarInfo>
                    </AvatarContainer>
                    <ShareContainer
                        onClick={isShareOn}
                        className={`${share ? 'activeShare' : ''}`}
                    >
                        <ShareIcon
                            src={share ? shareIconWhite : shareIcon}
                            alt="share icon, arrow to right"
                        />
                    </ShareContainer>
                </Section2>

                {share && (
                    <SocialContainer
                        className={`${share ? 'on' : ''}`}
                    >
                        <SocialFlex>
                            <SocialText>Share</SocialText>
                            <IconsFlex>
                                <Icon src={facebook} alt="icon facebook" />
                                <Icon src={twitter} alt="icon twitter" />
                                <Icon src={pinterest} alt="icon pinterest" />
                            </IconsFlex>
                        </SocialFlex>
                        <SocialShareContainer
                            onClick={isShareOn}
                        >
                            <ShareIcon
                                src={shareIconWhite}
                                alt="share icon white, arrow to right"
                            />
                        </SocialShareContainer>
                    </SocialContainer>
                )}

            </Flex>

        </CardContainer>
    )
}
