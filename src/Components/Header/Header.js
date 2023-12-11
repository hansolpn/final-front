import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import NavHoverDropDown from './NavHoverDropDown';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        light
        expand='md'
        className={styles.nav}
      >
        <NavbarBrand
          href='/'
          id='navItem'
        >
          <b>나를 위해 너에게</b>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          navbar
          isOpen={isOpen}
          className='container-fluid'
        >
          <div className='navbar-nav me-auto mb-2 mb-lg-0'>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                레시피
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                이사
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                라이프
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                정책
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
            <NavHoverDropDown>
              <DropdownToggle
                nav
                className={styles.menu_title}
              >
                커뮤니티
              </DropdownToggle>
              <DropdownMenu className={styles.menu}>
                <DropdownItem>메뉴1</DropdownItem>
                <DropdownItem>메뉴2</DropdownItem>
                <DropdownItem>메뉴3</DropdownItem>
              </DropdownMenu>
            </NavHoverDropDown>
          </div>
          <div className='d-flex'>
            <Button className='me-2'>로그인</Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
