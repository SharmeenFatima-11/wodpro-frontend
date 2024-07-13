import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import IMAGES from '../../images'
import { useLocation, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import Loader from '../../components/Loader'

const Payment = () => {
    const auth = getAuth();
    const navigate = useNavigate()

    const handleClick = () => {
        // navigate("/dashboard")
    }

    const location = useLocation();
    const { price } = location.state || {}; 

    const handleCardClick = () => {
        console.log("Card Payment");
        navigate("/stripe")
    }

    const [loading, setLoading] = useState(false);

    const completeSignup = async () => {
        try {
            setLoading(true);
            let data = localStorage.getItem("wodProUserTempData");
            if (data) {
                data = JSON.parse(data);
                console.log("sign method is running");
                console.log("local storage data is : ", data);

                const db = getFirestore();
                const response = await createUserWithEmailAndPassword(auth, data.userObj.email, data.userObj.password);
                console.log(response.user);

                let firestoreUserObj = {
                    userId: response.user.uid,
                    email: data.userObj.email,
                    firstName: data.userObj.firstName,
                    gender: data.userObj.gender,
                    birthDate: data.userObj.birthDate,
                    lastName: data.userObj.lastName,
                    address: data.userObj.address,
                    boxNumber: data?.userObj?.boxNumber || 0,
                    phoneNumber: data.userObj.phoneNumber,
                    city: data.userObj.ciudad,
                    province: data.userObj.provincia,
                    categoryPrice: data.userObj.price,
                    country: data.userObj.country,
                    street: data.userObj.street,
                    postalCode: data.userObj.postalCode,
                    boxNumber: data.userObj.boxNumber,
                    categoryName: data.userObj.categoryName,
                    createdAt: new Date(Date.now()).toUTCString(),
                    isPaid: true,
                    isActive: true,
                }

                if (!data?.userObj?.teamFound && !data.userObj.individual) {
                    let uuid = uuidv4();
                    const teamRef = doc(db, "Teams", uuid);
                    let myteamobj = { ...data?.teamObj, teamCreatorId: response.user.uid, teamId: uuid };
                    const teamCreation = await setDoc(teamRef, myteamobj);
                    console.log("team cration response is : ", teamCreation);
                    firestoreUserObj = {
                        ...firestoreUserObj,
                        teamName: data.userObj.teamName,
                        teammateEmails: data.userObj.teammateEmails,
                        teamId: uuid
                    }
                }


                const docRef = doc(db, "users", response.user.uid);
                const result = await setDoc(docRef, firestoreUserObj);

                if (data.userObj.coupenFlag) {
                    const coupenref = collection(db, `coupons/${data?.userObj?.coupen}/users/`);
                    await addDoc(coupenref, { timestamp: Date.now(), userId: response.user.uid });
                }
                setLoading(false);
                localStorage.clear();
                alert("SignUp Successfull!");
                navigate("/login");
            }

        } catch (error) {
            setLoading(false);
            if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                console.log("user already exists in error")
                localStorage.clear();
            } else {

                alert("An unexpected error occured");
                console.log("error while creating and saving user data");
                console.log("error is ", error);
            }
        }
    }

    // for the memeber who are already in a team and their payment is already done
    const signInWithoutPayment = async () => {
        try {
            setLoading(true);
            let data = localStorage.getItem("wodProUserTempData");
            if (data) {
                data = JSON.parse(data);
                console.log("sign method is running");
                console.log("local storage data is : ", data);

                const db = getFirestore();
                const response = await createUserWithEmailAndPassword(auth, data.userObj.email, data.userObj.password);
                console.log(response.user);

                let firestoreUserObj = {
                    userId: response.user.uid,
                    gender: response.user.gender,
                    birthDate: response.user.gender,
                    email: data.userObj.email,
                    firstName: data.userObj.firstName,
                    lastName: data.userObj.lastName,
                    address: data.userObj.address,
                    boxNumber: data?.userObj?.boxNumber || 0,
                    phoneNumber: data.userObj.phoneNumber,
                    city: data.userObj.ciudad,
                    province: data.userObj.provincia,
                    categoryPrice: data.userObj.price,
                    country: data.userObj.country,
                    street: data.userObj.street,
                    postalCode: data.userObj.postalCode,
                    boxNumber: data.userObj.boxNumber,
                    categoryName: data.userObj.categoryName,
                    createdAt: new Date(Date.now()).toUTCString(),
                    isPaid: true,
                    isActive: true,
                    teamName: data.userObj.teamName,
                    teamId: data.userObj.teamId,
                    teammateEmails: data.userObj.teammateEmails
                }

                const docRef = doc(db, "users", response.user.uid);
                const result = await setDoc(docRef, firestoreUserObj);

                setLoading(false);
                localStorage.clear();
                alert("SignUp Successfull!");
                navigate("/login");
            }

        } catch (error) {
            setLoading(false);
            if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                console.log("user already exists in error")
                localStorage.clear();
            } else {

                alert("An unexpected error occured");
                console.log("error while creating and saving user data");
                console.log("error is ", error);
            }
        }
    }

    useEffect(() => {
        let data = localStorage.getItem("wodProUserTempData");
        if (data) {
            data = JSON.parse(data);
            if (data.userObj.payment) {
                signInWithoutPayment();
            }
        }
        let status = location.search.split("redirect_status=")[1]
        if (status == "succeeded") {
            completeSignup();
        }
    }, [])


    return (
        <>
            <div 
            // className='bg-white h-screen'
            className='bg-cover h-screen' style={{ backgroundImage: `url(${IMAGES.BackgroundImagee2})`,  backgroundPosition: 'center' }}
            >
            <img src={IMAGES.Logo} />
                <div className="absolute top-0 left-0 right-0 bottom-0 "></div>
                <div className='relative'>
                    {/* <NavBar activePage="Signup" /> */}
                    <div className='flex items-center items-center justify-center md:pl-[60px]' style={{ height: 'calc(100vh - 220px)' }}>
                        <div className='flex flex-col gap-5 border-2 border-[#B6B5FF] rounded-xl pb-3 pt-6 px-6 bg-[#B6B5FF40] xl:w-[25%] lg:w-[33%] md:w-[44%] sm:w-[47%] w-[80%]'>
                            <div className='flex items-center justify-center'>
                                <p className='text-[#03045E] font-bold text-[18px]'>Detalles del pago</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#03045E] text-[16px] text-justify'>¡Completa tu registro hoy! Paga {price}€ para activar tu cuenta y disfrutar de acceso completo a nuestros servicios.
                                </p>
                            </div>
                            {loading ? <Loader /> :
                                <div className='flex flex-col gap-2 pb-5'>
                                    {/* <div className='flex flex-row border-2 border-white rounded-md py-2 px-4 gap-3 cursor-pointer bg-[#B6B5FF]' onClick={handleClick}>
                                        <img src={IMAGES.Paypal} alt='Menu' className='h-6 w-6' />
                                        <p className='text-[#03045E]'>Continuar con PayPal</p>
                                    </div> */}
                                    {/* <div className='flex flex-row border-2 border-white rounded-md py-2 px-4 gap-3 cursor-pointer bg-[#B6B5FF]' onClick={handleClick}>
                                        <img src={IMAGES.ApplePay} alt='Menu' className='h-6 w-6' />
                                        <p className='text-[#03045E]'>Continuar con Apple Pay</p>
                                    </div> */}
                                    <div className='flex flex-row border-2 border-white rounded-md py-2 px-4 gap-3 cursor-pointer bg-[#B6B5FF]' onClick={handleCardClick}>
                                        <img src={IMAGES.Visa} alt='Menu' className='h-6 w-6' />
                                        <p className='text-[#03045E]'>Continuar con Credit/Debit</p>
                                    </div>
                                    {/* <div className='flex flex-row border-2 border-white rounded-md py-2 px-4 gap-3 cursor-pointer bg-[#B6B5FF]' onClick={handleClick}>
                                        <img src={IMAGES.AndroidPay} alt='Menu' className='h-6 w-6' />
                                        <p className='text-[#03045E]'>Continuar con Android Pay</p>
                                    </div> */}
                                </div>
                            }
                        </div>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Payment