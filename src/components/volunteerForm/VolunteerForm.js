import React from 'react'
import './volunteerForm.css'

function VolunteerForm() {
    return (
        <div className='cell-form'>
            <form>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" placeholder='Enter Full Name'/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Enter Email'/>
                <label htmlFor="contact">Contact Number</label>
                <input type="text" name="contact" id="contact" placeholder='Enter Contact Number'/>
                <label htmlFor="home">Home Address</label>
                <input type="text" name="home" id="home" placeholder='Enter Home Address'/>

                <label htmlFor="member">
                    Are You A Member of Our Church? <br/>
                    <input type="radio" value="Yes" name="member" id='yes' /> Yes </label>
                    <label htmlFor="member">
                    <input type="radio" value="No" name="member" id='no' /> No </label>
                
                    <label htmlFor="married">
                    Are You A Married? <br/>
                    <input type="radio" value="Yes" name="married" id='yes' /> Yes </label>
                    <label htmlFor="married">
                    <input type="radio" value="No" name="married" id='no' /> No </label>

                    <label htmlFor="fullName">Spouse Name</label>
                <input type="text" name="spouse" id="spouse" placeholder='Enter Spouse Name'/>

                <label htmlFor="children">
                    Do you have Children? <br/>
                    <input type="radio" value="Yes" name="children" id='yes' />
                    Yes</label>
                    <label htmlFor="children">
                    <input type="radio" value="No" name="children" id='no' />
                    No</label>

                    <label htmlFor="NoOfChildren">
                    No of Children? <br/>
                    <input type="radio" value="1" name="NoOfChildren" id='1' /> 1 </label>
                    <label htmlFor="NoOfChildren">
                    <input type="radio" value="2" name="NoOfChildren" id='2' /> 2 </label>
                    <label htmlFor="NoOfChildren">
                    <input type="radio" value="3" name="NoOfChildren" id='2' /> 3 </label>
                    <label htmlFor="NoOfChildren">
                    <input type="radio" value="4" name="NoOfChildren" id='2' /> 4 </label>
                    <label htmlFor="NoOfChildren">
                    <input type="radio" value="5" name="NoOfChildren" id='2' /> 5 </label>
                    <label htmlFor="NoOfChildren">
                    <input type="radio" value="6" name="NoOfChildren" id='2' /> 6 or more </label>

                    <label htmlFor="interest">Name of Interested Department</label>
                <input type="text" name="interest" id="fullName" placeholder='Enter Name of Interested Department'/>

                    <button className='btn-primary'>Submit</button>

            </form>
        </div>
    )
}

export default VolunteerForm
