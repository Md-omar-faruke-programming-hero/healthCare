import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import fireBaseInitialization from "../../FireBase/FireBase.initialize";

fireBaseInitialization();
const useFireBase=()=>{
    const [isloading,setIsloading]=useState(true);

    const[user,setUser]=useState('');
    const[accountCreate,setAccountCreate]=useState('');
    const[error,setError]=useState('')
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    

    //  google use for signIN
     const useingGoogleToSignIn=()=>{
       setIsloading(true)
      return  signInWithPopup(auth, provider)
       
     }

     useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            setIsloading(false);
        })
     },[auth])
    




    //  email and password login and signup
   
    const [email,setEmail]=useState('');
    const userEmail=(e)=>{
           setEmail( e.target.value)
    }

    const[password,setPassword]=useState('');
    const userPassword=(e)=>{
           setPassword( e.target.value)
    }
    
    // signup from
    const signUpFrom=(e)=>{
        e.preventDefault()
      console.log(email,password)
       if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError("2 upper case needed")
        return;
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
    // Signed in
    signout(); 
    setError('')
    setAccountCreate("Account Create SuccessFully!")
    setUserName()
    
    

    // ...
  }).catch((error) => {
    setError(error.message)
    setAccountCreate("")
  })
    }
     
      
 }
  
//  signIn from
 const signInFrom=(e)=>{
     e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
    
    const user = userCredential.user;
    setUser(user)
    setError("")
  }).catch((error) => {
    setError(error.message)
  });

 }
// sign out
 const signout=()=>{
   setIsloading(true)
    signOut(auth).then(() => {
        setUser({});
        setAddedItem(0)
      }).catch((error) => {
        setError(error.message)

      }).finally(()=>setIsloading(false))

 }



// add test list function
 const[addedItem,setAddedItem]=useState(0)

 const[tests,setTest]=useState([])
 const[imgs,setImgs]=useState([])
 const[prices,setPrices]=useState([])
 const[totalPrice,setTotalPrice]=useState(0)
 
 let total=0;
 const iNeedToDoThisTest=(name,img,price)=>{
      // update cart
     const items= addedItem+1;
     setAddedItem(items)
     document.getElementById("o").setAttribute("disabled",true)


    //  test name list
    let testNameList=[...tests,name]
    setTest(testNameList)
    // test img list
    let testImgList=[...imgs,img]
    setImgs(testImgList);
    // test prices
    let testPrices=[...prices,price]
    setPrices(testPrices)

    
    for (const i of testPrices ) {
      // console.log(i);
      total=total+parseFloat(i);
      setTotalPrice(total.toFixed(2))
     
     
      
    }
    
    
}

    const cancleItem=()=>{
      setPrices([]);
      setTest([]);
      setTotalPrice(0)
      setAddedItem(0)

    }
     
    // setuser namr by using signup from
    const [name,setName]=useState('')
    const userName=(e)=>{
       setName(e.target.value)
    }

    const setUserName=()=>{
      updateProfile(auth.currentUser,{displayName:name}).then(()=>{})
    }

return {
  cancleItem,
    userEmail,
    userPassword,
    signUpFrom,
    signInFrom,
    signout,
    useingGoogleToSignIn,
    iNeedToDoThisTest,
    setError,
    setIsloading,
    userName,
    setUser,
    isloading,
    user,
    error,
    accountCreate,
    addedItem,
    tests,
    imgs,
    prices,
    totalPrice
  }
}

export default useFireBase;
