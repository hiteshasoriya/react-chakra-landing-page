import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  Flex,
  Heading,
  SimpleGrid,
  Input,
  Button,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerBg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="footer" bg={footerBg} borderTop="1px" borderColor={borderColor}>
      {/* Main Footer Content */}
      <Container maxW="7xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {/* Company Info */}
          <Box>
            <Flex align="center" gap={3} mb={4}>
              <Box
                w={10}
                h={10}
                bgGradient="linear(to-br, blue.500, blue.600)"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" fontWeight="bold" fontSize="sm">AI</Text>
              </Box>
              <Heading size="md" color="gray.800" _dark={{ color: 'white' }}>
                AI Assistant
              </Heading>
            </Flex>
            <Text color="gray.600" _dark={{ color: 'gray.400' }} mb={6}>
              Revolutionizing workflows with AI-powered automation. 
              Making complex tasks simple for teams worldwide.
            </Text>
            <Stack direction="row" spacing={4}>
              <SocialIcon icon={FaTwitter} label="Twitter" />
              <SocialIcon icon={FaLinkedin} label="LinkedIn" />
              <SocialIcon icon={FaGithub} label="GitHub" />
              <SocialIcon icon={FaInstagram} label="Instagram" />
              <SocialIcon icon={FaFacebook} label="Facebook" />
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box>
            <Heading size="md" mb={6} color="gray.800" _dark={{ color: 'white' }}>
              Quick Links
            </Heading>
            <Stack spacing={3}>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
            </Stack>
          </Box>

          {/* Products */}
          <Box>
            <Heading size="md" mb={6} color="gray.800" _dark={{ color: 'white' }}>
              Products
            </Heading>
            <Stack spacing={3}>
              <FooterLink href="#">AI Automation</FooterLink>
              <FooterLink href="#">Workflow Builder</FooterLink>
              <FooterLink href="#">Analytics Dashboard</FooterLink>
              <FooterLink href="#">API Integration</FooterLink>
              <FooterLink href="#">Mobile App</FooterLink>
              <FooterLink href="#">Enterprise Solutions</FooterLink>
            </Stack>
          </Box>

          {/* Newsletter */}
          <Box>
            <Heading size="md" mb={6} color="gray.800" _dark={{ color: 'white' }}>
              Stay Updated
            </Heading>
            <Text color="gray.600" _dark={{ color: 'gray.400' }} mb={4}>
              Get the latest updates, AI tips, and exclusive offers.
            </Text>
            <Stack spacing={3}>
              <Flex gap={2}>
                <Input
                  placeholder="Your email"
                  bg="white"
                  _dark={{ bg: 'gray.700' }}
                  borderColor="gray.300"
                  _dark={{ borderColor: 'gray.600' }}
                  _focus={{ borderColor: 'blue.500' }}
                />
                <Button
                  colorScheme="blue"
                  px={6}
                  _hover={{ transform: 'translateY(-1px)' }}
                >
                  Subscribe
                </Button>
              </Flex>
              <Text fontSize="sm" color="gray.500">
                We respect your privacy. Unsubscribe anytime.
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Contact Info */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12} pt={8} borderTop="1px" borderColor={borderColor}>
          <ContactItem icon={FaMapMarkerAlt} title="Location">
            San Francisco, CA
            <br />
            123 Innovation Drive
          </ContactItem>
          
          <ContactItem icon={FaPhone} title="Phone">
            +1 (555) 123-4567
            <br />
            Support: 9AM - 6PM PST
          </ContactItem>
          
          <ContactItem icon={FaEnvelope} title="Email">
            hello@aiassistant.com
            <br />
            support@aiassistant.com
          </ContactItem>
        </SimpleGrid>
      </Container>

      {/* Bottom Bar */}
      <Box bg={useColorModeValue('gray.100', 'gray.800')} py={6}>
        <Container maxW="7xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm">
              © {currentYear} AI Assistant. All rights reserved.
            </Text>
            
            <Stack direction="row" spacing={6} align="center">
              <Link href="#" fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} _hover={{ color: 'blue.500' }}>
                Privacy Policy
              </Link>
              <Link href="#" fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} _hover={{ color: 'blue.500' }}>
                Terms of Service
              </Link>
              <Link href="#" fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} _hover={{ color: 'blue.500' }}>
                Cookie Policy
              </Link>
              <Link href="#" fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} _hover={{ color: 'blue.500' }}>
                Security
              </Link>
            </Stack>
            
            <Text fontSize="sm" color="gray.500">
              Made with ❤️ for the future of work
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

// Reusable Components
const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    color="gray.600"
    _dark={{ color: 'gray.400' }}
    _hover={{ color: 'blue.500', transform: 'translateX(3px)' }}
    transition="all 0.2s"
    display="block"
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon, label, href = '#' }) => (
  <Link
    href={href}
    aria-label={label}
    isExternal
    display="flex"
    alignItems="center"
    justifyContent="center"
    w={10}
    h={10}
    bg="white"
    _dark={{ bg: 'gray.700' }}
    color="gray.600"
    _dark={{ color: 'gray.400' }}
    rounded="lg"
    _hover={{
      bg: 'blue.50',
      _dark: { bg: 'blue.900' },
      color: 'blue.500',
      transform: 'translateY(-2px)',
    }}
    transition="all 0.2s"
  >
    <Icon as={icon} w={5} h={5} />
  </Link>
);

const ContactItem = ({ icon, title, children }) => (
  <Flex gap={4}>
    <Icon
      as={icon}
      w={6}
      h={6}
      color="blue.500"
      mt={1}
    />
    <Box>
      <Text fontWeight="medium" mb={2} color="gray.800" _dark={{ color: 'white' }}>
        {title}
      </Text>
      <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm">
        {children}
      </Text>
    </Box>
  </Flex>
);