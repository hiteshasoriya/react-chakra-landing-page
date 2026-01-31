import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("white", "#0F172A");
  const borderColor = useColorModeValue("gray.200", "#334155");
  const textColor = useColorModeValue("gray.900", "#F1F5F9");

  return (
    <Box
      as="nav"
      py={4}
      borderBottom="1px"
      borderColor={borderColor}
      bg={bgColor}
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Container maxW="7xl">
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <Flex align="center" gap={3}>
            <Box
              w={10}
              h={10}
              bg="#3B82F6"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold" fontSize="lg">
                AI
              </Text>
            </Box>
            <Text fontSize="xl" fontWeight="bold" color={textColor}>
              AI Assistant
            </Text>
          </Flex>

          {/* Desktop Menu */}
          <Flex display={{ base: "none", md: "flex" }} gap={8} align="center">
            <Text
              onClick={() => {
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              color={textColor}
              opacity={0.8}
              cursor="pointer"
              _hover={{ opacity: 1, color: "#3B82F6" }}
            >
              Home
            </Text>
            <Text
              color={textColor}
              opacity={0.8}
              cursor="pointer"
              _hover={{ opacity: 1, color: "#3B82F6" }}
              onClick={() => {
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Features
            </Text>
            <Text
              color={textColor}
              opacity={0.8}
              cursor="pointer"
              _hover={{ opacity: 1, color: "#3B82F6" }}
              onClick={() => {
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Testimonials
            </Text>

            {/* Dark Mode Toggle */}
            <IconButton
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle dark mode"
              color={textColor}
            />

            <Button
              bg="#3B82F6"
              color="white"
              _hover={{ bg: "#2563eb" }}
              px={6}
              onClick={() => {
                // Try to scroll to waitlist section
                const waitlistSection = document.getElementById("waitlist");
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  // If no waitlist section, show alert
                  alert("Join our waitlist to get early access!");
                }
              }}
            >
              Join Waitlist
            </Button>
          </Flex>

          {/* Mobile Menu Button */}
          <Flex gap={2} display={{ base: "flex", md: "none" }}>
            <IconButton
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle dark mode"
              color={textColor}
            />
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="ghost"
              aria-label="Toggle Navigation"
              color={textColor}
            />
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box mt={4} display={{ md: "none" }}>
            <Flex direction="column" gap={4}>
              <Text
                py={2}
                color={textColor}
                onClick={() => {
                  onClose();
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </Text>
              <Text
                py={2}
                color={textColor}
                onClick={() => {
                  onClose();
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Features
              </Text>
              <Text
                py={2}
                color={textColor}
                onClick={() => {
                  onClose();
                  document
                    .getElementById("testimonials")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Testimonials
              </Text>
              <Button
                bg="#3B82F6"
                color="white"
                _hover={{ bg: "#2563eb" }}
                mt={2}
                onClick={() => {
                  // Try to scroll to waitlist section
                  const waitlistSection = document.getElementById("waitlist");
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: "smooth" });
                    onClose();
                  } else {
                    // If no waitlist section, show alert
                    alert("Join our waitlist to get early access!");
                  }
                }}
              >
                Join Waitlist
              </Button>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
}
