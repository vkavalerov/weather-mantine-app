import { Container, Text } from "@mantine/core";
import { useRouter } from "next/router";
import AppLayout from "../components/AppLayout";

export default function WeatherPage() {
  const router = useRouter();
  return <AppLayout></AppLayout>;
}
