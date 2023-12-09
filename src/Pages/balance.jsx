// balance.js

import './balance.css';

export default function Balance() {
  return (
    <div className='balance'>
      <div className='boxx'>
        <div className='pay'>
          <div>Your Balance</div>
        </div>

        <div className='pay1'>
          <div>2,000,000 $</div>
          <button className='depo'>DEPOSIT</button>
        </div>
      </div>

      <div className='tab'>
        <div className='txt'>History</div>

        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th>PaymentId</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Peter Griffin</td>
                <td>27/10/2546 12:00 PM - 02:00 PM</td>
                <td>PREMIUM-COURSE</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='aaa'>
        <a href="/">
        <div className='backbutton-container'>
          <button className='backbutton'>
          Back
        </button>
        </div>
        </a>
        </div>
    
    </div>
  );
}
