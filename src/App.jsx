import axios from 'axios';
import React from 'react'

export async function getCourses() {
  try {
    const url = `https://www.udemy.com/api-2.0/course/`;
    const headers = {
      "Authorization": "Basic Xj925OKZeT41Fp0VDVjarABMgAbYXdWsoZ5XrE406oDeinEH3RDkE35eicieQqHbOfNFgVu0i7D2ksfi3VmsXHxQuJpKfZ1rpxiASYobKzKSFxTKc2CPT5YD51eq60cX" ,
      "Content-Type": "application/json",
    };
    const params = new URLSearchParams({
      'page_size': 20,
      'page':200
    });
    const response = await axios.get(url, {
      headers,
      params
    });
    if (!response.ok) {
      return []
    } else {

      const result = await response.json();
      console.log(result)
      return result;
  }
  } catch (error) {
    console.log(error)
  }
}
getCourses()

const App = () => {
  return (
    <div>Hello world</div>
  )
}

export default App