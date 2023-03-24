import React, { useEffect, useState } from 'react';

import { getPositions } from "../../Services/api";
import { getToken } from "../../Services/api";
import { PostPanelContainer, StyledInput, FormWrapper, Label, InputCheckbox, InputUpload, SignUpButton } from "./PostPanel.styled";
import { validationSchema } from "../../PostPanelValidation/PostPanelValidation";
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
    const [token, setToken] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        getPositions().then(data => {
            setPositions(data.positions) 
        })
    }, []);

        const resetForm = () => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            position_id: "",
            photo: null,
          });
        };
      
        const onHandleChange = (e) => {
          const { name, value, files } = e.target;
          setFormData(prevState => ({
            ...prevState,
            [name]: name === 'photo' ? files[0] : value
          }));
        };

        useEffect(() => {
          console.log(formData);
        }, [formData]);

        const handleSubmit = async (e) => {
          e.preventDefault();
          console.log('handleSubmit called');
          try {
            await validationSchema.validate(formData, { abortEarly: false });
            setIsSubmitting(true);
            console.log('formData:', formData);
        
            const tokenResponse = await getToken();
            const newToken = tokenResponse.token;
            console.log(newToken)
            setToken(newToken);
        
            const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
            const config = {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Token': newToken,
                
              }
            };
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('position_id', formData.position_id);
            data.append('photo', formData.photo);
            console.log(formData);
            const response = await axios.post(url, data, config);
        
            if (response.data.success) {
              console.log("Success");
              resetForm();
            } else {
              console.log("Error")
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
                    name="name" 
                    value={formData.name}
                    onChange={onHandleChange}
                />

                <StyledInput
                    placeholder="Email"
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={onHandleChange}
                />

                <StyledInput
                    placeholder="Phone"
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={onHandleChange}
                />
                
                <span>+38 (XXX) XXX - XX - XX</span>

                <h3>Select your position</h3>

                {positions.map((position) => (
                    <Label htmlFor="" key={position.id} >
                        <InputCheckbox 
                            onChange={onHandleChange} 
                            type="radio" 
                            name="position_id"
                            value={position.id}
                        />
                        {position.name}
                    </Label>
                ))}
                
                
                <InputUpload 
                    onChange={onHandleChange} 
                    type="file" 
                    name="photo"
                />
                
                <SignUpButton type="submit"> Sign up </SignUpButton>
            </FormWrapper>
        </PostPanelContainer>
    )
};

export default PostPanel;