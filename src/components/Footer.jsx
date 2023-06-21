// TODO: answer here
import { Box, Text, Flex } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box className="footer">
      <Flex
        align="center"
        justify="center"
        h="50px"
        bg="gray.200"
        borderTop="1px solid"
        borderColor="gray.300"
      >
        <Text className="studentName" mr={2}>
          Venansia Juliama Laoli
        </Text>
        <Text className="studentId">FE4549548</Text>
      </Flex>
    </Box>
  );
  // TODO: answer here
};

export default Footer;
