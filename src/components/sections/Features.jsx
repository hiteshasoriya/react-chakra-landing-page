import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Heading,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBolt, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

export default function Features() {
  const bgColor = useColorModeValue('white', '#0F172A');
  const textColor = useColorModeValue('gray.900', '#F1F5F9');

  return (
    <Box as="section" id='features' py={20} bg={bgColor}>
      <Container maxW="7xl">
        {/* Section Header */}
        <Stack spacing={4} textAlign="center" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            color={textColor}
          >
            Why Choose Our Platform
          </Heading>
        </Stack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <FeatureCard
            icon={FaBolt}
            title="10x Faster"
            description="Experience lightning-fast performance with our optimized algorithms and streamlined workflows. Get things done quicker."
            gradient="linear(to-br, blue.500, cyan.500)"
          />
          <FeatureCard
            icon={FaCheckCircle}
            title="95% Accuracy"
            description="Achieve high precision with our advanced data processing and reliable reporting tools. Trust your results."
            gradient="linear(to-br, green.500, teal.500)"
          />
          <FeatureCard
            icon={FaShieldAlt}
            title="Enterprise Secure"
            description="Protect your data with industry-leading security protocols, encryption, and compliance standards. Stay safe."
            gradient="linear(to-br, purple.500, pink.500)"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

const FeatureCard = ({ icon, title, description, gradient }) => {
  const cardBg = useColorModeValue('white', '#1E293B');
  const textColor = useColorModeValue('gray.900', '#F1F5F9');
  const subTextColor = useColorModeValue('gray.600', '#94A3B8');
  const borderColor = useColorModeValue('gray.200', '#334155');

  return (
    <Box
      bg={cardBg}
      p={8}
      rounded="2xl"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-8px)',
        borderColor: '#3B82F6',
        boxShadow: 'lg',
      }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      {/* Icon with Gradient Background */}
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        mb={6}
        rounded="xl"
        bgGradient={gradient}
      >
        <Icon as={icon} w={8} h={8} color="white" />
      </Flex>

      {/* Title */}
      <Heading 
        size="lg" 
        mb={4} 
        color={textColor}
        fontSize="xl"
        fontWeight="bold"
      >
        {title}
      </Heading>

      {/* Description */}
      <Text 
        color={subTextColor} 
        lineHeight="tall"
        fontSize="md"
        flex={1}
      >
        {description}
      </Text>
    </Box>
  );
};