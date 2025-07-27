import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import moment from 'moment';
import Icons from './Icons';import { cookies } from 'next/headers';
;

export default async function Post({ post }) {
    const cookieStore = await cookies();
    const userId = cookieStore.get('user_id')?.value;
  return (
    <div className='flex p-3 border-b border-gray-200 w-full hover:bg-gray-50'>
      <Link href={`/user/${post?.username}`}>
        <img
          src={post?.profileImg}
          alt='user-img'
          className='h-11 w-11 rounded-full mr-4'
        />
      </Link>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-1 whitespace-nowrap'>
            {/* <h4 className='font-bold text-xs truncate max-w-32'>
              {post?.name}
            </h4> */}
            <span className='text-xs truncate max-w-32'>@{post?.username}</span>
            {/* add dot space here */}
            <span className='text-xl text-gray-500'>·</span>
            <span className='text-xs text-gray-500 flex-1 truncate max-w-32'>
              {moment(post?.createdAt).fromNow()}
            </span>
          </div>
          <HiDotsHorizontal className='text-sm' />
        </div>
        
        <Link href={`/posts/${post?.id}`}>
          <p className='text-gray-800 text-sm my-3 w-full'>{post?.text}</p>
        </Link>
        <Link href={`/posts/${post?.id}`}>
          <img src={post?.image} className='rounded-2xl mr-2' />
        </Link>
        <Icons post={post} currentUserId={userId} />
      </div>
    </div>
  );
}
