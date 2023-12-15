//check login button
import { checkToken } from '../../utilities/users-service';

export default function OrderHistoryPage() {
  // check login button
  async function handleCheckToken() {
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      
      {/* check login button */}
      <button onClick={ handleCheckToken }>Check When My Login Expires</button>
    </>
  );
}