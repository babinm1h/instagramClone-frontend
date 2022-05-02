import React from 'react';
import Header from '../components/Header';

const Profile = () => {
    return (
        <>
            <Header />

            <main className="max-w-4xl mx-auto py-7 w-full">
                <section className="flex gap-10 border-b border-gray-300 pb-10 px-4">
                    <div className="flex-shrink-0">
                        <img src="https://avatars.cloudflare.steamstatic.com/eaac704a2c9fdd6389935bea366b5e68591896d3_full.jpg" alt="user"
                            className="h-[150px] w-[150px] object-contain rounded-[50%] border border-mainGray p-[2px]" />
                    </div>

                    <div className="md:pl-[30px]">
                        <div className="items-start flex-col flex md:items-center md:flex-row gap-5">
                            <h2 className="text-2xl font-light truncate max-w-[200px]">
                                m0NESYCSGOD
                            </h2>
                            <button className="border border-gray-300 h-7 px-8 hover:opacity-80 transition-all duration-150 ease-out rounded-sm">
                                Follow
                            </button>
                            <button className="border border-gray-300 h-7 px-8 hover:opacity-80 transition-all duration-150 ease-out rounded-sm">
                                Edit profile
                            </button>
                        </div>


                        <div className="my-6 flex items-center gap-7 text-lg">
                            <span className="">1074 posts</span>
                            <span className="">74999 followers</span>

                        </div>

                        <div className="">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, amet dolore ea temporibus dicta consequatur sapiente expedita dolorum, soluta eligendi voluptatibus ducimus, vitae asperiores dignissimos?
                            </p>
                        </div>
                    </div>
                </section>


                <section className="mt-10">
                    <div className="grid-cols-1 place-items-center sm:grid-cols-3 grid md:grid-cols-3 gap-5">
                        {[...Array(10)].map(i => <img src="https://img-cdn.hltv.org/gallerypicture/zX1I1UpKON7JzrrC2Q2aTK.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=1091&mx=202&my=4847&w=8192&s=9d84b587fe5b2e23ff8f9eebce48689e" alt=""
                            className="w-full max-w-[290px] max-h-[290px] object-cover object-center mt-6" />)}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Profile;