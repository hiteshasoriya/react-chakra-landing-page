import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import WaitlistForm from './WaitlistForm'; // Import the WaitlistForm

export default function CTASection() {
  const bgColor = useColorModeValue('white', '#0F172A');
  const cardBg = useColorModeValue('white', '#1E293B');
  const textColor = useColorModeValue('gray.900', '#F1F5F9');
  const subTextColor = useColorModeValue('gray.600', '#94A3B8');
  const borderColor = useColorModeValue('gray.300', '#334155');

  return (
    <Box as="section" id="waitlist" py={20} bg={bgColor}>
      <Container maxW="7xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={16}
          align="center"
        >
          {/* Left: Waitlist Form */}
          <Box flex={1}>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color={textColor}
              mb={6}
            >
              Get Early Access & Discount
            </Heading>
            
            <Text
              fontSize="xl"
              color={subTextColor}
              mb={8}
            >
              Limited spots available
            </Text>

            {/* Use WaitlistForm Component */}
            <WaitlistForm 
              variant="cta" 
              showSuccessMessage={true}
              buttonText="Get Access Now"
              placeholder="Your work email"
            />
            
            {/* Bonus Features */}
            <SimpleGrid columns={2} spacing={4} mt={8} maxW="md">
              <FeatureItem text="First 100 users get 50% off" />
              <FeatureItem text="Priority customer support" />
              <FeatureItem text="Free onboarding session" />
              <FeatureItem text="30-day money back guarantee" />
            </SimpleGrid>
          </Box>

          {/* Right: Contact Info */}
          <Box
            flex={1}
            bg={cardBg}
            p={8}
            borderRadius="2xl"
            width="full"
            border="1px"
            borderColor={borderColor}
            boxShadow="lg"
          >
            <Heading size="md" mb={6} color={textColor}>
              Contact Information
            </Heading>
            <SimpleGrid columns={1} spacing={8}>
              <ContactItem
                icon={FaEnvelope}
                label="Email"
                value="support@aiassistant.com"
              />
              <ContactItem
                icon={FaPhone}
                label="Phone"
                value="+1 (555) 123-4567"
              />
              <ContactItem
                icon={FaMapMarkerAlt}
                label="Location"
                value="India"
              />
            </SimpleGrid>
            
            {/* Support Hours */}
            <Box mt={8} pt={8} borderTop="1px" borderColor="gray.200">
              <Text fontSize="sm" color={subTextColor} mb={2}>
                Support Hours:
              </Text>
              <Text fontSize="md" color={textColor} fontWeight="medium">
                Monday - Friday: 9AM - 6PM PST
              </Text>
            </Box>
          </Box>
        </Flex>

        {/* Footer */}
        <Box
          mt={20}
          pt={8}
          borderTop="1px"
          borderColor={borderColor}
          textAlign="center"
        >
          <Text color={subTextColor} fontSize="sm">
            © 2024 AI Assistant Inc. All rights reserved. |{' '}
            <Box as="span" textDecoration="underline" cursor="pointer" _hover={{ color: '#3B82F6' }}>
              Privacy Policy
            </Box>{' '}
            |{' '}
            <Box as="span" textDecoration="underline" cursor="pointer" _hover={{ color: '#3B82F6' }}>
              Terms of Service
            </Box>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

const ContactItem = ({ icon, label, value }) => {
  const textColor = useColorModeValue('gray.900', '#F1F5F9');
  const subTextColor = useColorModeValue('gray.600', '#94A3B8');
  
  return (
    <Flex align="center" gap={4}>
      <Icon as={icon} w={6} h={6} color="#3B82F6" />
      <Box>
        <Text fontWeight="medium" color={subTextColor} mb={1} fontSize="sm">
          {label}
        </Text>
        <Text fontSize="lg" color={textColor} fontWeight="medium">
          {value}
        </Text>
      </Box>
    </Flex>
  );
};

const FeatureItem = ({ text }) => (
  <Flex align="center" gap={2}>
    <Box
      w={4}
      h={4}
      bg="#3B82F6"
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" fontSize="xs">✓</Text>
    </Box>
    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
      {text}
    </Text>
  </Flex>
);