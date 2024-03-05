import React from "react";
import {
    Card,
    CardBody,
    Container,
    Image,
    Link,
    Stack,
    Text
} from "@chakra-ui/react";


const Education = () => {
    const awsCCPLogo = 
    <Link maxW="15%" href="https://www.credly.com/badges/9154a3c4-935b-4377-8550-ee67e857d48a" target="_blank">
         <Image src="https://cloud.swrigdon.com/s/tDcXTaS4T2aEGFG/preview"/>    
    </Link>;
    const awsDevAssocLogo =
    <Link maxW="15%" href="https://www.credly.com/badges/64f4d7e9-60cd-4802-9c67-37c990767c3d" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/p7rFdc5wHEWSBQm/preview"/>
    </Link>;
    const ucfLogo = 
    <Link maxW="15%" href="https://www.cecs.ucf.edu/" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/Bc6fwaWAQH7zoQY/preview"/>
    </Link>;
    return(
        <Container
            id="education"
            minW="66%"
            border="1px"
            borderColor="lightGray"
            borderRadius="10px"
            marginTop="3%"
            paddingTop="1%"
            paddingRight="2.5%"
            paddingLeft="2.5%"
            paddingBottom="2.5%"
        >
            <Text fontSize="4em">
                My Education
            </Text>
            <br />
            <Card paddingLeft="3%">
                <CardBody>
                    <Text fontSize="2.5em">
                        Certifications
                    </Text>
                    <hr/>
                    <Stack direction="row" paddingTop="2.5%" paddingBottom="2.5%">
                        {awsCCPLogo}
                        {awsDevAssocLogo}
                    </Stack>
                    <Text fontSize="2.5em">
                        Schooling
                    </Text>
                    <hr />
                    <Stack direction="row" paddingTop="2.5%">
                        {ucfLogo}
                        <Text fontSize="1.5em" paddingTop="7%" paddingLeft="2.5%">
                            B.S. in Computer Science - University of Central Florida (Graduated 2020)
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Container>        
    );
};

export default Education;