import { Container, Track, Slider, Card, ImageWrapper, TopRow, DetailsRow, DoctorInfo, Name, Specialized, Rating, StarIcon, Schedule, Time, Description, ExploreMore } from '../../Styles/DoctorConsultingStyle/DoctorsListStyle'
import { FiArrowRightCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const doctorsRating = [
  { rating: 4.8 },
  { rating: 4.9 },
  { rating: 4.8 },
];


const DoctorsList = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/doctors-list/`)
      .then(response => {
        const combinedData = response.data.map((doctor, index) => ({
          ...doctor,
          rating: doctorsRating[index]?.rating || 'No rating'
        }));
        setDoctors(combinedData);
      })
      .catch(error => {
        console.error("There was an error fetching the doctors!", error);
        toast.error("There was an error fetching the doctors!");
      });
  }, []);


  const handleDoctorClick = (id) => {
    navigate(`/doctor-consulting/doctor-details/${id}`);
  };


  return (
    <Container>
      <Slider>
        <Track>
          {[...doctors, ...doctors].map((doctor, index) => (
            <Card key={index} onClick={() => handleDoctorClick(doctor.id)} >
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
        </Track>
      </Slider>
    </Container>
  )
}

export default DoctorsList