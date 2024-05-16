// import PhoneInput from 'react-phone-input-2'
// import React, { useState } from "react";


// const PhoneNumberValidation=()=>{
//   const [phoneNumber, setPhoneNumber] = useState('');
//     const [valid, setValid] = useState(true);

//     const handlePhoneChange = (value) => {
//         setPhoneNumber(value);
//         setValid(validatePhoneNumber(value));
//     };

//     const validatePhoneNumber = (phoneNumber) => {
//         const phoneNumberPattern = /^\d{10,13}$/;
//         return phoneNumberPattern.test(phoneNumber);
//     }
//     return(
//       <div className={style.phoneBox}>
        
           
//             <PhoneInput
//             country={'ng'}
//             name="phone"
//             placeholder="Enter Phone Number "
//             inputProps={{ required: true }}
//             value={phoneNumber}
//             onChange={handlePhoneChange}
//             style={{ width: '20px', fontSize: '15px'}}
//             inputStyle={{  width: '370px', height: '45px', borderRadius: '10px',fontSize: '16px' }}
//             dropdownStyle={{ border: '1px solid #ccc', borderTop: 'none', borderRadius: '10px', maxHeight: '200px', overflowY: 'auto', flexDirection: 'column' ,gap:'0'}}
//             />
            
//               {!valid && <p className={style.warning}>Please enter a valid phone number.</p>}
//             </div>
//     )
// }
// export default PhoneNumberValidation