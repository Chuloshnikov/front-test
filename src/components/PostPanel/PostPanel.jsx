import React, { useEffect, useState } from 'react';

import { getPositions } from "../../Services/api";
import { PostPanelContainer, StyledInput, FormWrapper, Label, InputCheckbox, InputUpload, SignUpButton } from "./PostPanel.styled";
import { schema } from "../../PostPanelValidation/PostPanelValidation";
import * as yup from 'yup';
import axios from 'axios';

const PostPanel = () => {
    const [positions, setPositions] = useState([]);
    const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          position_id: '',
          photo: null
        });
      const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        getPositions().then(data => {
            setPositions(data.positions) 
        })
    }, []);
      
        const onHandleChange = (e) => {
          const { name, value, files } = e.target;
          setFormData(prevState => ({
            ...prevState,
            [name]: name === 'photo' ? files[0] : value
          }));
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            await schema.validate(formData, { abortEarly: false });
            setIsSubmitting(true);
            const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
            const config = {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Token': 'eyJpdiI6Im9mV1NTMlFZQTlJeWlLQ3liVks1MGc9PSIsInZhbHVlIjoiRTJBbUR4dHp1dWJ3ekQ4bG85WVZya3ZpRGlMQ0g5ZHk4M05UNUY4Rmd3eFM3czc2UDRBR0E4SDR5WXlVTG5DUDdSRTJTMU1KQ2lUQmVZYXZZOHJJUVE9PSIsIm1hYyI6ImE5YmNiODljZjMzMTdmMDc4NjEwN2RjZTVkNzBmMWI0ZDQyN2YzODI5YjQxMzE4MWY0MmY0ZTQ1OGY4NTkyNWQifQ==' // замініть на свій токен
              }
            };
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('position_id', formData.position_id);
            data.append('photo', formData.photo);
            const response = await axios.post(url, data, config);
            console.log(response.data);
            if (response.data.success) {
             console.log("Пройшло")
            } else {
              console.log("Не ніхуя")
            }
          } catch (err) {
            if (err instanceof yup.ValidationError) {
              const newErrors = {};
              err.inner.forEach(error => {
                newErrors[error.path] = error.message;
              });
              setErrors(newErrors);
            } else {
              console.error(err);
            }
          } finally {
            setIsSubmitting(false);
          }
        };
      

    return (
        <PostPanelContainer id='signUp'>
            <h2>Working with POST request</h2>     
            <FormWrapper onSubmit={handleSubmit}>

                <StyledInput                
                    placeholder="Your name"
                    type="text" 
                    value={formData.name} 
                    name="name" 
                    onChange={onHandleChange}
                />

                <StyledInput
                    placeholder="Email"
                    type="email" 
                    value={formData.email} 
                    name="email" 
                    onChange={onHandleChange}
                />

                <StyledInput
                    placeholder="Phone"
                    type="tel" 
                    value={formData.phone} 
                    name="phone" 
                    onChange={onHandleChange}
                />
                
                <span>+38 (XXX) XXX - XX - XX</span>

                <h3>Select your position</h3>

                {positions.map((position) => (
                    <Label htmlFor="" key={position.id} >
                        <InputCheckbox 
                            onChange={onHandleChange} 
                            type="radio" 
                            value={position.id} 
                            name="position"
                        />
                        {position.name}
                    </Label>
                ))}
                
                
                <InputUpload 
                    onChange={onHandleChange} 
                    type="file" 
                    name="photo"
                />
                
                <SignUpButton type="submit" onClick={handleSubmit}> Sign up </SignUpButton>
            </FormWrapper>
        </PostPanelContainer>
    )
};

export default PostPanel;