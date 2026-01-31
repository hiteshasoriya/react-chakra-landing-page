import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Stack,
  Icon,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, purple.50)',
    'linear(to-br, gray.900, blue.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh" pt={24}>
      {/* Hero Section */}
      <Container maxW="7xl" py={10}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={10}
        >
          {/* Left Content */}
          <Box flex={1}>
            <Text
              color="brand.500"
              fontWeight="bold"
              fontSize="lg"
              mb={2}
            >
              ABOUT OUR COMPANY
            </Text>
            <Heading
              as="h1"
              size="2xl"
              lineHeight="shorter"
              mb={6}
              color={useColorModeValue('gray.800', 'white')}
            >
              Building the Future of
              <Text as="span" color="brand.500"> AI-Powered</Text> Workflows
            </Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue('gray.600', 'gray.300')}
              mb={8}
              lineHeight="tall"
            >
              We're on a mission to revolutionize how teams work by leveraging 
              artificial intelligence to automate repetitive tasks, provide 
              intelligent insights, and accelerate productivity.
            </Text>
            <HStack spacing={4}>
              <Button
                as={Link}
                to="/"
                colorScheme="brand"
                size="lg"
                rounded="full"
                px={8}
                _hover={{ transform: 'translateY(-2px)' }}
              >
                Back to Home
              </Button>
              <Button
                as="a"
                href="#waitlist"
                variant="outline"
                size="lg"
                rounded="full"
                px={8}
                borderColor="brand.500"
                color="brand.500"
              >
                Join Our Mission
              </Button>
            </HStack>
          </Box>

          {/* Right Image/Stats */}
          <Box
            flex={1}
            bgGradient={bgGradient}
            p={8}
            rounded="3xl"
            position="relative"
            overflow="hidden"
          >
            <SimpleGrid columns={2} spacing={6}>
              <StatBox number="5,000+" label="Early Users" />
              <StatBox number="95%" label="Accuracy Rate" />
              <StatBox number="24/7" label="AI Availability" />
              <StatBox number="70%" label="Time Saved" />
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>

      {/* Mission & Vision */}
      <Container maxW="7xl" py={16}>
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={10}>
          <GridItem>
            <Box
              bg={cardBg}
              p={8}
              rounded="2xl"
              boxShadow="lg"
              height="100%"
            >
              <Icon as={FaLightbulb} w={12} h={12} color="brand.500" mb={6} />
              <Heading size="lg" mb={4}>Our Mission</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                To democratize AI-powered automation, making advanced workflow 
                optimization accessible to businesses of all sizes. We believe 
                every team deserves tools that amplify their potential.
              </Text>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box
              bg={cardBg}
              p={8}
              rounded="2xl"
              boxShadow="lg"
              height="100%"
            >
              <Icon as={FaRocket} w={12} h={12} color="brand.500" mb={6} />
              <Heading size="lg" mb={4}>Our Vision</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                Creating a world where AI assistants handle routine work, 
                allowing human creativity to focus on innovation, strategy, 
                and meaningful connections.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Core Values */}
      <Container maxW="7xl" py={16}>
        <VStack spacing={4} textAlign="center" mb={12}>
          <Text color="brand.500" fontWeight="bold" fontSize="lg">
            OUR VALUES
          </Text>
          <Heading size="xl">What We Stand For</Heading>
          <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="3xl">
            These principles guide every decision we make and every feature we build
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <ValueCard
            icon={FaShieldAlt}
            title="Privacy First"
            description="Your data belongs to you. We implement enterprise-grade security and never sell your information."
          />
          <ValueCard
            icon={FaUsers}
            title="User-Centric"
            description="We build for real people solving real problems. Your feedback directly shapes our roadmap."
          />
          <ValueCard
            icon={FaChartLine}
            title="Continuous Innovation"
            description="We're constantly evolving, incorporating the latest AI advancements to serve you better."
          />
          <ValueCard
            icon={FaLightbulb}
            title="Simplicity"
            description="Powerful AI shouldn't be complicated. We prioritize intuitive, easy-to-use interfaces."
          />
          <ValueCard
            icon={FaHandshake}
            title="Transparency"
            description="Clear pricing, honest communication, and open discussions about AI's capabilities and limitations."
          />
          <ValueCard
            icon={FaRocket}
            title="Speed & Efficiency"
            description="We optimize for performance because we know your time is valuable."
          />
        </SimpleGrid>
      </Container>

      {/* Team Section */}
      <Container maxW="7xl" py={16}>
        <VStack spacing={4} textAlign="center" mb={12}>
          <Text color="brand.500" fontWeight="bold" fontSize="lg">
            MEET THE MINDS
          </Text>
          <Heading size="xl">Behind AI Assistant</Heading>
          <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="3xl">
            A diverse team of AI researchers, engineers, and product experts passionate about reshaping work
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          <TeamMember
            name="Sarah Chen"
            role="CEO & Founder"
            bio="Ex-Google AI Research, 10+ years in machine learning"
            color="blue"
          />
          <TeamMember
            name="Alex Rodriguez"
            role="CTO"
            bio="Former OpenAI engineer, specializes in NLP systems"
            color="purple"
          />
          <TeamMember
            name="Maya Patel"
            role="Head of Product"
            bio="Product lead from Slack, focused on user experience"
            color="pink"
          />
          <TeamMember
            name="James Wilson"
            role="Lead AI Engineer"
            bio="PhD in Computer Science from MIT, neural networks expert"
            color="green"
          />
        </SimpleGrid>
      </Container>

      {/* Timeline/Story */}
      <Container maxW="7xl" py={16}>
        <Box
          bg={cardBg}
          p={8}
          rounded="2xl"
          boxShadow="lg"
        >
          <Heading size="xl" mb={8} textAlign="center">Our Journey</Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            <TimelineStep
              year="2022"
              title="The Beginning"
              description="Started as a research project at Stanford University exploring AI workflow optimization"
            />
            <TimelineStep
              year="2023"
              title="First Prototype"
              description="Built initial MVP and secured seed funding from leading tech investors"
            />
            <TimelineStep
              year="2024"
              title="Launch & Growth"
              description="Public beta launch with 5,000+ early users and growing team"
            />
          </SimpleGrid>
        </Box>
      </Container>

      {/* Final CTA */}
      <Container maxW="7xl" py={16}>
        <Box
          bgGradient="linear(to-r, brand.500, brand.600)"
          color="white"
          p={12}
          rounded="3xl"
          textAlign="center"
        >
          <Heading size="xl" mb={4}>Ready to Join the Future of Work?</Heading>
          <Text fontSize="xl" mb={8} opacity={0.9}>
            Be part of our mission to revolutionize productivity with AI
          </Text>
          <Button
            as="a"
            href="#waitlist"
            size="lg"
            colorScheme="whiteAlpha"
            color="white"
            rounded="full"
            px={10}
            _hover={{ bg: 'whiteAlpha.300' }}
          >
            Join Waitlist Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

