import { Container, CategorySection, SectionTitle, CardsWrapper, Card, TopRow, ImageWrapper, DoctorInfo, Name, Specialized, DetailsRow, Rating, StarIcon, Schedule, Time, Description, ExploreMore } from '../../Styles/DoctorConsultingStyle/DoctorsListStyle'
import { FiArrowRightCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const doctorsRating = [
  { rating: 4.8 },
  { rating: 4.9 },
  { rating: 4.8 },
];


const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [geriatricCounselors, setGeriatricCounselors] = useState([]);

  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(state => state.user);

  
  useEffect(() => {
    // Fetch doctors
    axios.get(`${baseURL}/doctors-list/?category=doctor`)
      .then(response => {
        const doctorData = response.data.map((doctor, index) => ({
          ...doctor,
          rating: doctorsRating[index]?.rating || 'No rating'
        }));
        setDoctors(doctorData);
      })
      .catch(error => {
        console.error("There was an error fetching the doctors!", error);
        toast.error("There was an error fetching the doctors!");
      });
  
    // Fetch geriatric counselors
    axios.get(`${baseURL}/doctors-list/?category=geriatric_counselor`)
      .then(response => {
        const counselorData = response.data.map((counselor, index) => ({
          ...counselor,
          rating: doctorsRating[index]?.rating || 'No rating'
        }));
        setGeriatricCounselors(counselorData);
      })
      .catch(error => {
        console.error("There was an error fetching the counselors!", error);
        toast.error("There was an error fetching the counselors!");
      });
  }, []);

  


  const handleDoctorClick = (id) => {
    if (isAuthenticated) {
      navigate(`/doctor-consulting/doctor-details/${id}`);
    } else {
      navigate('/login', {state: {from: '/doctor-consulting'}});
    }
  };


  return (
    <Container>
      <CategorySection>
        <SectionTitle>Doctors</SectionTitle>
        <CardsWrapper>
          {doctors.map((doctor, index) => (
            <Card key={index} onClick={() => handleDoctorClick(doctor.id)}>
              <TopRow>
                <ImageWrapper>
                  <img src={`${baseURL}${doctor.profile_picture}`} alt={doctor.doctor_name} />
                </ImageWrapper>
                <DoctorInfo>
                  <Name>{doctor.doctor_name}</Name>
                  <Specialized>{doctor.specialization}</Specialized>
                  <DetailsRow>
                    <Rating>
                      {doctor.rating} <StarIcon />
                    </Rating>
                    <Schedule>{doctor.schedule}</Schedule>
                    <Time>{doctor.time}</Time>
                  </DetailsRow>
                </DoctorInfo>
              </TopRow>
              <Description>{doctor.details}</Description>
              <ExploreMore>
                Explore More <FiArrowRightCircle />
              </ExploreMore>
            </Card>
          ))}
        </CardsWrapper>
      </CategorySection>

      <CategorySection>
        <SectionTitle>Geriatric Counselors</SectionTitle>
        <CardsWrapper>
          {geriatricCounselors.map((counselor, index) => (
            <Card key={index} onClick={() => handleDoctorClick(counselor.id)}>
              <TopRow>
                <ImageWrapper>
                  <img src={`${baseURL}${counselor.profile_picture}`} alt={counselor.doctor_name} />
                </ImageWrapper>
                <DoctorInfo>
                  <Name>{counselor.doctor_name}</Name>
                  <Specialized>{counselor.specialization}</Specialized>
                  <DetailsRow>
                    <Rating>
                      {counselor.rating} <StarIcon />
                    </Rating>
                    <Schedule>{counselor.schedule}</Schedule>
                    <Time>{counselor.time}</Time>
                  </DetailsRow>
                </DoctorInfo>
              </TopRow>
              <Description>{counselor.details}</Description>
              <ExploreMore>
                Explore More <FiArrowRightCircle />
              </ExploreMore>
            </Card>
          ))}
        </CardsWrapper>
      </CategorySection>
  </Container>
  )
}

export default DoctorsList