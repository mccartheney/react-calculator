import React from 'react';

function Screen(props) {
  const {operation, result} = props;
  return (<div className='main__screen'>
            <div className='main__screen__operation'>
              <p>
                {operation}
              </p>
            </div>

            <div className='main__screen__total'>
              <p>
                {result}
              </p>
            </div>
          </div>);
}

export default Screen;