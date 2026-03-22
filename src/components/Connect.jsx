import React from 'react'

export async function Connect() {
    const connect = await fetch('https://homework-api.noevchanmakara.site/api/v1');
  const dataUser = await connect.json();
  console.log(dataUser)
  return (
    <div>
        working
      
    </div>
  )
}
