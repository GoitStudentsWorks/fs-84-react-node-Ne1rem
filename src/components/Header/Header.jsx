import {
  HeaderContainer,
  NameOfSite,
  Navigation,
  SlashBetween,
  StyledLink,
  Headerdiv,
  HeaderAvatarSvg,
} from './Header.styled';
import HeaderSvg from '/src/assets/header/headerSvg.svg'
import UserMenu from './userMenu';

export const Header = () => {
 const isLoggedIn = true
  return (
    <Headerdiv>
    <HeaderContainer>
      <NameOfSite to="/">HealthyHub</NameOfSite>
      {isLoggedIn ? (<UserMenu/>) :(<Navigation>
        <StyledLink to="/signin">Sign in</StyledLink>
        <SlashBetween> / </SlashBetween>
        <StyledLink to="/signup">Sign up</StyledLink>
        <HeaderAvatarSvg><use href={`${HeaderSvg}#avatar-sign-in`} /></HeaderAvatarSvg>
      </Navigation>)}
    </HeaderContainer>
    </Headerdiv>
  );
};
