import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Avatar,
  Icon,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import {
  SiApple,
  SiGoogle,
  SiAmazon,
  SiNetflix,
  SiTesla,
} from "react-icons/si";
import { ImWindows } from "react-icons/im";
export default function MinimalSocialProof() {
  const bgColor = useColorModeValue("white", "#0F172A");
  const textColor = useColorModeValue("gray.900", "#F1F5F9");
  const subTextColor = useColorModeValue("gray.600", "#94A3B8");
  const borderColor = useColorModeValue("gray.200", "#334155");

  const companies = [
    { name: "Apple", icon: <SiApple size={32} />, color: "#000000" },
    { name: "Google", icon: <SiGoogle size={32} />, color: "#4285F4" },
    { name: "Microsoft", icon: <ImWindows size={32} />, color: "#00A4EF" },
    { name: "Amazon", icon: <SiAmazon size={32} />, color: "#FF9900" },
    { name: "Netflix", icon: <SiNetflix size={32} />, color: "#E50914" },
    { name: "Tesla", icon: <SiTesla size={32} />, color: "#CC0000" },
  ];

  return (
    <Box as="section" id="testimonials" py={16} bg={bgColor}>
      <Container maxW="6xl">
        {/* Header */}
        <Heading
          as="h2"
          fontSize="2xl"
          fontWeight="semibold"
          color={textColor}
          textAlign="center"
          mb={12}
          letterSpacing="tight"
        >
          Trusted by Industry Leaders
        </Heading>

        {/* Company Logos - Simple Grid */}
        <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6} mb={16}>
          {companies.map((company) => (
            <Flex
              key={company.name}
              h="80px"
              align="center"
              justify="center"
              border="1px"
              borderColor={borderColor}
              borderRadius="lg"
              _hover={{
                borderColor: company.color,
              }}
            >
              <Flex align="center" gap={2}>
                <Box color={company.color}>{company.icon}</Box>
                <Text fontSize="lg" fontWeight="medium" color={textColor}>
                  {company.name}
                </Text>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>

        {/* Divider */}
        <Divider borderColor={borderColor} mb={16} w="80%" mx="auto" />

        {/* Testimonial Section */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={12}
          align="center"
          maxW="4xl"
          mx="auto"
        >
          {/* Quote */}
          <Box flex={2}>
            <Text
              fontSize="2xl"
              color={textColor}
              fontWeight="medium"
              mb={6}
              lineHeight="tall"
            >
              "This platform transformed our entire workflow. The AI assistant
              is incredible!"
            </Text>

            <Flex align="center" gap={4}>
              <Avatar
                size="md"
                name="hitesh asoria"
                src="https://bit.ly/dan-abramov"
              />
              <Box>
                <Text fontWeight="bold" color={textColor}>
                  hitesh asoria
                </Text>
                <Text fontSize="sm" color={subTextColor}>
                  CTO at TechCorp
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Rating */}
          <Box
            flex={1}
            textAlign={{ base: "center", lg: "right" }}
            borderLeft={{ base: "none", lg: "1px" }}
            borderColor={{ base: "none", lg: borderColor }}
            pl={{ base: 0, lg: 12 }}
          >
            {/* Stars */}
            <Flex justify={{ base: "center", lg: "flex-end" }} gap={1} mb={2}>
              {[...Array(5)].map((_, i) => (
                <Icon key={i} as={FaStar} color="#F59E0B" w={5} h={5} />
              ))}
            </Flex>

            {/* Rating Number */}
            <Text fontSize="4xl" fontWeight="bold" color={textColor} mb={1}>
              5.0
            </Text>

            <Text fontSize="sm" color={subTextColor}>
              Based on 500+ reviews
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
