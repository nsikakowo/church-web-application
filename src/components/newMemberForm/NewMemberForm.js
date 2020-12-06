import React from 'react'
import './newMemberForm.css'

function NewMemberForm() {
    return (
        <div className='new-form'>
            <form>
                <label htmlFor="fullName">
                    FullName: <br/>
                    <input type="text" name="fullname"  placeholder = 'Enter Full Name'/>
                </label>
                <label htmlFor="email">
                    Email: <br/>
                    <input type="email" name="email" placeholder ='Enter Your Email'/>
                </label>
                <label htmlFor="phone">
                    Contact Number: <br/>
                    <input type="tel" name="phone" placeholder ='Enter Your Phone Number'/>
                </label>
                <label htmlFor="homeAddress">
                    Home Address: <br/>
                    <input type="text" name="address" placeholder ='Enter Your Home Address'/>
                </label>
                <label htmlFor="firstTimer">
                    Have you visited the church before? <br/>
                    <input type="radio" value="Yes" name="firstTimer" id='yes' /> Yes
                    <input type="radio" value="No" name="firstTimer" id='no' /> No
                </label>
                <label htmlFor="how-you found-us">
                    How did you hear about us? <br/>
                    <select name="how-you found-us">
                        <option value="radio">Radio</option>
                        <option value="tv">TV</option>
                        <option value="sm">Social Media</option>
                    </select>
                </label>
                <label htmlFor="prayer">
                Anything you would like us to pray with you about? <br/>
                <input type="text" name="prayer" placeholder ='' />
                </label>
                <button className='btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default NewMemberForm
