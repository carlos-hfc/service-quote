import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { RouteList } from "./@types/navigation"
import { Layout } from "./components/Layout"
import { Home } from "./screens/Home"

export const Stack = createNativeStackNavigator<RouteList>()

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
      screenLayout={Layout}
    >
      <Stack.Screen
        name="home"
        component={Home}
      />
    </Stack.Navigator>
  )
}
