export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#signup'
                  className='btn btn-custom btn-lg page-scroll'
                  style={{width:'45%', height: '20%', margin:'10px', fontSize: '15px'}}
                >
                  Call a KÄR
                </a>
                
                <a
                  href='#signup'
                  className='btn btn-custom btn-lg page-scroll'
                  style={{width:'45%', height: '20%', margin:'10px', fontSize: '15px'}}
                >
                  Become a KÄR Driver
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
