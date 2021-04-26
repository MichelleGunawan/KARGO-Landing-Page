import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  action: '',
  name: '',
  number: '',
  pickup: '',
  dropoff: '',
}
export const Signup = (props) => {
  const [{action, name, number, pickup, dropoff }, setState] = useState(initialState)
  const [show, setShow] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleRequestAction = (e) => {
    setShow(true);
  }
  const handleDriveAction = (e) => {
    setShow(false);
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(action, name, number, pickup, dropoff)
    emailjs
      .sendForm(
        'service_w1ujmbm', 'template_vbijeg7', e.target, 'user_mwismRY0aiIUFkNfwguj6'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='signup'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div 
              className='section-title' 
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center', 
                marginBottom: '30px'
                }}>
                <h2>Signup</h2>
                <div style={{color: '#555', fontSize:'25px'}}>
                  <input type="radio" value="request" name="action" onClick={handleChange} onChange={handleRequestAction}/> Request
                  <input type="radio" value="drive" name="action" style={{marginLeft: '10%'}} onClick={handleChange} onChange={handleDriveAction}/> Drive
                </div>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row' style={{paddingRight: '10%', paddingLeft: '10%',  marginBottom: '30px'}}>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='number'
                        id='number'
                        name='number'
                        className='form-control'
                        placeholder='Phone Number'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                
                <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='pickup'
                        name='pickup'
                        className='form-control'
                        placeholder='Pickup Address'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  {show &&  <div className='col-md-12' >
                    <div className='form-group'>
                      <input
                        type='text'
                        id='dropoff'
                        name='dropoff'
                        className='form-control'
                        placeholder='Dropoff Address'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>}
                 
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg' 
                style={{marginLeft: '42%',  width: '16%'}}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
