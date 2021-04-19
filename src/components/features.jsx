import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  {' '}
                  <FontAwesomeIcon icon={d.icon} size="4x" class="fi"/>
                  
                  {/* <i className={d.icon}></i> */}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}


// data.json:
//   {
//       "icon": "truck",
//       "title": "OTO XL",
//       "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
//   }
//   {
            
//     "icon": "motorcycle",
//     "title": "OTO S",
//     "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
//   }