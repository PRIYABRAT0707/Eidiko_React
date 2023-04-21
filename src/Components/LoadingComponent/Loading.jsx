import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

const Loading = ({ show }) => {
    return show && (
        <Container sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'20px'
        }}>
            <Box>
            <ThreeCircles
                height="100"
                width="100"
                color="#1976D2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
            <Typography variant='h6' color='primary'>
                Loading...
            </Typography>
            </Box>
        </Container>
    )
}

export default Loading