import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Logo from '../assets/Logo.png';
import '../Themes/Navbar.css';
import { Link } from 'react-scroll';

const sections = ['Inicio', 'Agenda de horarios', 'Sobre'];
function Header(props) {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [click, setClick] = React.useState(false)
    const handleClick = () => setClick(!click)

    return (
        <React.Fragment>
            <AppBar position="fixed" sx={{ backgroundColor: '#ffffff' }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: { xs: 'space-between', md: 'flex-start' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} ml="40px">
                            <Avatar alt="Logo ToyKids" src={Logo} sx={{ width: 56, height: 56 }} />
                            <Typography
                                variant="h3"
                                sx={{
                                    backgroundImage: `linear-gradient(180deg,#FF005C, #FF8AB4 60%)`,
                                    backgroundRepeat: "repeat",
                                    backgroundClip: "text",
                                    fontFamily: "'Baloo Tammudu 2', cursive",
                                    fontWeight: '800',
                                    WebkitTextFillColor: "transparent",
                                    textAlign: 'center',
                                    lineHeight: 'normal',
                                    marginBottom: '5px',
                                    marginLeft: '10px',
                                    display: 'flex',
                                    alignItems: 'end'
                                }}
                            >
                                ToyKids
                            </Typography>
                        </Box>
                        <Box sx={{ marginLeft: '100px', display: { xs: 'none', md: 'flex' } }} mt="15px">
                            <ul className={"nav-menu"}>
                                {props.sections.map((section, index) => (
                                    <li key={index} className='nav-item'>
                                        <Link
                                            key={index}
                                            activeClass="active"
                                            to={section.id}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={300}
                                            style={{
                                                color: 'black',
                                                width: '100%',
                                                height: '100%',
                                                cursor: 'pointer'
                                            }}>
                                            <Typography variant="body1" style={{ fontWeight: '500', fontSize: '16px' }}>
                                                {section.title}
                                            </Typography>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }} mr={3}>
                            <Button
                                variant="text"
                                color="secondary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                    </Box>
                                    {props.sections.map((section, index) => (
                                        <MenuItem key={index} >
                                            <Link
                                                onClick={toggleDrawer(false)}
                                                key={index}
                                                activeClass="active"
                                                to={section.id}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={300}
                                                style={{
                                                    color: 'black',
                                                    width: '100%',
                                                    height: '100%',
                                                    cursor: 'pointer'
                                                }}>
                                                {section.title}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Box>
                            </Drawer>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;
