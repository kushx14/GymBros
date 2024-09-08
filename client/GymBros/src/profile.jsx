import React from 'react'
import { useUser } from '@clerk/clerk-react'

function Profile() {
    const { isSignedIn, user, isLoaded } = useUser()
    console.log(user);
    
      if (isSignedIn) {
        return <div>Hello {user.fullName}!</div>
      }   
      else return <div>Not signed in</div> 

}

export default Profile