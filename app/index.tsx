import ActionButton from "@/components/ActionButton";
import Header from "@/components/Header";
import { View, Text, StyleSheet, Animated, FlatList } from "react-native";
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

export default function Index() {
  return (
    <>
      <Header />
      <View
        style={{
          paddingLeft: 15,
        }}
      >
        <View
          style={{
            marginTop: 20,
          }}
        >
          <View style={{ gap: 4 }}>
            <Text style={styles.accountText}>Conta</Text>
            <Text style={styles.moneyText}>R$ 3.231,01</Text>
          </View>
        </View>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  accountText: {
    fontSize: 19,
    color: "black",
    fontWeight: "600",
  },
  moneyText: {
    fontSize: 19,
    color: "black",
    fontWeight: "600",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
