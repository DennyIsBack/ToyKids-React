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
import Login from '@mui/icons-material/Login';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import { IMaskInput } from 'react-imask';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import '../Themes/Navbar.css';
import { Link } from 'react-scroll';

const sections = ['Inicio', 'Agenda de horarios', 'Sobre'];
function Header(props) {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    // const [openModal, setOpenModal] = React.useState(false);
    // const [stepModal, setStepModal] = React.useState(0);
    // const [phoneNumber, setPhoneNumber] = React.useState('(00) 00000-0000');

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // const TextMaskAdapter = React.forwardRef(function TextMaskAdapter(props, ref) {
    //     const { onChange, ...other } = props;
    //     return (
    //         <IMaskInput
    //             {...other}
    //             mask="(#0) 00000-0000"
    //             definitions={{
    //                 '#': /[1-9]/,
    //             }}
    //             inputRef={ref}
    //             onAccept={(value) => onChange({ target: { name: props.name, value } })}
    //             overwrite
    //         />
    //     );
    // });

    // TextMaskAdapter.propTypes = {
    //     name: PropTypes.string.isRequired,
    //     onChange: PropTypes.func.isRequired,
    // };

    return (
        <React.Fragment>
            <AppBar position="fixed" sx={{ backgroundColor: '#ffffff' }} className="header">
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: { xs: 'space-between' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} ml="40px">
                            <Avatar alt="Logo ToyKids" src={Logo} sx={{ width: 56, height: 56, ml:8 }} />
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
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',  // Center buttons vertically
                            justifyContent: 'flex-end' // Push the buttons to the right side
                        }} mt="15px">
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
                                            <Typography variant="body1" style={{ fontWeight: '400', fontSize: '18px' }}>
                                                {section.title}
                                            </Typography>
                                        </Link>
                                    </li>
                                ))}
                                {/* <Box sx={{ ml: 5, mr: 2, mt: '-3px' }}>
                                    <Button size="small" variant="contained" color="secondary" endIcon={<Login />} onClick={() => {setOpenModal(true);  setPhoneNumber("(00) 00000-0000")}}>Entrar</Button>
                                </Box> */}
                            </ul>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <ModalDialog
                    color="primary"
                    layout="center"
                    size="lg"
                    variant="outlined">
                    <ModalClose variant="outlined" />
                    {stepModal === 0 ? (
                        <>
                            <DialogTitle>Acessar conta</DialogTitle>
                            <DialogContent>Informe seu celular</DialogContent>
                            <Stack spacing={2}>
                                <FormControl>
                                    <FormLabel>Celular</FormLabel>
                                    <Input
                                        startDecorator={<label>+55</label>}
                                        value={phoneNumber}
                                        onChange={(event) => setPhoneNumber(event.target.value)}
                                        slotProps={{ input: { component: TextMaskAdapter } }}
                                        autoFocus
                                        required />
                                </FormControl>
                                <Button onClick={() => setStepModal(1)}>Verificar Celular</Button>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <DialogTitle>Confirmar SMS</DialogTitle>
                            <DialogContent>
                                <Typography fontSize='15px'fontWeight='bold'>Enviado para +55 {phoneNumber} </Typography>
                                <Typography fontSize='14px'>Insira abaixo o código que você receberá por SMS</Typography>
                            </DialogContent>
                            <Input />
                            <Typography fontSize='13px'>*O tempo para entrega do SMS depende da sua operadora, aguarde alguns instantes e tente novamente.</Typography>
                            <Button onClick={() => setStepModal(0)}>Cancelar</Button>
                        </>
                    )}
                </ModalDialog>
            </Modal> */}

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
