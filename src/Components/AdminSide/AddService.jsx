import { AddServiceContainer, AddButton, ServiceForm, FormField, Label, Input, TextArea, ButtonContainer, CancelButton,  SubmitButton } from '../../Styles/AdminSideStyle/AddServiceStyle'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { baseURL } from '../../api/api';
import { toast } from 'react-toastify';
import { Table, Button } from 'react-bootstrap';
import EditServiceModal from './EditServiceModal';


const AddService = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [services, setServices] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState(null);


  useEffect(() =>{
    fetchServices();
  }, []);


  const fetchServices = async () => {
    try{
      const response = await axios.get(`${baseURL}/admin-side/services/`);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services', error);
      toast.error('Error fetching services');
    }
  };


  const handleEdit = (id) => {
    setCurrentServiceId(id);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentServiceId(null);
  };


  
  const handleDelete = async (id) => {
    try{
      await axios.delete(`${baseURL}/admin-side/services/${id}/`);
      toast.success('Service deleted successfully');
      fetchServices();
    } catch (error) {
      console.error('Error deleting service', error);
      toast.error('Error deleting service');
    }
  };


  const handleAddClick = () => {
    setShowForm(true);
  };


  const handleCancelClick = () => {
    setShowForm(false);
    setTitle('');
    setDescription('');
    setImage(null);
  };

  

  const handleFormSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      await axios.post(`${baseURL}/admin-side/add-service/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Service added successfully');
      setShowForm(false);
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Error adding service:', error);
      toast.error('Error adding service');  
    }
  };

  return (
    <>
    <Table striped bordered hover style={{marginTop:'150px'}}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map(service => (
          <tr key={service.id}>
            <td>{service.title}</td>
            <td>{service.description}</td>
            <td><img src={`${baseURL}${service.image}`} alt={service.title} style={{ width: '50px', height: '50px' }} /></td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(service.id)} style={{ marginRight: '10px' }}>Edit</Button>
              <Button variant="danger" onClick={() => handleDelete(service.id)} style={{marginRight: '10px' }} >Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

    <EditServiceModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        serviceId={currentServiceId}
        fetchServices={fetchServices}
      />

    <AddServiceContainer>
      {!showForm && (
        <AddButton onClick={handleAddClick}>
          Add Service
        </AddButton>
      )}
      <ServiceForm show={showForm} onSubmit={handleFormSubmit}>
        <FormField>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="image">Image</Label>
          <Input
            type="file"
            id="image"
            accept=".svg"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </FormField>
        <ButtonContainer>
          <CancelButton type="button" onClick={handleCancelClick}>Cancel</CancelButton>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ButtonContainer>  
      </ServiceForm>
    </AddServiceContainer>
    </>
    

  )
}

export default AddService