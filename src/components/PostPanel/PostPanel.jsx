import React, { useEffect, useState } from 'react';

import { getPositions } from "../../Services/api";
import { PostPanelContainer, StyledInput, FormWrapper, Label, InputCheckbox, InputUpload, SignUpButton } from "./PostPanel.styled";
import { userSchema } from "../../PostPanelValidation/PostPanelValidation";

const PostPanel = () => {
    const [positions, setPositions] = useState([]);
    const [form, setForm] = useState ({
        name: "",
        email: "",
        phone: "",
        position: "",
        photo: null,
    });

    useEffect(() => {
        getPositions().then(data => {
            setPositions(data.positions) 
        })
    }, []);
    // console.log(positions)

    const onHandleChange = e => {
        const {name, value, type, files} = e.target;
        setForm(prevState => ({
            ...prevState, 
            [name]: type === "file" ? files[0] : value
        })) 
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value
        };
        // console.log(form)
        
        const isValid = await userSchema.isValid(formData);
        console.log(isValid)

        e.target.reset();
    };

    return (
        <PostPanelContainer>
            <h2>Working with POST request</h2>     
            <FormWrapper onSubmit={handleSubmit}>

                <StyledInput                
                    placeholder="Your name"
                    type="text" 
                    value={form.name} 
                    name="name" 
                    onChange={onHandleChange}
                />

                <StyledInput
                    placeholder="Email"
                    type="email" 
                    value={form.email} 
                    name="email" 
                    onChange={onHandleChange}
                />

                <StyledInput
                    placeholder="Phone"
                    type="tel" 
                    value={form.phone} 
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
                
                <SignUpButton type="submit"> Sign up </SignUpButton>
            </FormWrapper>
        </PostPanelContainer>
    )
};
export default PostPanel;