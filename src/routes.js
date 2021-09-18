import Toppage from '@/components/Header/Toppage'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'


import Home from '@/components/Action/Home'
import Camera from '@/components/Action/Camera'
import Image from '@/components/Action/Image'

export const routes = [
    {
      path: '/',
      name: 'Toppage',
      component: Toppage
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
 
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/camera',
      name: 'Camera',
      component: Camera
    },
    {
      path: '/image',
      name: 'Image',
      component: Image
    }
  ]

