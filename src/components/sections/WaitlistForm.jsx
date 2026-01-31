// components/sections/WaitlistForm.jsx
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  useToast,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function WaitlistForm({ 
  variant = 'default',
  buttonText = 'Join Waitlist',
  placeholder = 'Your email address',
  showSuccessMessage = true,
  size = 'lg'
}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        position: 'top-right',
        title: 'Email required',
        description: 'Please enter your email address',
        status: 'warning',
        duration: 3000,
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        position: 'top-right',
        title: 'Invalid email',
        description: 'Please enter a valid email address',
        status: 'warning',
        duration: 3000,
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (showSuccessMessage) {
        toast({
          position: 'top-right',
          title: "🎉 You're on the list!",
          description: "We'll notify you when we launch. Check your email for confirmation.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      setEmail('');
      setLoading(false);
    }, 1500);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Different variants
  const getVariantStyles = () => {
    switch(variant) {
      case 'cta':
        return {
          buttonColor: '#3B82F6',
          buttonHover: '#2563eb',
          inputBg: useColorModeValue('white', 'gray.800'),
          borderColor: useColorModeValue('gray.300', 'gray.600'),
        };
      case 'hero':
        return {
          buttonColor: '#3B82F6',
          buttonHover: '#2563eb',
          inputBg: useColorModeValue('white', 'gray.800'),
          borderColor: useColorModeValue('gray.300', 'gray.600'),
        };
      default:
        return {
          buttonColor: '#3B82F6',
          buttonHover: '#2563eb',
          inputBg: useColorModeValue('white', 'gray.800'),
          borderColor: useColorModeValue('gray.300', 'gray.600'),
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <Box as="form" onSubmit={handleSubmit} maxW="lg">
      <Stack spacing={4}>
        <Flex direction={{ base: 'column', sm: 'row' }} gap={3}>
          <FormControl flex={1}>
            <Input
              type="email"
              placeholder={placeholder}
              size={size}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              bg={styles.inputBg}
              border="2px"
              borderColor={styles.borderColor}
              _hover={{ borderColor: '#3B82F6' }}
              _focus={{
                borderColor: '#3B82F6',
                boxShadow: '0 0 0 1px #3B82F6',
              }}
              px={6}
              py={size === 'lg' ? 6 : 4}
            />
          </FormControl>
          <Button
            type="submit"
            size={size}
            bg={styles.buttonColor}
            color="white"
            px={8}
            py={size === 'lg' ? 6 : 4}
            _hover={{
              bg: styles.buttonHover,
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            _active={{
              transform: 'translateY(0)',
            }}
            isLoading={loading}
            loadingText="Submitting..."
          >
            {buttonText}
          </Button>
        </Flex>
        
        {/* Privacy Note */}
        <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')} textAlign="center">
          We respect your privacy. No spam. Unsubscribe anytime.
        </Text>
      </Stack>
    </Box>
  );
}