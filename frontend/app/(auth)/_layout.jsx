import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="login" />
    </Stack>
  );
};

export default _layout;