// Sub Components
const StatBox = ({ number, label }) => (
  <Box
    bg="white"
    p={6}
    rounded="2xl"
    textAlign="center"
    boxShadow="md"
  >
    <Heading size="xl" color="brand.500" mb={2}>
      {number}
    </Heading>
    <Text fontWeight="medium" color="gray.600">
      {label}
    </Text>
  </Box>
);

const ValueCard = ({ icon, title, description }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box
      bg={cardBg}
      p={6}
      rounded="xl"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
    >
      <Icon as={icon} w={10} h={10} color="brand.500" mb={4} />
      <Heading size="md" mb={3}>{title}</Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>
        {description}
      </Text>
    </Box>
  );
};

const TeamMember = ({ name, role, bio, color }) => {
  const colorMap = {
    blue: 'blue.500',
    purple: 'purple.500',
    pink: 'pink.500',
    green: 'green.500',
  };

  return (
    <Box
      textAlign="center"
      p={6}
      rounded="xl"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="md"
    >
      <Box
        w={20}
        h={20}
        bgGradient={`linear(to-br, ${colorMap[color]}, ${color}.300)`}
        rounded="full"
        mx="auto"
        mb={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="2xl"
        color="white"
        fontWeight="bold"
      >
        {name.split(' ').map(n => n[0]).join('')}
      </Box>
      <Heading size="md" mb={2}>{name}</Heading>
      <Text color="brand.500" fontWeight="medium" mb={3}>{role}</Text>
      <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="sm">
        {bio}
      </Text>
    </Box>
  );
};

const TimelineStep = ({ year, title, description }) => (
  <Box position="relative">
    <Box
      position="absolute"
      left={{ base: '50%', lg: '100%' }}
      top={0}
      transform={{ base: 'translateX(-50%)', lg: 'translateX(0)' }}
      w={{ base: '2px', lg: '100%' }}
      h={{ base: '100%', lg: '2px' }}
      bg="brand.200"
      _dark={{ bg: 'brand.700' }}
    />
    <Box
      position="absolute"
      left={{ base: '50%', lg: '100%' }}
      top={0}
      transform={{ base: 'translateX(-50%)', lg: 'translateX(-50%)' }}
      w={4}
      h={4}
      bg="brand.500"
      rounded="full"
    />
    <Box
      pt={{ base: 8, lg: 0 }}
      pl={{ base: 0, lg: 8 }}
      textAlign={{ base: 'center', lg: 'left' }}
    >
      <Text color="brand.500" fontWeight="bold" fontSize="lg" mb={2}>
        {year}
      </Text>
      <Heading size="md" mb={3}>{title}</Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>
        {description}
      </Text>
    </Box>
  </Box>
);