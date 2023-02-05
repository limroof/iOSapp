import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <HeaderBackButton
      label='Go back'
      onPress={() => navigation.navigate("Home")}
    />
  );
}
