'use client'
import { SignOut } from '@/lib/actions/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { HiHome } from 'react-icons/hi';
import MiniProfile from './MiniProfile';

export default function Sidebar({user}) {
    const router = useRouter();

  async function handleSignOut() {
    const res = await SignOut();
    if (res?.success) {
      router.push('/sign-in'); // or wherever you want after sign out
    } else {
      alert('Sign out failed');
    }
  }

  return (
    <div className="fixed top-0 left-0 flex flex-col justify-between h-screen w-20 xl:w-64 p-3 border-r bg-white z-50">

      <div className='flex flex-col gap-4 p-3'>
        {/* Logo Icon */}
        <Link href='/'>
          <FaXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200' />
        </Link>

        {/* Home Link */}
        <Link
          href='/'
          className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
        >
          <HiHome className='w-7 h-7' />
          <span className='font-bold hidden xl:inline'>Home</span>
        </Link>

        {/* Auth Buttons */}
        <div className='hidden xl:inline'>
          <button
            onClick={handleSignOut}
            className='bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md font-semibold flex items-center justify-center'
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="w-full px-3 py-4 border-t border-gray-200">
        <MiniProfile user={user} />
      </div>    
    </div>
  );
}
