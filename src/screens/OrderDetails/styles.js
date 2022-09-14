import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   page: {
      flex: 1
   },
   image: {
      width: '100%',
      aspectRatio: 5 / 3,
   },
   iconContainer: {
      position: 'absolute',
      top: 30,
      left: 10,

   },
   title: {
      fontSize: 35,
      fontWeight: '600',
      marginVertical: 10
   },
   subtitle: {
      fontSize: 15,
      color: 'grey',
      fontWeight: '600'
   },
   content: {
      margin: 10
   },
   menuTitle: {
      marginTop: 10,
      fontSize: 22,
      fontWeight: '800',
      color: 'black'
   }

});

export default styles;