import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: "grey",
  },
  badgeContainer: {
    backgroundColor: "#3777f0",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 45,
    top: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});
export default styles;