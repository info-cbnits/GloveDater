import Colors from '../constants/color';

import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  logo: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
    top: Dimensions.get ('window').height > 700 ? 100 : 40,
    //top: Dimensions.get ('window').height / 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logosize: {
    //width: 256,
    width: Dimensions.get ('window').width / 2,
    height: 238, 
    resizeMode: 'contain'
  },
  textview: {
    position: 'absolute',
    top: Dimensions.get ('window').height > 700 ? 330 : 260,
    zIndex: 100,
    
  },
  logotext: {
    //fontFamily: 'quicksand-bold',
    fontSize: 20,
    color: '#800080'
  },
  formview: {
    margin: 50,
    position: 'absolute',
    zIndex: 4,
    alignContent: 'center',
    top: Dimensions.get ('window').height > 700 ? 380 : 300,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    width: '80%',
    flex: 1,
   paddingBottom: 50,
  },
  formview2: {
    margin: 20,
    position: 'absolute',
    zIndex: 4,
    alignContent: 'center',
    top: Dimensions.get ('window').height > 700 ? 350 : 280,
    justifyContent: 'center',
    zIndex: 3,
    width: '80%',
  },
  inputarea: {
    width: '100%',
    height: 65,
    padding: 12,
    borderRadius: 100,
    borderColor: '#800080',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 36,
  },
  inputtext: {
    width: '80%',
    height: 50,
    fontSize: 14,
    color: '#000000',
  },
  btnview: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    alignContent: 'center',
  },
  btncontainer2: {
    width: '100%',
    height: 65,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    zIndex: 10,
  },

  btncontainer: {
    flex: 1,
    width: '80%',
    height: 65,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    position: 'absolute',
    zIndex: 100,
    top:Dimensions.get ('window').height > 700 ? 670 : 570,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowColor: 'transparent',
    width: '100%'
  },

  btntext: {
    fontSize: 20,
    color: Colors.btntextcolor,
    textTransform: 'uppercase',
  },

  checkarea: {
    width: '100%',
    height: 'auto',
    marginBottom: Dimensions.get ('window').height > 700 ? 50 : 20,
  },

  checktitle: {
    fontSize: 20,
  },
  checkboxarae: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  checkbtn: {
    width: '48%',
    height: 50,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: {width: 0, height:10},
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  chckimg: {
    width:30,
    height:30,
    marginEnd: 20,
  },
  chktxt: {
    color: Colors.accenttextcolor,
    fontSize: 16,
  },
  formview3: {
    padding: 30,
    marginBottom: 50,
  },
  formviewtxt: {
    fontSize: 20,
    color: Colors.fromtxtcolor,
    marginBottom: 20,
  },
  intentview: {
    flexDirection: 'row',
    width: '100%',
    marginEnd: 10,
    height: 'auto',
    flexWrap: 'wrap',
  },
  intentchk: {
    height: 30,
    padding: 20,
    backgroundColor: Colors.intentchkcolor,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
    marginBottom: 10,
  },
  dropdownarea: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
    
  },
  dropdownbox: {
    width: '32%',
  },
  txtareabox: {
    flex: 1,
    backgroundColor: 'white',
    height: 110,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 25,
    borderRadius: 15,
  },
  textarae: {
    width: '100%',
    height: 110,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    borderColor: '#F2F0F0',
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  
  formview4: {
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // borderWidth: 1,
    // borderColor: 'red',
  },

  uploadbox: {
    width: '32%',
    height: 100,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    alignItems: 'center',
    opacity: 0.5,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },
  
});