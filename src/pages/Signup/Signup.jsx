import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import IMAGES from "../../images";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore";
import Loader from "../../components/Loader";
import { v4 as uuidv4 } from "uuid";
import { provinces } from "../../constants/provinces_cities";

import { cities } from "../../constants/cities";
import axios from "../../axios";

const Signup = () => {
  const auth = getAuth();

  const [category, setCategory] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [email3, setEmail3] = useState("");
  const [teamName, setTeamName] = useState("");
  const [coupen, setCoupen] = useState("");

  const [genero, setGenero] = useState("");
  const [shownGender, setshownGender] = useState(['Genero']);
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [pais, setPais] = useState("");

  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [boxName, setBoxName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [cityFlag, setCityFlag] = useState(false);

  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  // const categories = [
  //   { name: 'RX Individual Masculino', price: "120 €" },
  //   { name: "INTERMEDIO Individual Masculino", price: "120 €" },
  //   { name: "MASTERS +40 Masculino", price: "110 €" },
  //   { name: "MASTERS +50 Masculino", price: "110 €" },
  //   { name: "ESCALADO Individual Masculino", price: "100 €" },
  //   { name: "RX Individual Femenino", price: "120 €" },
  //   { name: "INTERMEDIO Individual Femenino", price: "110 €" },
  //   { name: "MASTERS +40 Femenino", price: "110 €" },
  //   { name: "MASTERS +50 Femenino", price: "110 €" },
  //   { name: "ESCALADO Individual Femenino", price: "100 €" },
  //   { name: "RX Parejas MM", price: "220 €" },
  //   { name: "INTERMEDIO Parejas MM", price: "200 €" },
  //   { name: "ESCALADO Parejas MM", price: "190 €" },
  //   { name: "RX Equipos MMMF", price: "400 €" },
  //   { name: "INTERMEDIO Equipos MMMF", price: "360 €" },
  //   { name: "ESCALADO Equipos MMMF", price: "360 €" },
  // ];

  const categories = [
    { name: 'RX Individual - M', price: "129 €" },
    { name: "RX Individual - F", price: "129 €" }, //
    { name: "RX Parejas - MM", price: "249 €" },  //
    { name: "RX Equipos - MMMF", price: "490 €" },
    { name: "Intermediate Individual - M", price: "129 €" },

    { name: "Intermediate Individual - F", price: "129 €" },
    { name: "Intermediate Parejas - MM", price: "249 €" },
    { name: "Intermediate Parejas - MF", price: "249 €" },
    { name: "Intermediate Equipos - MMMF", price: "490 €" },

    { name: "Scaled Individual - M", price: "129 €" },
    { name: "Scaled Individual - F", price: "129 €" },
    { name: "Scaled Parejas - MM", price: "249 €" },
    { name: "Scaled Parejas - MF", price: "249 €" },
    { name: "Scaled Equipos - MMMF", price: "490 €" },
    { name: "Masters +35 - Individual - M", price: "129 €" },
    { name: "Masters +35 - Individual - F", price: "129 €" },

    { name: "Masters +40 - Individual - M", price: "129 €" },
    { name: "Masters +40 - Individual - F", price: "129 €" }, //
    { name: "Teens - Individual - M", price: "129 €" }, //
    { name: "Teens - Individual - F", price: "129 €" },
    
  ];

  const coupensArray = [
    "Baby",
    "Saralicia",
    "Babybeast",
    "ElenaCarratala",
    "SalvaSalveta",
    "PacoBravo",
    "Fabi",
    "Aniol",
    "Sepius",
    "Bryanhernandez",
    "Cazalis",
    "Elia",
    "Paumt",
    "Terra",
  ];

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value)
    let genderss = event.target.value.split(' - ')
    genderss = genderss[genderss.length - 1]
    console.log("genders are", genderss)
    let gendersPresent = ['Genero']
    setshownGender(updateGenderArray(genderss, gendersPresent))

  };

  function updateGenderArray(gender, genderArray) {
    if (gender.includes('M') && !genderArray.includes('Male')) {
        genderArray.push('Male');
    }
    if (gender.includes('F') && !genderArray.includes('Female')) {
        genderArray.push('Female');
    }
    return genderArray;
}

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  const navigate = useNavigate();

  const handleSignUp = async () => {
    navigate("/login");
  };

  const handleJoinNow = async () => {
    setLoading(true);
    try {

      console.log("in try")
      const db = getFirestore();

      const docRef = collection(db, "users");
      const q = query(docRef);
      const result = await getDocs(q).then().catch((err)=> console.log("test user",err));
      let allusers = [];

      // let cat = selectedCategory.split(' - ')
      // cat = cat[cat.length - 1]
      // // console.log("cat is", cat, "..length is..", cat.length)

      // if(cat.length > 1){

      const teamdocref = collection(db, "Teams");
      const tq = query(teamdocref);
      const tresult = await getDocs(tq).then().catch((err)=> console.log("test team",err));
      let allTeams = [];

      console.log("getting all the teams");
      tresult.forEach((doc) => {
        allTeams.push(doc.data());
      });
    // }

      console.log("getting all the users");
      result.forEach((doc) => {
        allusers.push(doc.data());
      });

     

      let allMailSatisfied = false;
      let userFound = false;
      let emailFound = false;
      let otherTeamMember = false;
      let teamObj = {};

      console.log("email 1 = ", email1);
      console.log("email 2 = ", email2);
      console.log("email 3 = ", email3);

      allusers.map((user) => {
        if (user.email == email) {
          userFound = true;
        }
      });

      if (userFound) {
        alert("User with email already exists");
        setLoading(false);
        return;
      }

      if (email1 || email2 || email3) {
        if (
          (email1 != "" && email1 == email2) ||
          (email1 != "" && email1 == email3) ||
          (email2 != "" && email3 != "" && email2 == email3)
        ) {
          alert("Teammate email cannot be same!");
          setLoading(false);
          return;
        }

        allTeams.map((item) => {
          console.log("creator mail is : ", item.teammateEmails);
          if (
            item.teammateEmails.includes(email) ||
            item.creatorEmail == email
          ) {
            console.log("email already in team found");
            emailFound = true;
            teamObj = item;
          }
        });

        if (!emailFound) {
          allTeams.map((item) => {
            if (
              email1 &&
              (item.teammateEmails.includes(email1) ||
                item.creatorEmail == email1)
            ) {
              console.log("Member already in other team found");
              otherTeamMember = true;
            }
            if (
              email2 &&
              (item.teammateEmails.includes(email2) ||
                item.creatorEmail == email2)
            ) {
              console.log("Member already in other team found");
              otherTeamMember = true;
            }
            if (
              email2 &&
              (item.teammateEmails.includes(email2) ||
                item.creatorEmail == email2)
            ) {
              console.log("Member already in other team found");
              otherTeamMember = true;
            }
          });
        }

        if (otherTeamMember) {
          alert(
            "One of your entered emails is already in other team! Enter a different mail."
          );
          setLoading(false);
          return;
        }

        if (emailFound) {
          console.log("team obj is : ", teamObj);
          if (email1 == teamObj.creatorEmail) {
            if (
              teamObj.teammateEmails.includes(email2) &&
              teamObj.teammateEmails.includes(email3)
            ) {
              console.log("all the email satisfied");
              alert("all the email satisfied");
              allMailSatisfied = true;
            }
          }

          if (email2 == teamObj.creatorEmail) {
            if (
              teamObj.teammateEmails.includes(email1) &&
              teamObj.teammateEmails.includes(email3)
            ) {
              console.log("all the email satisfied");
              alert("all the email satisfied");
              allMailSatisfied = true;
            }
          }

          if (email3 == teamObj.creatorEmail) {
            if (
              teamObj.teammateEmails.includes(email1) &&
              teamObj.teammateEmails.includes(email2)
            ) {
              console.log("all the email satisfied");
              alert("all the email satisfied");
              allMailSatisfied = true;
            }
          }
        }

        if (emailFound && !allMailSatisfied) {
          alert("Please enter all the email of teammeates correctly");
          setLoading(false);
          return;
        }
      }

      // if (emailFound && allMailSatisfied) {
      if (password == confirmPassword) {
        console.log("password matched");
        if (password.length >= 6) {
          setLoading(true);

          let coupenFlag = false;

          if (coupen) {
            coupensArray.map((item) => {
              if (item == coupen) {
                alert("You are selected for 10% discount");
                coupenFlag = true;
              }
            });
          }

          let price = 0;

          if (selectedCategory == "RX Individual - M") price = 129;
          if (selectedCategory == "RX Individual - F") price = 129;
          if (selectedCategory == "RX Parejas - MM") price = 249;
          if (selectedCategory == "RX Equipos - MMMF") price = 490;
          if (selectedCategory == "Intermediate Individual - M") price = 129;
          if (selectedCategory == "Intermediate Individual - F") price = 129;
          if (selectedCategory == "Intermediate Parejas - MM") price = 249;
          if (selectedCategory == "Intermediate Parejas - MF") price = 249;
          if (selectedCategory == "Intermediate Equipos - MMMF") price = 490;
          if (selectedCategory == "Scaled Individual - M") price = 129;
          if (selectedCategory == "Scaled Individual - F") price = 129;
          if (selectedCategory == "Scaled Parejas - MM") price = 249;
          if (selectedCategory == "Scaled Parejas - MF") price = 249;
          if (selectedCategory == "Scaled Equipos - MMMF") price = 490;
          if (selectedCategory == "Masters +35 - Individual - M") price = 129;
          if (selectedCategory == "Masters +35 - Individual - F") price = 129;
          if (selectedCategory == "Masters +40 - Individual - M") price = 129;
          if (selectedCategory == "Masters +40 - Individual - F") price = 129;
          if (selectedCategory == "Teens - Individual - M") price = 129;
          if (selectedCategory == "Teens - Individual - F") price = 129;


          console.log("price is", price)

          // if (selectedCategory == "RX Individual Masculino") price = 129;
          // if (selectedCategory == "INTERMEDIO Individual Masculino") price = 129;
          // if (selectedCategory == "MASTERS +40 Masculino") price = 110;
          // if (selectedCategory == "MASTERS +50 Masculino") price = 110;
          // if (selectedCategory == "ESCALADO Individual Masculino") price = 100;
          // if (selectedCategory == "RX Individual Femenino") price = 129;
          // if (selectedCategory == "INTERMEDIO Individual Femenino") price = 129;
          // if (selectedCategory == "MASTERS +40 Femenino") price = 110;
          // if (selectedCategory == "MASTERS +50 Femenino") price = 110;
          // if (selectedCategory == "ESCALADO Individual Femenino") price = 110;
          // if (selectedCategory == "RX Parejas MM") price = 249;
          // if (selectedCategory == "INTERMEDIO Parejas MM") price = 249;
          // if (selectedCategory == "ESCALADO Parejas MM") price = 190;
          // if (selectedCategory == "RX Equipos MMMF") price = 490;
          // if (selectedCategory == "INTERMEDIO Equipos MMMF") price = 490;
          // if (selectedCategory == "ESCALADO Equipos MMMF") price = 360;

          price = price * 100;

          let teammateEmails = [];
          email1 && teammateEmails.push(email1);
          email2 && teammateEmails.push(email2);
          email3 && teammateEmails.push(email3);

          let teamGenders = [];
          email1 && teamGenders.push("Masculino");
          email2 && teamGenders.push("Masculino");
          email3 && teamGenders.push("Femenino");

          if (!emailFound) {
            teamObj = {
              creatorEmail: email,
              teamCategory: selectedCategory,
              teamCreatorId: "userid", // get this after creating the user in authentication
              teamName,
              teammateEmails,
              teammateGenders: teamGenders,
              teamId: "generate uuid",
            };
          }
          console.log("birth date is", birthDate, "genero is", genero)



          let userObj = {
            email,
            firstName,
            lastName,
            address,
            password,
            phoneNumber,
            ciudad: JSON.parse(ciudad).nm,
            provincia: JSON.parse(provincia).nm,
            teamName,
            teammateEmails,
            teamId: teamObj.teamId,
            coupenFlag,
            coupen,
            birthDate,
            gender: genero,
            price: coupenFlag ? price * 0.1 : price,
            payment: emailFound,
            teamFound: emailFound,
            individual: false,
            country: pais,
            street: calle,
            postalCode: codigoPostal,
            boxNumber: boxName,
            categoryName: selectedCategory,
          };

          if (!email1 && !email2 && !email3 && email) {
            userObj = {
              email,
              firstName,
              password,
              lastName,
              payment: false,
              address,
              country: pais,
              boxNumber: boxName,
              phoneNumber,
              birthDate,
              gender: genero,
              ciudad: JSON.parse(ciudad).nm,
              provincia: JSON.parse(provincia).nm,
              coupenFlag,
              coupen,
              price,
              teamFound: false,
              individual: true,
              street: calle,
              postalCode: codigoPostal,
              categoryName: selectedCategory,
              teamName: "",
              teammateEmails: [],
              teamId: "",
            };
            teamObj = {};
          }

          // user id will be generate that will be used when the user is saved in firestore and team

          // const response = await createUserWithEmailAndPassword(auth, email, password);
          // console.log(response.user);

          // const db = getFirestore();

          // const docRef = doc(db, "test_users", response.user.uid);

          // const resutl = await setDoc(docRef, userObj);

          // let uuid = uuidv4();

          // const teamRef = doc(db, "test_Teams", uuid);

          // const teamCreation = await setDoc(teamRef, teamObj);
          // console.log("team cration response is : ", teamCreation);

          // if(coupenFlag){
          //    const coupenref = collection(db, "coupons/Baby/users/");
          //     await addDoc(coupenref, { coupen, userId: response.user.uid });
          // }

          let data = { teamObj, userObj };

          console.log("data is : ", data);

          setLoading(false);

          localStorage.setItem("wodProUserTempData", JSON.stringify(data));

          setTimeout(() => {
            setLoading(false);
            console.log("user is", price/100)
            navigate("/payment", { state: { price: price/100 }});
          }, 1000);
        } else {
          alert("Password must be at least 6 characters");
        }
      } else {
        alert("password does not match");
      }
      // }
      //  else {
      //     alert("Creator cannot be in two teams a creator");
      // }
    } catch (error) {
      console.log("in catch")
      console.log("error msg is : ", error.message);
      if (error.message == "Firebase: Error (auth/email-already-in-use).") {
        alert("Email already in use");
      } else {
        console.log("error while creating the user is ; ", error);
      }
    }
    setLoading(false);

    sendEmail();
  };
  // api integration
  const sendEmail = async () => {
    let emailList = "";
    
    if (email) {
      emailList += email;
    }
    if (email1) {
      (emailList += ","), email1;
    }
    if (email2) {
      emailList += "," + email2;
    }
    if (email3) {
      emailList += "," + email3;
    }
    let text = `${phoneNumber} ${emailList}`;
    
    console.log("email is..", emailList);
    await axios
    .post("/user/sendEmail-nodemailer", {to:emailList, subject:"invitation for join team", text:text})
    .then((res) => {
      console.log("response is",res.data)
    })
    .catch((err) => {
      console.log("err is", err)
    });
  };

  return (
    <>
      <div className="min-h-screen flex-col bg-white flex justify-center flex-1 ">
        <p className="py-5 self-center font-bold text-3xl">
        ¡BIENVENIDO A WOD PRO LEAGUE! 
        </p>
        <div className="flex-1 justify-center flex">
          <div className="flex items-center flex-1 justify-center md:pl-[60px]">
            <div className="flex flex-col gap-1 border-2 border-black rounded-xl pb-3 pt-6 px-6  xl:w-[23%] lg:w-[28%] md:w-[36%] sm:w-[45%]">
              <div className="flex flex-col gap-2 text-black">
                <select
                  value={selectedCategory}
                  onChange={handleSelectChange}
                  className="px-4 py-2  rounded border outline-none border-black text-sm customdropdown"
                >
                  <option value="">Categoria</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name} - {category.price}
                    </option>
                  ))}
                </select>

                {selectedCategory == "RX Parejas - MM" ? (
                  <>
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email1}
                      onChange={handleInputChange(setEmail1)}
                    />
                    <input
                      type="text"
                      placeholder="Nombre del equipo"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={teamName}
                      onChange={handleInputChange(setTeamName)}
                    />
                  </>
                ) : (
                  <></>
                )}

                {selectedCategory == "Scaled Parejas - MF" ? (
                  <>
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email1}
                      onChange={handleInputChange(setEmail1)}
                    />
                    <input
                      type="text"
                      placeholder="Nombre del equipo"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={teamName}
                      onChange={handleInputChange(setTeamName)}
                    />
                  </>
                ) : (
                  <></>
                )}

                {selectedCategory == "Intermediate Parejas - MF" ? (
                  <>
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email1}
                      onChange={handleInputChange(setEmail1)}
                    />
                    <input
                      type="text"
                      placeholder="Nombre del equipo"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={teamName}
                      onChange={handleInputChange(setTeamName)}
                    />
                  </>
                ) : (
                  <></>
                )}

                {selectedCategory == "Intermediate Parejas - MM" ? (
                  <>
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email1}
                      onChange={handleInputChange(setEmail1)}
                    />
                    <input
                      type="text"
                      placeholder="Nombre del equipo"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={teamName}
                      onChange={handleInputChange(setTeamName)}
                    />
                  </>
                ) : (
                  <></>
                )}

                {selectedCategory == "Scaled Parejas - MM" ? (
                  <>
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email1}
                      onChange={handleInputChange(setEmail1)}
                    />
                    <input
                      type="text"
                      placeholder="Nombre del equipo"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={teamName}
                      onChange={handleInputChange(setTeamName)}
                    />
                  </>
                ) : (
                  <></>
                )}

                {selectedCategory == "Scaled Equipos - MMMF" ? (
                  <>
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email1}
                      onChange={handleInputChange(setEmail1)}
                    />
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email2}
                      onChange={handleInputChange(setEmail2)}
                    />
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email3}
                      onChange={handleInputChange(setEmail3)}
                    />
                    <input
                      type="text"
                      placeholder="Nombre del equipo"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={teamName}
                      onChange={handleInputChange(setTeamName)}
                    />
                  </>
                ) : (
                  <></>
                )}

                {selectedCategory == "RX Equipos - MMMF" ? (
                  <>
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email1}
                      onChange={handleInputChange(setEmail1)}
                    />
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email2}
                      onChange={handleInputChange(setEmail2)}
                    />
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email3}
                      onChange={handleInputChange(setEmail3)}
                    />
                    <input
                      type="text"
                      placeholder="Nombre del equipo"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={teamName}
                      onChange={handleInputChange(setTeamName)}
                    />
                  </>
                ) : (
                  <></>
                )}

                {selectedCategory == "Intermediate Equipos - MMMF" ? (
                  <>
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email1}
                      onChange={handleInputChange(setEmail1)}
                    />
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email2}
                      onChange={handleInputChange(setEmail2)}
                    />
                    <input
                      type="text"
                      placeholder="email de tu pareja"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={email3}
                      onChange={handleInputChange(setEmail3)}
                    />
                    <input
                      type="text"
                      placeholder="Nombre del equipo"
                      className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                      value={teamName}
                      onChange={handleInputChange(setTeamName)}
                    />
                  </>
                ) : (
                  <></>
                )}

                {/* {selectedCategory == "ESCALADO Equipos MMMF" ?
                                    <>
                                        <input
                                            type="text"
                                            placeholder="email de tu pareja"
                                            className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                                            value={email1}
                                            onChange={handleInputChange(setEmail1)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="email de tu pareja"
                                            className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                                            value={email2}
                                            onChange={handleInputChange(setEmail2)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="email de tu pareja"
                                            className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                                            value={email3}
                                            onChange={handleInputChange(setEmail3)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Nombre del equipo"
                                            className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                                            value={teamName}
                                            onChange={handleInputChange(setTeamName)}
                                        />
                                    </>
                                    : <></>} */}

                <input
                  type="text"
                  placeholder="Nombre"
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                  value={firstName}
                  onChange={handleInputChange(setFirstName)}
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  className="px-4 py-2 border border-black rounded bg-transparent text-sm"
                  value={lastName}
                  onChange={handleInputChange(setLastName)}
                />
                <select
                  id="gender"
                  value={genero}
                  onChange={handleInputChange(setGenero)}
                  defaultValue={"Gender"}
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                >
                {shownGender?.map((val, ind) => {
                  return <>
                    {val == 'Genero' && <option className="text-black" value="">
                    Genero
                  </option>}
                  {val == 'Male' && <option className="text-black" value="male">
                    Másculino
                  </option>}
                  {val == 'Female' && <option className="text-black" value="female">
                    Femenino
                  </option>}
                  </>
                })}
                  
                  
                  
                </select>
                <input
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  className="px-4 py-2 border border-black rounded bg-transparent  text-sm"
                  value={birthDate}
                  onChange={handleInputChange(setBirthDate)}
                />

                <input
                  type="text"
                  placeholder="Calle"
                  className="px-4 py-2 border border-black rounded bg-transparent  text-sm"
                  value={calle}
                  onChange={handleInputChange(setCalle)}
                />
                <input
                  type="text"
                  placeholder="Número"
                  className="px-4 py-2 border border-black rounded bg-transparent  text-sm"
                  value={numero}
                  onChange={handleInputChange(setNumero)}
                />
                <input
                  type="text"
                  placeholder="Código postal"
                  className="px-4 py-2 border border-black rounded bg-transparent text-sm"
                  value={codigoPostal}
                  onChange={handleInputChange(setCodigoPostal)}
                />

                <select
                  value={provincia}
                  onChange={(e) => setProvincia(e.target.value)}
                  className="px-4 py-2  rounded  text-sm customdropdown border border-black outline-none"
                >
                  <option value="">Provincia</option>
                  {provinces.map((p, index) => (
                    <option key={index} value={JSON.stringify(p)}>
                      {p.nm}
                    </option>
                  ))}
                </select>

                <select
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  className="px-4 py-2  rounded outline-none border border-black text-sm customdropdown"
                >
                  <option value="">Ciudad</option>
                  {cities.map((p, index) => {
                    {/* console.log("id is", JSON.stringify(p.id).substring(1, 3) , JSON.parse(provincia).id.toString())  */}
                     
                    if (
                      provincia &&
                      JSON.stringify(p.id).substring(1, 3) == JSON.parse(provincia).id.toString()
                    ) {
                       return (
                        <option key={index} value={JSON.stringify(p)}>
                          {p.nm}
                        </option>
                      );
                    }
                  })}
                </select>

                <input
                  type="text"
                  placeholder="Pais"
                  className="px-4 py-2 border border-black rounded bg-transparent  text-sm"
                  value={pais}
                  onChange={handleInputChange(setPais)}
                />

                {/* <input
                  type="text"
                  placeholder="Dirección"
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                  value={address}
                  onChange={handleInputChange(setAddress)}
                /> */}
                <input
                  type="text"
                  placeholder="Nombre del box"
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                  value={boxName}
                  onChange={handleInputChange(setBoxName)}
                />
                <input
                  type="tel"
                  placeholder="Número de teléfono"
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                  value={phoneNumber}
                  onChange={handleInputChange(setPhoneNumber)}
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                  value={email}
                  onChange={handleInputChange(setEmail)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                  value={password}
                  onChange={handleInputChange(setPassword)}
                />
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                  value={confirmPassword}
                  onChange={handleInputChange(setConfirmPassword)}
                />
                <input
                  type="text"
                  placeholder="Código descuento"
                  className="px-4 py-2 border border-black rounded bg-transparent text-black text-sm"
                  value={coupen}
                  onChange={handleInputChange(setCoupen)}
                />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                {loading ? (
                  <div className="flex justify-center">
                    {" "}
                    <Loader />
                  </div>
                ) : (
                  <Button
                    text={"Join Now"}
                    bgColor={"#B6B5FF"}
                    borderColor={"#B6B5FF"}
                    textColor={"#1A101A"}
                    handleClick={handleJoinNow}
                  />
                )}
                {/* <div className="flex items-center justify-center gap-1">
                  <p className="text-black text-sm">¿Ya tienes una cuenta? </p>
                  <p
                    onClick={handleSignUp}
                    className=" border-b text-black text-sm cursor-pointer"
                  >
                    {loading ? "loading" : "Accesso"}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
