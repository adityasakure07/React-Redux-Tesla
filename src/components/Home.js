import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section 
                title= "Model S"
                decription = "Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section 
                title= "Model Y"
                decription = "Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section
                title= "Model 3"
                decription = "Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="EXISTING INVENTORY"
            />
            
               <Section 
                title= "Model X"
                decription = "Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="EXISTING INVENTORY"
            />
                 <Section 
                title= "Accessories"
                decription = ""
                backgroundImg="accessories.jpg"
                leftBtnText="shop now"
                rightBtnText=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh
`