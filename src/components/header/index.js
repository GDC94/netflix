import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Container,
    Background,
    Dropdown,
    Picture,
    Search,
    PictureSmall,
    Profile,
    ButtonLink,
    Logo,
    Feature,
    Text,
    FeatureCallOut,
    Link,
    Group,
    TextHome,
    Rank,
    Top,
    Ranking,
    SearchInput,
    SearchIcon,
    Bell,
    Buttons,
    Information,
    PlayButton
} from './styles/header';

import uno from '../../images/users/1.png';
import dos from '../../images/users/2.png';
import tres from '../../images/users/3.png';
import cuatro from '../../images/users/4.png';
import cinco from '../../images/users/5.png';
import search from '../../images/icons/search.png';
import { useState } from 'react';


export default function Header({ bg = true, children, ...restProps }) {

    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
    ) : (
        children
    );
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Ranking = function HeaderRanking({ children, ...restProps }) {
    return <Ranking {...restProps}>{children}</Ranking>;
};

Header.Top = function HeaderTop({ ...restProps }) {
    return <Top {...restProps} />
};

Header.Rank = function HeaderRank({ children, ...restProps }) {
    return <Rank {...restProps}>{children}</Rank>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.Bell = function HeaderBell({ to, ...restProps }) {
    return <Bell {...restProps} />
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.TextHome = function HeaderTextHome({ children, ...restProps }) {
    return <TextHome {...restProps}>{children}</TextHome>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    const foto = (src) => {
        if (src === '1') return uno;
        if (src === '2') return dos;
        if (src === '3') return tres;
        if (src === '4') return cuatro;
        if (src === '5') return cinco;
    }
    return <Picture {...restProps} src={foto(src)} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.PictureSmall = function HeaderPictureSmall({ src, ...restProps }) {
    const foto = (src) => {
        if (src === '1') return uno;
        if (src === '2') return dos;
        if (src === '3') return tres;
        if (src === '4') return cuatro;
        if (src === '5') return cinco;
    }
    return <PictureSmall {...restProps} src={foto(src)} />;
};


Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
                <img src={search} alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Títulos, personas, géneros"
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};

Header.Buttons = function HeaderButtons({ children, ...restProps }) {
    return <Buttons {...restProps}>{children}</Buttons>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Information = function HeaderInformation({ children, ...restProps }) {
    return <Information {...restProps}>{children}</Information>;
};