import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
    Button
} from '@mui/material'
// img
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';
import headerImg from '../assets/pexels-binyamin-mellish-186078.png'
import train from '../assets/train.png'
import bubble from '../assets/bubble.png'
import castle from '../assets/ToysHomeClearBackground.png'
import '../Themes/SectionHome.css';

const GetStarted = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#FAACA8',
        backgroundImage: `linear-gradient(321deg, #bbfbffbd 37%, #00bcc9bd 99%)`,
        //backgroundImage: `url(${TrainStation})`, // Definindo a imagem de fundo usando a propriedade url()
        //backgroundSize: 'cover', // Ajuste para cobrir o espaço
        //backgroundPosition: 'center bottom -50px', // Centralize a imagem
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
        }
    }));

    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })

    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const BoxBorderBottom = styled(Box)({
        //backgroundColor: '#fff',
        borderBottom: '2px solid #0000003d',
        //borderRadius: '10px'

    })

    const PinkRectangle = styled(Box)(({ theme }) => ({
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(35deg, transparent 60%, rgba(255, 192, 203, 0.5) 93%)',
        transform: 'rotate(30deg)', // Inclinação de 30 graus
        zIndex: 0, // Para colocar o retângulo atrás do conteúdo
    }));

    return (
        <Box>
            <CustomBox component='header' >
                {/*  Box text  */}

                <BoxText
                    component='section'
                >
                    {/*<PinkRectangle />*/}
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <img
                            src={train}
                            alt="train"
                            style={{
                                width: '200px',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '60%'
                                //transform: 'rotate(15deg)'
                            }}
                        />
                    </Box>
                    <BoxBorderBottom>
                        <Typography
                            variant='h4'
                            component='h2'
                            sx={{
                                fontWeight: 'bold',
                                color: '#ff3f8ccf',
                                fontSize: { xs: '1.25rem', sm: "2rem",md: "1.64rem", lg: "2.125rem"}
                            }}
                        >
                            Há anos transformando festas em uma experiência única!
                        </Typography>
                    </BoxBorderBottom>
                        <Typography
                            variant='p'
                            component='p'
                            sx={{
                                py: 3,
                                lineHeight: 1.6,
                                color: '#fff',
                            }}
                        >
                            Aqui você encontrará uma variedade de modelos de brinquedos cuidadosamente higienizados, prontos para proporcionar momentos únicos de diversão.
                        </Typography>
                    
                    <Box>
                        <Button
                            variant='contained'
                            sx={{
                                mr: 2,
                                px: 4,
                                py: 1,
                                fontSize: '0.9rem',
                                textTransform: 'capitalize',
                                borderRadius: 0,
                                borderColor: '#14192d',
                                color: '#fff',
                                backgroundColor: '#14192d',
                                "&&:hover": {
                                    backgroundColor: "#343a55"
                                },
                                "&&:focus": {
                                    backgroundColor: "#343a55"
                                }
                            }}
                        >
                            Quero Alugar
                        </Button>
                        <Button
                            to={'/about'}
                            variant='outlined'
                            sx={{
                                px: 4,
                                py: 1,
                                fontSize: '0.9rem',
                                textTransform: 'capitalize',
                                borderRadius: 0,
                                color: '#343a55',
                                backgroundColor: 'transparent',
                                borderColor: '#343a55',
                                "&&:hover": {
                                    color: '#4d85c0',
                                    borderColor: '#4d85c0',
                                },
                                "&&:focus": {
                                    color: '#4d85c0',
                                    borderColor: '#4d85c0',
                                }
                            }}
                        >
                            Sobre
                        </Button>
                    </Box>
                </BoxText>

                <Box sx={theme => ({
                    [theme.breakpoints.down('md')]: {
                        flex: '1',
                        paddingTop: '30px',
                        alignSelf: 'center',
                    },
                    [theme.breakpoints.up('md')]: {
                        flex: '2',
                        alignSelf: 'flex-end',
                    },
                })}
                >
                    <img
                        src={castle}
                        alt="headerImg"
                        style={{
                            width: '100%',
                            marginBottom: -80,
                        }}
                    />
                </Box>

            </CustomBox>
            <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
                sx={{
                    py: 10,
                    px: 2,

                }}
            >
                <CustomGridItem item xs={12} sm={8} md={6}
                    component='section'

                >
                    <Box component='article'
                        sx={{
                            px: 4,
                        }}
                    >

                        <Typography
                            variant='h4'
                            component='h3'
                            sx={{
                                fontWeight: '700',
                                textAlign: 'start',
                            }}
                        >
                            We make it easy for tenants and landlords
                        </Typography>
                        <CustomTypography>
                            Listing are updated continuously so you<br />
                            wont miss out on homes that just hit<br />
                            market until you find your perfect home.
                        </CustomTypography>
                    </Box>

                </CustomGridItem>

                <Grid item xs={12} sm={4} md={6}>
                    <img src={imgDetail} alt=""
                        style={{
                            width: '100%',
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={4} md={6}
                    sx={{
                        order: { xs: 4, sm: 4, md: 3 }
                    }}
                >
                    <img src={imgDetail2} alt=""
                        style={{
                            width: "100%",
                        }}
                    />
                </Grid>

                <CustomGridItem item xs={12} sm={8} md={6}
                    sx={{
                        order: { xs: 3, sm: 3, md: 4 }
                    }}
                >
                    <Box component='article'
                        sx={{
                            px: 4,
                        }}
                    >
                        <Typography
                            variant='h4'
                            component='h3'
                            sx={{
                                fontWeight: '700',
                                textAlign: 'start',
                            }}
                        >
                            Match with the best agent
                        </Typography>

                        <CustomTypography>
                            Our verified partner Agents are local experts who<br />
                            earn an average of 4.8/5 stars from buyers and sellers.
                        </CustomTypography>
                    </Box>
                </CustomGridItem>
            </Grid>
        </Box>
    )
}

export default GetStarted;