import avatar from '../assets/images/avatar-jessica.jpeg'


function Profile(){
    return (
    <div className="flex justify-center items-center flex-col bg-[var(--gray-800)] p-[4.1rem] w-[38.5rem] gap-[2.6rem] rounded-[1rem] [@media(max-width:425px)]:w-[100%] transition ">
        <div className="flex justify-center items-center flex-col gap-[3rem]" >
            <img src={avatar} alt="avatar" className='rounded-[50%] w-[8.7rem]' />
            
            <div className='flex justify-center items-center flex-col gap-[1.2rem]'>
                <p className='leading-none text-[2.4rem] text-[var(--white)] font-[var(--font-body)] font-bold '>Jessica Randall</p>
                <p className=' leading-none text-[1.4rem] text-[var(--green)] font-[var(--font-body)] font-semibold'>London, United Kingdom</p>
            </div>
            <p className='leading-none text-[1.5rem] text-[var(--white)] font-[var(--font-body)] font-regular opacity-65'>"Front-end developer and avid reader."</p>
        </div>

        <div className="w-full flex justify-center items-center flex-col gap-[1.6rem] ">    
            <p className='cursor-pointer w-full bg-[var(--gray-700)] leading-none text-[1.4rem] text-[var(--white)] font-[var(--font-body)] font-bold text-center py-[1.55rem] rounded-[0.75rem]  hover:bg-[var(--green)] not-only:hover:text-[var(--gray-800)] transition'>GitHub</p>
            <p className='cursor-pointer w-full bg-[var(--gray-700)] leading-none text-[1.4rem] text-[var(--white)] font-[var(--font-body)] font-bold text-center py-[1.55rem] rounded-[0.75rem] hover:bg-[var(--green)] not-only:hover:text-[var(--gray-800)] transition'>Frontend Mentor</p>
            <p className='cursor-pointer w-full bg-[var(--gray-700)] leading-none text-[1.4rem] text-[var(--white)] font-[var(--font-body)] font-bold text-center py-[1.55rem] rounded-[0.75rem] hover:bg-[var(--green)] not-only:hover:text-[var(--gray-800)] transition'>LinkedIn</p>
            <p className='cursor-pointer w-full bg-[var(--gray-700)] leading-none text-[1.4rem] text-[var(--white)] font-[var(--font-body)] font-bold text-center py-[1.55rem] rounded-[0.75rem] hover:bg-[var(--green)] not-only:hover:text-[var(--gray-800)] transition'>Twitter</p>
            <p className='cursor-pointer w-full bg-[var(--gray-700)] leading-none text-[1.4rem] text-[var(--white)] font-[var(--font-body)] font-bold text-center py-[1.55rem] rounded-[0.75rem] hover:bg-[var(--green)] not-only:hover:text-[var(--gray-800)] transition'>Instagram</p>    
        </div>
    </div>)
}

export default Profile