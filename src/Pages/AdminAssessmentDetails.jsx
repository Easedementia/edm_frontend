import AdminNavbar from "../Components/AdminSide/AdminNavbar"
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { baseURL } from "../api/api";


const AdminAssessmentDetails = () => {
    const [assessments, setAssessments] = useState([]);
    const [firstPersonAssessment, setFirstPersonAssessments] = useState([]);
    console.log("Self Assessments:", assessments);
    console.log("First Person Assessment:", firstPersonAssessment)

    useEffect(() => {
        const fetchSelfAssessments = async () => {
            try{
                const response = await axios.get(`${baseURL}/admin-side/self-assessment-list/`);
                setAssessments(response.data);
            } catch (error) {
                console.log('There was an error fetching the appointments!', error);
                toast.error('There was an error fetching the appointments!');
            }
        };
        fetchSelfAssessments();
    },[]);


    useEffect(() => {
        const fetchFirstPersonAssessments = async () => {
            try{
                const response = await axios.get(`${baseURL}/admin-side/first-person-assessment-list/`);
                setFirstPersonAssessments(response.data);
            } catch (error) {
                console.log('There was an error fetching the appointments!', error);
                toast.error('There was an error fetching the appointments!');
            }
        };
        fetchFirstPersonAssessments();
    },[]);

  return (
    <>
    <AdminNavbar/>
    <h1 style={{marginTop:'135px', color:'black', fontFamily:'Poppins', fontSize:'24px'}} >Self Assessment Details</h1>
    <MDBTable align='middle' style={{ marginTop: '30px' }}>
        <MDBTableHead>
            <tr>
                <th scope='col' style={{ color: '#232121' }}>User Name</th>
                <th scope='col' style={{ color: '#232121' }}>Email</th>
                <th scope='col' style={{ color: '#232121' }}>Date Taken</th>
                <th scope='col' style={{ color: '#232121' }}>Score</th>
                <th scope='col' style={{ color: '#232121' }}>Interpretation</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {Array.isArray(assessments) && assessments.length > 0 ? (
                assessments.slice().reverse().map((assessment) => (
                    <tr key={assessment.id}>
                        <td>{assessment.fullname}</td>
                        <td>{assessment.email}</td>
                        <td>{new Date(assessment.date_taken || assessment.assessment_date).toLocaleDateString('en-GB')}</td>
                        <td>{assessment.score || assessment.assessment_score}</td>
                        <td>{assessment.interpretation || 'N/A'}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="6">No assessments available</td>
                </tr>
            )}
        </MDBTableBody>
    </MDBTable>




    <h1 style={{marginTop:'135px', color:'black', fontFamily:'Poppins', fontSize:'24px'}} >First Person Assessment Details</h1>
    <MDBTable align='middle' style={{ marginTop: '30px' }}>
        <MDBTableHead>
            <tr>
                <th scope='col' style={{ color: '#232121' }}>User Name</th>
                <th scope='col' style={{ color: '#232121' }}>Email</th>
                <th scope='col' style={{ color: '#232121' }}>Date Taken</th>
                <th scope='col' style={{ color: '#232121' }}>Score</th>
                <th scope='col' style={{ color: '#232121' }}>Interpretation</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {Array.isArray(firstPersonAssessment) && firstPersonAssessment.length > 0 ? (
                firstPersonAssessment.slice().reverse().map((assessment) => (
                    <tr key={assessment.id}>
                        <td>{assessment.fullname}</td>
                        <td>{assessment.email}</td>
                        <td>{new Date(assessment.date_taken || assessment.assessment_date).toLocaleDateString('en-GB')}</td>
                        <td>{assessment.score || assessment.assessment_score}</td>
                        <td>{assessment.interpretation || 'N/A'}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="6">No assessments available</td>
                </tr>
            )}
        </MDBTableBody>
    </MDBTable>

    </>
    
  )
}

export default AdminAssessmentDetails