import * as React from 'react';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Box from '@mui/material/Box';
import Footer from './Footer';
import '../Themes/Navbar.css';
import LandingPage from './Sections';

const sections = [
    { title: 'Inicio', id: 'section1' },
    { title: 'Alugar', id:'section2'},
    { title: 'Alugar', id:'section5'},
    { title: 'Sobre', id:'section3'}
];

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'X', icon: XIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {

    return (
        <React.Fragment>
            <Container
                sx={{
                    width: 1,
                    maxWidth: '100% !important',
                    paddingLeft: '0!important',
                    paddingRight: '0!important'
                }}>
                <Header title="Toy" sections={sections} />
                {/*<Navbar sections={sections} />*/}
                <LandingPage />
                {/*  <MainFeaturedPost post={mainFeaturedPost} />*/}
                {/*  <Grid container spacing={4}>*/}
                {/*    {featuredPosts.map((post) => (*/}
                {/*      <FeaturedPost key={post.title} post={post} />*/}
                {/*    ))}*/}
                {/*  </Grid>*/}
                {/*  <Grid container spacing={5} sx={{ mt: 3 }}>*/}
                {/*    <Main title="From the firehose" posts={posts} />*/}
                {/*<Sidebar*/}
                {/*    title={sidebar.title}*/}
                {/*    description={sidebar.description}*/}
                {/*    archives={sidebar.archives}*/}
                {/*    social={sidebar.social}*/}
                {/*/>*/}
                {/*  </Grid>*/}
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
            <Container
                id= 'section1'
                sx={{
                    height: '500px',
                }}>teste</Container>
            <Box
                id='section2'
                sx={{
                    height: '500px',
                }}>
                teste2
            </Box>
            <Box
                id='section3'
                sx={{
                    height: '500px',
                }}>
                teste3
            </Box>
        </React.Fragment>
    );
}
