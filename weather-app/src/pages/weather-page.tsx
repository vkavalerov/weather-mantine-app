import { Container, Text } from "@mantine/core";
import { useRouter } from "next/router";

export default function WeatherPage() {
  const router = useRouter();
  return (
    <Container size="md">
      <Text size="xl" weight={700}>
        Test weather page
      </Text>
    </Container>
  );
}
