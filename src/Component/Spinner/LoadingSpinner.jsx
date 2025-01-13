
import { SyncLoader } from 'react-spinners'

export const LoadingSpinner = () => {
    
  return (
    <div className='flex  h-screen justify-center items-center'>
        <SyncLoader
      size={40}
      color="#ec1414"
      margin={10}
        ></SyncLoader>

    </div>
  )
}
