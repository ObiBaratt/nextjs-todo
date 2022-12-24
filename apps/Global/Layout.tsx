import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';

/*
TODOS:
1. Change Header / Logo colors to be variable. Initially set from a defined CSS color palette.
    a. Eventually make these changed by themeContext
*/

const Header = styled.div`
    background: skyblue;
    padding: 8px 0;
    margin: 0 0 2rem;
`

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    font-size: xx-large;
    color: black;
    margin: 0;
`

const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;
    padding: 0 2 rem;
`
const Body = styled.div`
    display: grid;
    gap: 2rem;
`

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header>
                <Container>
                    <Navbar>
                        <Link href={"/"}>HOMEIMG</Link>
                        <Link href={"/todo"}>Todo</Link>
                        <Link href={"/kanban"}>Kanban</Link>
                        <Link href={"/pomodoro"}>Pomodoro</Link>
                        <Link href={"/about"}>About</Link>
                    </Navbar>
                </Container>
            </Header>

            <main>
                <Container>
                    <Body>{ children }</Body>
                </Container>
            </main>
        </>
    )
}

export default Layout;