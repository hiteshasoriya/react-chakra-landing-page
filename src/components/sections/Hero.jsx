import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  useColorModeValue,
  useToast,
  Image,
  Stack,
  Badge,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        position: 'top-right',
        title: 'Email required',
        description: 'Please enter your work email',
        status: 'warning',
        duration: 3000,
      });
      return;
    }
    
    toast({
      position: 'top-right',
      title: '🎉 You\'re on the list!',
      description: 'We\'ll notify you when we launch.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setEmail('');
  };

  const bgColor = useColorModeValue('white', '#0F172A');
  const textColor = useColorModeValue('gray.900', '#F1F5F9');
  const subTextColor = useColorModeValue('gray.600', '#94A3B8');
  const accentColor = '#3B82F6';

  // Using Unsplash AI/tech related images
  const heroImage = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  // Alternative images:
  // 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80' - AI Dashboard
  // 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80' - Data Visualization
  // 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1000&q=80' - AI Brain
  // 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&q=80' - Futuristic Tech

  return (
    <Box as="section" id='home' pt={{ base: 20, md: 24 }} pb={16} bg={bgColor} overflow="hidden">
      <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 12, lg: 16 }}
        >
          {/* Left: Text Content */}
          <Box flex={1} order={{ base: 2, lg: 1 }}>
            <Stack spacing={6}>
              {/* Launching Badge */}
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={4}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
                alignSelf="flex-start"
              >
                🚀 Launching Soon
              </Badge>

              {/* Main Heading */}
              <Heading
                as="h1"
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
                fontWeight="bold"
                lineHeight="1.1"
                color={textColor}
              >
                Supercharge Your Workflow
                <br />
                <Box as="span" color={accentColor}>
                  with AI Assistant
                </Box>
              </Heading>

              {/* Subtitle */}
              <Text
                fontSize={{ base: 'lg', lg: 'xl' }}
                color={subTextColor}
                maxW="xl"
              >
                Join 5,000+ early users getting exclusive early access to our revolutionary AI-powered workflow automation platform.
              </Text>

              {/* Email Form */}
              <Box as="form" onSubmit={handleSubmit} maxW="lg">
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your work email"
                      size="lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      bg={useColorModeValue('white', 'gray.800')}
                      border="2px"
                      borderColor={useColorModeValue('gray.200', 'gray.600')}
                      borderRadius="lg"
                      color={textColor}
                      _placeholder={{ color: subTextColor }}
                      _focus={{
                        borderColor: accentColor,
                        boxShadow: `0 0 0 1px ${accentColor}`,
                      }}
                      px={6}
                      py={6}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    size="lg"
                    bg={accentColor}
                    color="white"
                    borderRadius="lg"
                    px={8}
                    py={6}
                    _hover={{
                      bg: '#2563eb',
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    rightIcon={
                      <Box as="span" fontSize="lg" ml={2}>
                        →
                      </Box>
                    }
                  >
                    Join Waitlist
                  </Button>
                </Stack>
              </Box>

              {/* Trust Indicators */}
              <Stack spacing={3} direction="row" flexWrap="wrap">
                <TrustItem text="No credit card required" />
                <TrustItem text="Free trial included" />
                <TrustItem text="Cancel anytime" />
              </Stack>
            </Stack>
          </Box>

          {/* Right: Image */}
          <Box 
            flex={1} 
            order={{ base: 1, lg: 2 }}
            w="full"
            position="relative"
          >
            {/* Main Image Container */}
            <Box
              position="relative"
              w="full"
              h={{ base: '300px', md: '400px', lg: '500px' }}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
            >
              {/* Online Image */}
              <Image
                src={heroImage}
                alt="AI Assistant Dashboard"
                w="100%"
                h="100%"
                objectFit="cover"
                loading="eager"
              />
              
              {/* Overlay Gradient */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bgGradient="linear(to-t, rgba(0,0,0,0.3) 0%, transparent 50%)"
              />
              
              {/* Floating AI Badge */}
              <Box
                position="absolute"
                bottom={6}
                left={6}
                bg={useColorModeValue('white', 'gray.800')}
                px={4}
                py={3}
                borderRadius="xl"
                boxShadow="lg"
                display="flex"
                alignItems="center"
                gap={3}
              >
                <Box
                  w={10}
                  h={10}
                  bg={accentColor}
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="white" fontWeight="bold" fontSize="lg">AI</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color={textColor} fontSize="sm">
                    AI Assistant
                  </Text>
                  <Text color={subTextColor} fontSize="xs">
                    Real-time analytics
                  </Text>
                </Box>
              </Box>
              
              {/* Stats Overlay */}
              <Box
                position="absolute"
                top={6}
                right={6}
                bg="rgba(255,255,255,0.9)"
                _dark={{ bg: 'rgba(0,0,0,0.7)' }}
                backdropFilter="blur(10px)"
                p={4}
                borderRadius="xl"
                textAlign="center"
                boxShadow="lg"
              >
                <Text fontSize="2xl" fontWeight="bold" color={accentColor}>
                  5,000+
                </Text>
                <Text fontSize="sm" color={subTextColor}>
                  Early Users
                </Text>
              </Box>
            </Box>

            {/* Floating Elements */}
            <Box
              position="absolute"
              top="-10px"
              right="-10px"
              w="60px"
              h="60px"
              bg={accentColor}
              color="white"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="2xl"
              fontWeight="bold"
              boxShadow="xl"
              zIndex={2}
              transform="rotate(15deg)"
            >
              ↑95%
            </Box>
            
            <Box
              position="absolute"
              bottom="20%"
              left="-20px"
              bg={useColorModeValue('white', 'gray.800')}
              p={3}
              borderRadius="lg"
              boxShadow="lg"
              border="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              display="flex"
              alignItems="center"
              gap={2}
              zIndex={2}
            >
              <Box
                w={3}
                h={3}
                bg="green.500"
                borderRadius="full"
                animation="pulse 2s infinite"
              />
              <Text fontSize="sm" fontWeight="medium" color={textColor}>
                Live Demo
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

const TrustItem = ({ text }) => (
  <Flex align="center" gap={2}>
    <Box
      w={4}
      h={4}
      bg="green.500"
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" fontSize="xs">✓</Text>
    </Box>
    <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="sm">
      {text}
    </Text>
  </Flex>
);