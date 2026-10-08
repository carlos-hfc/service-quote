import { NavigationContainer } from "@react-navigation/native"

import { StackRoutes } from "@/routes"

export function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
