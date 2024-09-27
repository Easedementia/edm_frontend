// import axios from "axios"
// import { useSelector } from "react-redux"
// import { baseURL } from "../../api/api"
// import { useEffect, useState } from "react"
// import UserNavbar from "../Navbar/UserNavbar"
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';



// const UserSideAppointments = () => {
//     const [appointments, setAppointments] = useState([]);
//     console.log("APPOINTMENTS:", appointments)
//     const userID = useSelector((state) => state.user.user.user.id);
//     console.log("UserID:", userID)


//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 if (userID) {
//                     const response = await axios.get(`${baseURL}/appointments/`, {
//                         params: { user_id: userID } 
//                     });
//                     setAppointments(response.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching appointments:", error);
//             }
//         };

//         fetchAppointments();
//     }, [userID]);




//     const doctorNameBodyTemplate = (appointment) => {
//         return <span>{appointment.doctor_name}</span>;
//     };

//     const dateBodyTemplate = (appointment) => {
//         return <span>{appointment.time_slot_date}</span>;
//     };

//     const timeBodyTemplate = (appointment) => {
//         return <span>{appointment.time_slot_start_time}</span>;
//     };

//     const meetLinkBodyTemplate = (appointment) => {
//         return appointment.meet_link ? (
//             <a href={appointment.meet_link} target="_blank" rel="noopener noreferrer">
//                 Join Google Meet
//             </a>
//         ) : (
//             <span>No meeting link</span>
//         );
//     };

//     // const header = (
//     //     <div className="flex flex-wrap align-items-center justify-content-between gap-2">
//     //         <span className="text-xl text-900 font-bold">Your Appointments</span>
//     //         <Button icon="pi pi-refresh" rounded raised onClick={() => window.location.reload()} />
//     //     </div>
//     // );

//   return (
//     <>
//     <UserNavbar/>
//     <span className="text-xl text-900 font-bold" style={{fontFamily:'Poppins'}} >Your Appointments</span>
//     <div className="card" style={{marginTop:'30px'}} >
//                 <DataTable value={appointments} tableStyle={{ minWidth: '60rem' }}>
//                     <Column field="doctor_name" header="Doctor" body={doctorNameBodyTemplate}></Column>
//                     <Column field="time_slot_date" header="Date" body={dateBodyTemplate}></Column>
//                     <Column field="time_slot_start_time" header="Time" body={timeBodyTemplate}></Column>
//                     <Column header="Meet Link" body={meetLinkBodyTemplate}></Column>
//                 </DataTable>
//             </div>
//     </>
//   )
// }

// export default UserSideAppointments