import  { useState, useEffect, useCallback } from 'react';
import styles from '../Styles/navbar.module.css';
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { SlMenu } from 'react-icons/sl';
// import resume from '../files/Sanju_kumari_Resume.pdf';

const Navbar = () => {
  const [navbg, setNavbg] = useState(false);

  const handleScroll = useCallback(() => {
    setNavbg(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = resume;
//     link.setAttribute('download', resume);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Home', sectionId: '#' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'techstacks' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Statistics', sectionId: 'statistics' },
    { label: 'Contacts', sectionId: 'contacts' }
  ];

  return (
    <div className={navbg ? styles.active : styles.top_header_div}>
      <nav className={styles.nav}>
        <div className={styles.title_logo}>
          <h1>Sanju Kumari</h1>
        </div>
        <div>
          <ul id={styles.nav_links}>
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={`#${item.sectionId}`} onClick={() => scrollToSection(item.sectionId)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.menu_icon}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<SlMenu size={'20px'} />}
              variant='none'
              background={'transparent'}
              borderRadius={'2rem'}
            />
            <MenuList width={'200px'}>
              {menuItems.map((item) => (
                <MenuItem key={item.label} className='mob-menu'>
                  <a href={`#${item.sectionId}`} onClick={() => scrollToSection(item.sectionId)}>{item.label}</a>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
