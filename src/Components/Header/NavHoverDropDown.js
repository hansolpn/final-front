import React, { useCallback, useState } from 'react';
import { Nav, UncontrolledDropdown } from 'reactstrap';
import { debounce } from 'lodash';
import styles from './NavHoverDropDown.module.scss';

const NavHoverDropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const debouceHover = useCallback(
    debounce((flag) => {
      setDropdownOpen(flag);
    }, 100),
    []
  );

  const handleMouseOver = () => {
    debouceHover(true);
  };

  const handleMouseOut = () => {
    debouceHover(false);
  };

  return (
    <Nav navbar>
      <UncontrolledDropdown
        isOpen={dropdownOpen}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='px-5'
        nav
        inNavbar
      >
        {props.children}
      </UncontrolledDropdown>
    </Nav>
  );
};

export default NavHoverDropDown;
