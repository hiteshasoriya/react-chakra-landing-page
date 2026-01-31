import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Set dark as default
    useSystemColorMode: false, // Don't use system preference
  },
  colors: {
    brand: {
      500: '#3B82F6', // Primary blue
      600: '#2563eb',
    },
    dark: {
      bg: '#0F172A', // Dark background
      card: '#1E293B', // Card background
      text: '#F1F5F9', // Light text
      muted: '#94A3B8', // Muted text
      border: '#334155', // Border color
    }
  },
  fonts: {
    heading: 'system-ui, -apple-system, sans-serif',
    body: 'system-ui, -apple-system, sans-serif',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0F172A' : 'white',
        color: props.colorMode === 'dark' ? '#F1F5F9' : '#1F2937',
      },
    }),
  },
});

export default theme;