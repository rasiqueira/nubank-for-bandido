import Header from "@/components/Header";
import { View, Text, StyleSheet } from "react-native";
import ListButtons from "@/components/ListButtons";

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
        <ListButtons />
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
