import { useState } from 'react';
import { Accordion } from "react-bootstrap";
import { GeoAlt, Globe, HouseFill, Person, Phone, Printer, Signpost, SortNumericDown } from 'react-bootstrap-icons';
import SubmitBtn from '../../helper/SubmitBtn';
import Demo from '../../assets/images/user.png';
import UserStore from '../../store/UserStore';
import { SuccessMSG } from '../../utility/MessageHelper';
import { getToken } from '../../utility/Storage';
const token = getToken();

const ProfileComponent = () => {

    let {CustomerDetails, CustomerForm, CustomerFormChange, ProfileSaveRequest} = UserStore();
    const [controlField, setcontrolField] = useState(true)
    const [Class, setClass] = useState('')
    const [Icon, setIcon] = useState('bi bi-pencil-square')
    const [Photo, setPhoto] = useState(null)
    const imageChange = async (e) => {
        const file = e.target.files[0];
        if(file){
            setPhoto(URL.createObjectURL(file))
        }
    }
    const editNumber = () => {
        setcontrolField(false);
        setClass('fieldActive');
        setIcon('bi bi-check2');
    }
    const SaveChanges = async () => {

        let response = await ProfileSaveRequest(CustomerForm, token)
        if(response === true){
            setcontrolField(true);
            setClass('');
            setIcon('bi bi-pencil-square');
            SuccessMSG('Profile saved')
        }

    }
    if(CustomerDetails === ''){
        return <h1>Loading...</h1>
    }else{
    return (
        <div>
            <h5 className='profile-title m-0'>Manage your profile</h5>
            <p className='profile-summary'>Easily update your personal details and view your tier status.</p>
            <div className='personal-details-1 py-2'>
                <div className='profile-ard py-4'>
                    <div className="avatar-wrapper">
                        <label htmlFor="profileUpload" className='profileUpload'>
                            <img src={Photo || Demo} alt={Photo || Demo} className="avatar" />
                        </label>
                        <input id='profileUpload'accept='image/*' onChange={imageChange} type="file" style={{display: 'none'}} />
                    </div>
                    <div className='avater-content'>
                        <h3 className='m-0'>{CustomerForm['cus_name']}</h3>
                        <div className="phone-number d-flex align-items-center flex-column">
                            <input type="text" value={CustomerForm['cus_phone']} onChange={(e) => {CustomerFormChange('cus_phone', e.target.value)}} className={`focus ${Class}`} disabled={controlField} />
                            <span className="edit mt-2">
                                <i onClick={controlField ? editNumber : SaveChanges} className={Icon}></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="general-info py-4 px-4">
                    <div className='cust-field'>
                        <Globe />
                        <input  type="text" value={CustomerForm['cus_country']} onChange={(e) => {CustomerFormChange('cus_country', e.target.value)}} className={`focus ${Class}`} disabled={controlField} />
                    </div>
                    <div className='cust-field'>
                        <Signpost />
                        <input  type="text" value={CustomerForm['cus_state']} onChange={(e) => {CustomerFormChange('cus_state', e.target.value)}} className={`focus ${Class}`} disabled={controlField}   />
                    </div>
                    <div className='cust-field'>
                        <GeoAlt   />
                        <input  type="text" value={CustomerForm['cus_city']} onChange={(e) => {CustomerFormChange('cus_city', e.target.value)}} className={`focus ${Class}`} disabled={controlField} />
                    </div>
                    <div className='cust-field'>
                        <SortNumericDown />
                        <input  type="text" value={CustomerForm['cus_postcode']} onChange={(e)=> {CustomerFormChange('cus_postcode', e.target.value)}} className={`focus ${Class}`} disabled={controlField}  />
                    </div>
                    <div className='cust-field'>
                        <Printer      />
                        <input  type="text" value={CustomerForm['cus_fax']} onChange={(e) => {CustomerFormChange('cus_fax', e.target.value)}} className={`focus ${Class}`} disabled={controlField}   />
                    </div>
                    <div className='cust-field'>
                        <HouseFill     />
                        <input  type="text" value={CustomerForm['cus_add']} onChange={(e) => {CustomerFormChange('cus_add', e.target.value)}} className={`focus ${Class}`} disabled={controlField}  />
                    </div>
                    <SubmitBtn onClick={SaveChanges} Text="Save now" >Sent OTP</SubmitBtn>
                </div>
            </div>
            <div className='shipping-details-1 mt-4'>
                <Accordion defaultActiveKey="0">

                    <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Manage your shipping details
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className='d-flex gap-3'>
                            <div className='cust-field'>
                                <Globe />
                                <input  type="text" value={CustomerForm['ship_country']} onChange={(e) => {CustomerFormChange('ship_country', e.target.value)}} className={`focus shipping-field`} />
                            </div>
                            <div className='cust-field'>
                                <Signpost />
                                <input  type="text" value={CustomerForm['ship_state']} onChange={(e) => {CustomerFormChange('ship_state', e.target.value)}} className={`focus shipping-field`} />
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <div className='cust-field'>
                                <GeoAlt   />
                                <input  type="text" value={CustomerForm['ship_city']} onChange={(e) => {CustomerFormChange('ship_city', e.target.value)}} className={`focus shipping-field`} />
                            </div>
                            <div className='cust-field'>
                                <SortNumericDown />
                                <input  type="text" value={CustomerForm['ship_postcode']} onChange={(e) => {CustomerFormChange('ship_postcode', e.target.value)}} className={`focus shipping-field`} />
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <div className='cust-field'>
                                <Phone />
                                <input  type="text" value={CustomerForm['ship_phone']} onChange={(e) => {CustomerFormChange('ship_phone', e.target.value)}} className={`focus shipping-field`} />
                            </div>
                            <div className='cust-field'>
                                <HouseFill />
                                <input  type="text" value={CustomerForm['ship_add']} onChange={(e) => {CustomerFormChange('ship_add', e.target.value)}} className={`focus shipping-field`} />
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <div className='cust-field'>
                                <Person />
                                <input  type="text" value={CustomerForm['ship_name']} onChange={(e) => {CustomerFormChange('ship_name', e.target.value)}} className={`focus shipping-field`} />
                            </div>
                            <div className='cust-field'>
                                <SubmitBtn onClick={SaveChanges} Text="Save now" >Sent OTP</SubmitBtn>
                            </div>
                        </div>
                    </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    );
    }


};

export default ProfileComponent;