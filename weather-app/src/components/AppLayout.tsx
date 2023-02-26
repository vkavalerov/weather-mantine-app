import { AppShell, Navbar, Header, Text } from "@mantine/core";

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
          <Text>Header text</Text>
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
