import { AppShell, Navbar, Header, Text, Image, Flex } from "@mantine/core";

export default function AppLayout() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Text>Navbar text</Text>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Flex
            mih={40}
            gap="xs"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Image
              width={20}
              height={20}
              fit="contain"
              src="https://cdn-icons-png.flaticon.com/512/2862/2862807.png"
              alt="WeatherApp site logo"
              withPlaceholder
            />
            <Text>Weather App</Text>
          </Flex>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
