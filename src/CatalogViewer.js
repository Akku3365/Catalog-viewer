import React, { useState, useEffect } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const images = [
  { id: 1, url: 'https://wallpaperaccess.com/full/4545909.jpg', details: 'Image 1' },
  { id: 2, url: 'https://c4.wallpaperflare.com/wallpaper/44/244/893/nature-sea-water-beach-wallpaper-preview.jpg', details: 'Image 2' },
  { id: 3, url: 'https://wallpaperaccess.com/full/660513.jpg', details: 'Image 3' },
  { id: 4, url: 'https://images.hdqwalls.com/download/lake-ultra-hd-4k-7f-1920x1080.jpg', details: 'Image 4' },
  { id: 5, url: 'https://cdn.wallpapersafari.com/70/42/Bja86s.jpg', details: 'Image 5' },
  
  // Add more images as needed
];

const CatalogViewer = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isSlideshowActive, setSlideshowActive] = useState(false);

  useEffect(() => {
    let slideshowTimer;

    if (isSlideshowActive) {
      slideshowTimer = setInterval(() => {
        const currentIndex = images.findIndex((image) => image.id === currentImage.id);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
      }, 3000);
    }

    return () => {
      clearInterval(slideshowTimer);
    };
  }, [currentImage, isSlideshowActive]);

  const handleNextImage = () => {
    const currentIndex = images.findIndex((image) => image.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = images.findIndex((image) => image.id === currentImage.id);
    const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentImage(images[previousIndex]);
  };

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const handleSlideshowToggle = () => {
    setSlideshowActive(!isSlideshowActive);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box style={{height: "94vh" }}>
        <Grid container>
          <Grid style={{ display: "flex", flexDirection: "column" }}>
            <Box style={{ display: "flex",marginTop: "25px", height: "70vh",width: "98vw" }}>
              <img src={currentImage.url} alt={currentImage.details} style={{ width: "42%", maxHeight: '100%', borderRadius: "35px", marginLeft: "32px" }} />
              <Box  style={{textAlign: "left",font: "normal normal normal 16px/18px Ubuntu",letterSpacing:    "0px",color: "#B4B3B3",opacity: "1", marginLeft: "65px", width: "40vw"}}>
                <h1 style={{fontFamily: "normal normal normal 50px/57px Ubuntu", color: "black"}}>W Maldivs</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              </Box>
            </Box>
            <Box style={{ display: "flex", marginTop: "10px", width: "98vw" }}>
            <IconButton onClick={handlePreviousImage} >
                <ArrowBackIcon />
              </IconButton>
              {images.map((image) => (
                <IconButton key={image.id} onClick={() => handleThumbnailClick(image)}>
                  <img
                    src={image.url}
                    alt={image.details}
                    style={{
                      width: 135,
                      height: 110,
                      borderRadius: 18,
                      filter: image.id === currentImage.id ? 'none' : 'grayscale(100%)',
                    }}
                  />
                </IconButton>
              ))}
              <IconButton onClick={handleNextImage}>
                <ArrowForwardIcon />
              </IconButton>
              <Box style={{ display: "flex", marginTop: "10px", marginLeft: "22vw", height: "15vh" }}>
              <IconButton onClick={handleSlideshowToggle}>
                {isSlideshowActive ? (
                  <PauseCircleOutlineIcon style={{background: "#25BEDA 0% 0% no-repeat padding-box",
                    opacity: "1", fontSize: "90px", borderRadius: "50px"}}/>
                ) : (
                  <PlayCircleOutlineIcon style={{background: "#25BEDA 0% 0% no-repeat padding-box",
                  opacity: "1", fontSize: "90px", borderRadius: "50px"}}/>
                )}
              </IconButton>
             </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default CatalogViewer;
