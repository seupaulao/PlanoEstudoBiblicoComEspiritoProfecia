import { Stack } from "expo-router";

export default function RootLayout() {
  return ( 
  <Stack
     screenOptions={{
      headerLeft: ()=>null,
      headerBackVisible: false,
      headerStyle: {backgroundColor: 'red'},
      headerTintColor: 'white',
      navigationBarColor: 'red',
      statusBarBackgroundColor: 'red'
     }}
  >
    <Stack.Screen name="index" options={{
      title: 'Plano de Estudo Bíblico'
    }}/>
    <Stack.Screen name="home" options={{
      title: 'Plano de Estudo Bíblico'
    }}/>
    <Stack.Screen name="detalhar"  options={{
      title: 'Leituras do Dia' 
    }}/>
  </Stack>
  );
}
