import ActionButton from "@/components/ActionButton";
import { View, Animated } from "react-native";
import PixIcon from "@/assets/images/icons/pix.svg";
import BoletoIcon from "@/assets/images/icons/boleto.svg";
import TranfearIcon from "@/assets/images/icons/transfer.svg";
import DepositIcon from "@/assets/images/icons/deposit.svg";
import PhoneIcon from "@/assets/images/icons/phone.svg";

const iconItems = [
  { id: 1, title: "Área Pix", image: PixIcon },
  { id: 2, title: "Boleto", image: BoletoIcon },
  { id: 3, title: "Transferência", image: TranfearIcon },
  { id: 4, title: "Depósito", image: DepositIcon },
  { id: 5, title: "Recarga", image: PhoneIcon },
];
const scrollY = new Animated.Value(0);

const ListButtons = () => {
  return (
    <Animated.FlatList
      data={iconItems}
      style={{ marginTop: 25 }}
      renderItem={({ item }) => (
        <View style={{ marginRight: 10 }}>
          <ActionButton IconComponent={item.image} title={item.title} />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ListButtons;
